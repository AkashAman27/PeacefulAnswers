// Comprehensive JSON Schema for Bulk Upload System
// Supports: Deities, Goddesses, Gods, Ramayana stories, and other spiritual content

export type ContentType = 
  | 'deity' 
  | 'goddess' 
  | 'god' 
  | 'story' 
  | 'ramayana' 
  | 'scripture' 
  | 'practice' 
  | 'festival' 
  | 'temple' 
  | 'mantra' 
  | 'philosophy';

export type ContentStatus = 'draft' | 'published' | 'archived';

export interface ImageData {
  url: string;
  alt: string;
  caption?: string;
  credit?: string;
}

export interface SEOData {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  ogImage?: string;
}

export interface PersonalityTraits {
  attributes: string[];
  qualities: string[];
  symbols: string[];
  colors: string[];
  animals?: string[];
  vehicles?: string[];
}

export interface GeographicalInfo {
  region?: string;
  temples?: string[];
  pilgrimage?: string[];
  significance?: string;
}

export interface StoryContent {
  chapters?: {
    title: string;
    content: string;
    summary: string;
  }[];
  moralLesson?: string;
  culturalSignificance?: string;
  historicalContext?: string;
}

export interface BulkUploadItem {
  // Core Identification
  slug: string;                    // Required: URL-friendly identifier
  title: string;                   // Required: Display title
  contentType: ContentType;        // Required: Type of content
  status: ContentStatus;           // Required: Publication status

  // Content Structure
  shortDescription: string;        // Required: Brief summary (150-200 chars)
  description: string;            // Required: Main description/content
  longContent?: string;           // Optional: Extended detailed content
  
  // Visual Assets
  featuredImage: ImageData;       // Required: Main image
  gallery?: ImageData[];          // Optional: Additional images
  heroImage?: ImageData;          // Optional: Hero banner image
  
  // SEO & Discovery
  seo: SEOData;                   // Required: SEO optimization
  tags: string[];                 // Required: Content tags for filtering
  categories: string[];           // Required: Content categories
  
  // Deity/God/Goddess Specific Fields
  deityInfo?: {
    names: string[];              // Alternative names
    consort?: string;             // Spouse/partner
    parents?: string[];           // Divine parents
    children?: string[];          // Divine children
    avatar?: string;              // Avatar of which deity
    mantras: string[];            // Associated mantras
    festivals: string[];          // Associated festivals
    regions: string[];            // Regions of worship
    personalityTraits: PersonalityTraits;
    geographicalInfo: GeographicalInfo;
  };

  // Story Specific Fields
  storyInfo?: {
    storyType: 'mythology' | 'historical' | 'folktale' | 'epic';
    characters: string[];         // Main characters
    setting: string;              // Time/place setting
    origin: string;               // Source text or tradition
    storyContent: StoryContent;
    relatedStories?: string[];    // Related story slugs
    difficulty: 'beginner' | 'intermediate' | 'advanced';
  };

  // Scripture/Text Specific Fields
  scriptureInfo?: {
    originalLanguage: string;
    author?: string;
    period?: string;
    tradition: string;
    chapters?: number;
    verses?: number;
    translations: string[];       // Available translations
    commentaries?: string[];      // Available commentaries
  };

  // Practice/Ritual Specific Fields
  practiceInfo?: {
    practiceType: 'meditation' | 'ritual' | 'yoga' | 'worship' | 'festival';
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    duration?: string;            // Time required
    materials?: string[];         // Required items
    steps?: string[];             // Step-by-step instructions
    benefits?: string[];          // Spiritual/practical benefits
    precautions?: string[];       // Things to be careful about
  };

  // Metadata
  author?: string;                // Content author/contributor
  publishDate?: string;           // ISO date string
  lastModified?: string;          // ISO date string
  language: string;               // Content language (default: 'en')
  readingTime?: number;           // Estimated reading time in minutes
  
  // Relations & Cross-references
  relatedContent?: string[];      // Related content slugs
  references?: string[];          // Source references
  externalLinks?: {
    title: string;
    url: string;
    description?: string;
  }[];

  // Custom Fields (for extensibility)
  customFields?: Record<string, any>;
}

// Validation Schema
export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

// Bulk Upload Response
export interface BulkUploadResult {
  success: boolean;
  totalItems: number;
  successCount: number;
  failureCount: number;
  errors: {
    item: string;
    slug: string;
    errors: string[];
  }[];
  createdSlugs: string[];
  skippedSlugs: string[];
}