import { BulkUploadItem, ValidationResult, ContentType } from '@/types/bulkUpload';

export class JSONValidator {
  static validateBulkUploadItem(item: any, index: number): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    // Required fields validation
    if (!item.slug) {
      errors.push(`Item ${index}: Missing required field 'slug'`);
    } else if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.slug)) {
      errors.push(`Item ${index}: Slug must be lowercase, alphanumeric with hyphens only`);
    }

    if (!item.title) {
      errors.push(`Item ${index}: Missing required field 'title'`);
    }

    if (!item.contentType) {
      errors.push(`Item ${index}: Missing required field 'contentType'`);
    } else if (!this.isValidContentType(item.contentType)) {
      errors.push(`Item ${index}: Invalid contentType. Must be one of: deity, goddess, god, story, ramayana, scripture, practice, festival, temple, mantra, philosophy`);
    }

    if (!item.status) {
      errors.push(`Item ${index}: Missing required field 'status'`);
    } else if (!['draft', 'published', 'archived'].includes(item.status)) {
      errors.push(`Item ${index}: Invalid status. Must be: draft, published, or archived`);
    }

    if (!item.shortDescription) {
      errors.push(`Item ${index}: Missing required field 'shortDescription'`);
    } else if (item.shortDescription.length < 50 || item.shortDescription.length > 200) {
      warnings.push(`Item ${index}: shortDescription should be between 50-200 characters`);
    }

    if (!item.description) {
      errors.push(`Item ${index}: Missing required field 'description'`);
    } else if (item.description.length < 100) {
      warnings.push(`Item ${index}: description seems too short (less than 100 characters)`);
    }

    // Featured Image validation
    if (!item.featuredImage) {
      errors.push(`Item ${index}: Missing required field 'featuredImage'`);
    } else {
      if (!item.featuredImage.url) {
        errors.push(`Item ${index}: featuredImage missing 'url' field`);
      } else if (!this.isValidURL(item.featuredImage.url)) {
        errors.push(`Item ${index}: featuredImage.url is not a valid URL`);
      }
      
      if (!item.featuredImage.alt) {
        errors.push(`Item ${index}: featuredImage missing 'alt' field`);
      }
    }

    // SEO validation
    if (!item.seo) {
      errors.push(`Item ${index}: Missing required field 'seo'`);
    } else {
      if (!item.seo.metaTitle) {
        errors.push(`Item ${index}: seo missing 'metaTitle' field`);
      } else if (item.seo.metaTitle.length > 60) {
        warnings.push(`Item ${index}: metaTitle should be under 60 characters for better SEO`);
      }

      if (!item.seo.metaDescription) {
        errors.push(`Item ${index}: seo missing 'metaDescription' field`);
      } else if (item.seo.metaDescription.length > 160) {
        warnings.push(`Item ${index}: metaDescription should be under 160 characters for better SEO`);
      }

      if (!item.seo.keywords || !Array.isArray(item.seo.keywords)) {
        errors.push(`Item ${index}: seo 'keywords' must be an array`);
      }
    }

    // Tags and Categories validation
    if (!item.tags || !Array.isArray(item.tags)) {
      errors.push(`Item ${index}: 'tags' must be an array`);
    } else if (item.tags.length === 0) {
      warnings.push(`Item ${index}: Consider adding tags for better discoverability`);
    }

    if (!item.categories || !Array.isArray(item.categories)) {
      errors.push(`Item ${index}: 'categories' must be an array`);
    } else if (item.categories.length === 0) {
      warnings.push(`Item ${index}: Consider adding categories for better organization`);
    }

    // Content-type specific validations
    this.validateContentSpecificFields(item, index, errors, warnings);

    return {
      isValid: errors.length === 0,
      errors,
      warnings
    };
  }

  private static validateContentSpecificFields(
    item: any, 
    index: number, 
    errors: string[], 
    warnings: string[]
  ): void {
    const contentType = item.contentType;

    // Deity/God/Goddess specific validation
    if (['deity', 'god', 'goddess'].includes(contentType)) {
      if (!item.deityInfo) {
        warnings.push(`Item ${index}: Consider adding 'deityInfo' for ${contentType} content`);
      } else {
        if (!item.deityInfo.names || !Array.isArray(item.deityInfo.names)) {
          warnings.push(`Item ${index}: deityInfo.names should be an array`);
        }
        if (!item.deityInfo.mantras || !Array.isArray(item.deityInfo.mantras)) {
          warnings.push(`Item ${index}: deityInfo.mantras should be an array`);
        }
        if (!item.deityInfo.personalityTraits) {
          warnings.push(`Item ${index}: Consider adding personalityTraits for better content`);
        }
      }
    }

    // Story specific validation
    if (['story', 'ramayana'].includes(contentType)) {
      if (!item.storyInfo) {
        warnings.push(`Item ${index}: Consider adding 'storyInfo' for story content`);
      } else {
        if (!item.storyInfo.characters || !Array.isArray(item.storyInfo.characters)) {
          warnings.push(`Item ${index}: storyInfo.characters should be an array`);
        }
        if (!item.storyInfo.storyType) {
          warnings.push(`Item ${index}: Consider specifying storyType`);
        }
      }
    }

    // Scripture specific validation
    if (contentType === 'scripture') {
      if (!item.scriptureInfo) {
        warnings.push(`Item ${index}: Consider adding 'scriptureInfo' for scripture content`);
      }
    }

    // Practice specific validation
    if (contentType === 'practice') {
      if (!item.practiceInfo) {
        warnings.push(`Item ${index}: Consider adding 'practiceInfo' for practice content`);
      } else {
        if (!item.practiceInfo.difficulty) {
          warnings.push(`Item ${index}: Consider adding difficulty level for practice`);
        }
      }
    }
  }

  private static isValidContentType(contentType: string): contentType is ContentType {
    return [
      'deity', 'goddess', 'god', 'story', 'ramayana', 
      'scripture', 'practice', 'festival', 'temple', 'mantra', 'philosophy'
    ].includes(contentType);
  }

  private static isValidURL(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  static validateBulkUpload(jsonData: any[]): ValidationResult[] {
    if (!Array.isArray(jsonData)) {
      return [{
        isValid: false,
        errors: ['JSON data must be an array of items'],
        warnings: []
      }];
    }

    return jsonData.map((item, index) => this.validateBulkUploadItem(item, index));
  }

  static checkForDuplicateSlugs(jsonData: any[]): string[] {
    const slugs = jsonData.map(item => item.slug).filter(Boolean);
    const duplicates = slugs.filter((slug, index) => slugs.indexOf(slug) !== index);
    return [...new Set(duplicates)];
  }
}