'use client';

import { useState, useEffect } from 'react';
import { 
  Plus, 
  Edit2, 
  Trash2, 
  Search, 
  Filter, 
  Eye, 
  EyeOff, 
  Star, 
  Save,
  X,
  ThumbsUp,
  Calendar,
  Upload,
  FileText,
  Download
} from 'lucide-react';

interface FAQ {
  id?: number;
  question: string;
  answer: string;
  category: string;
  difficulty_level: string;
  tags: string[];
  is_featured: boolean;
  view_count?: number;
  helpful_count?: number;
  created_at?: string;
  updated_at?: string;
  published: boolean;
  author: string;
  seo_keywords: string;
}

interface Category {
  name: string;
  count: number;
}

const CATEGORIES = [
  'Spiritual Practices',
  'Deities', 
  'Scriptures',
  'Festivals',
  'General',
  'Philosophy',
  'Meditation',
  'Rituals',
  'Mantras',
  'Yoga'
];

const DIFFICULTIES = ['beginner', 'intermediate', 'advanced'];

export default function AdminQuestionsPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingFAQ, setEditingFAQ] = useState<FAQ | null>(null);
  const [formData, setFormData] = useState<FAQ>({
    question: '',
    answer: '',
    category: CATEGORIES[0],
    difficulty_level: DIFFICULTIES[0],
    tags: [],
    is_featured: false,
    published: true,
    author: 'Admin',
    seo_keywords: ''
  });
  const [tagInput, setTagInput] = useState('');
  const [showBulkUpload, setShowBulkUpload] = useState(false);
  const [bulkUploadData, setBulkUploadData] = useState('');
  const [bulkUploadLoading, setBulkUploadLoading] = useState(false);
  const [bulkUploadResult, setBulkUploadResult] = useState<any>(null);

  useEffect(() => {
    fetchFAQs();
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchFAQs();
  }, [searchTerm, selectedCategory]);

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/faqs/categories');
      if (response.ok) {
        const data = await response.json();
        setCategories(data.categories);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchFAQs = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        limit: '100',
        ...(searchTerm && { search: searchTerm }),
        ...(selectedCategory && { category: selectedCategory }),
      });

      const response = await fetch(`/api/faqs?${params}`);
      if (response.ok) {
        const data = await response.json();
        setFaqs(data.data);
      }
    } catch (error) {
      console.error('Error fetching FAQs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const method = editingFAQ ? 'PUT' : 'POST';
      const url = editingFAQ ? `/api/faqs/${editingFAQ.id}` : '/api/faqs';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        await fetchFAQs();
        await fetchCategories();
        resetForm();
        alert(editingFAQ ? 'FAQ updated successfully!' : 'FAQ created successfully!');
      } else {
        alert('Error saving FAQ. Please try again.');
      }
    } catch (error) {
      console.error('Error saving FAQ:', error);
      alert('Error saving FAQ. Please try again.');
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this FAQ?')) return;
    
    try {
      const response = await fetch(`/api/faqs/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await fetchFAQs();
        await fetchCategories();
        alert('FAQ deleted successfully!');
      } else {
        alert('Error deleting FAQ. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting FAQ:', error);
      alert('Error deleting FAQ. Please try again.');
    }
  };

  const handleEdit = (faq: FAQ) => {
    setEditingFAQ(faq);
    setFormData({
      question: faq.question,
      answer: faq.answer,
      category: faq.category,
      difficulty_level: faq.difficulty_level,
      tags: faq.tags || [],
      is_featured: faq.is_featured,
      published: faq.published,
      author: faq.author,
      seo_keywords: faq.seo_keywords || ''
    });
    setTagInput(faq.tags?.join(', ') || '');
    setShowForm(true);
  };

  const resetForm = () => {
    setShowForm(false);
    setEditingFAQ(null);
    setFormData({
      question: '',
      answer: '',
      category: CATEGORIES[0],
      difficulty_level: DIFFICULTIES[0],
      tags: [],
      is_featured: false,
      published: true,
      author: 'Admin',
      seo_keywords: ''
    });
    setTagInput('');
  };

  const handleTagInput = (value: string) => {
    setTagInput(value);
    const tags = value.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);
    setFormData(prev => ({ ...prev, tags }));
  };

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-orange-100 text-orange-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Spiritual Practices': 'bg-blue-100 text-blue-800',
      'Deities': 'bg-orange-100 text-orange-800',
      'Scriptures': 'bg-purple-100 text-purple-800',
      'Festivals': 'bg-red-100 text-red-800',
      'General': 'bg-gray-100 text-gray-800',
      'Philosophy': 'bg-indigo-100 text-indigo-800',
      'Meditation': 'bg-green-100 text-green-800',
      'Rituals': 'bg-yellow-100 text-yellow-800',
      'Mantras': 'bg-pink-100 text-pink-800',
      'Yoga': 'bg-teal-100 text-teal-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const handleBulkUpload = async () => {
    if (!bulkUploadData.trim()) {
      alert('Please enter JSON data for bulk upload');
      return;
    }

    try {
      setBulkUploadLoading(true);
      setBulkUploadResult(null);

      // Parse JSON data
      const jsonData = JSON.parse(bulkUploadData);
      
      // Validate structure
      if (!jsonData.items || !Array.isArray(jsonData.items)) {
        throw new Error('JSON must contain an "items" array');
      }

      // Send to bulk upload API
      const response = await fetch('/api/faqs/bulk-upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      });

      const result = await response.json();

      if (response.ok) {
        setBulkUploadResult(result);
        await fetchFAQs(); // Refresh the FAQ list
        await fetchCategories(); // Refresh categories
        
        if (result.successCount > 0) {
          alert(`Successfully uploaded ${result.successCount} FAQ(s)!`);
        }
      } else {
        alert(`Upload failed: ${result.error}`);
      }
    } catch (error) {
      console.error('Bulk upload error:', error);
      if (error instanceof SyntaxError) {
        alert(`JSON Syntax Error: ${error.message}\n\nPlease check your JSON format. Use the "Generate Sample JSON" button for a properly formatted example.`);
      } else {
        alert(error instanceof Error ? error.message : 'Failed to parse JSON data');
      }
    } finally {
      setBulkUploadLoading(false);
    }
  };

  const generateSampleJSON = () => {
    const sampleData = {
      items: [
        {
          question: "What is the meaning of Akash Aman?",
          answer: "Om (AUM) is the most sacred sound in Hinduism, representing the cosmic vibration that underlies all existence. It is composed of three syllables - A, U, M - representing creation, preservation, and destruction respectively.",
          category: "Philosophy",
          tags: ["om", "mantra", "sacred sound", "philosophy"],
          display_order: 1,
          is_published: true
        },
        {
          question: "What are the four Vedas?",
          answer: "The four Vedas are: 1) Rigveda - containing hymns and prayers, 2) Samaveda - containing musical chants, 3) Yajurveda - containing ritual formulas, and 4) Atharvaveda - containing spells and incantations for daily life.",
          category: "Scriptures",
          tags: ["vedas", "scriptures", "rigveda", "samaveda", "yajurveda", "atharvaveda"],
          display_order: 2,
          is_published: true
        }
      ]
    };
    setBulkUploadData(JSON.stringify(sampleData, null, 2));
  };

  const resetBulkUpload = () => {
    setShowBulkUpload(false);
    setBulkUploadData('');
    setBulkUploadResult(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">FAQ Management</h1>
            <p className="text-gray-600 mt-2">Manage frequently asked questions for the website</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowBulkUpload(true)}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Upload className="h-4 w-4" />
              Bulk Upload
            </button>
            <button
              onClick={() => setShowForm(true)}
              className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
            >
              <Plus className="h-4 w-4" />
              Add New FAQ
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-blue-600">{faqs.length}</div>
            <div className="text-sm text-gray-600">Total FAQs</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-green-600">
              {faqs.filter(f => f.published).length}
            </div>
            <div className="text-sm text-gray-600">Published</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-yellow-600">
              {faqs.filter(f => f.is_featured).length}
            </div>
            <div className="text-sm text-gray-600">Featured</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-purple-600">{categories.length}</div>
            <div className="text-sm text-gray-600">Categories</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
              />
            </div>
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category.name} value={category.name}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* FAQ List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">All FAQs</h2>
          </div>
          
          {loading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading FAQs...</p>
            </div>
          ) : faqs.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-gray-600">No FAQs found.</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {faqs.map((faq) => (
                <div key={faq.id} className="p-6 hover:bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {faq.is_featured && (
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        )}
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(faq.category)}`}>
                          {faq.category}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(faq.difficulty_level)}`}>
                          {faq.difficulty_level}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          faq.published ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {faq.published ? 'Published' : 'Draft'}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {faq.question}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {faq.answer}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {faq.view_count || 0} views
                        </span>
                        <span className="flex items-center">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          {faq.helpful_count || 0} helpful
                        </span>
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {faq.created_at ? new Date(faq.created_at).toLocaleDateString() : 'Draft'}
                        </span>
                      </div>

                      {faq.tags && faq.tags.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {faq.tags.map((tag, index) => (
                            <span 
                              key={index}
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 ml-4">
                      <button
                        onClick={() => handleEdit(faq)}
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                      >
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => faq.id && handleDelete(faq.id)}
                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* FAQ Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  {editingFAQ ? 'Edit FAQ' : 'Add New FAQ'}
                </h2>
                <button
                  onClick={resetForm}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Question */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Question *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.question}
                    onChange={(e) => setFormData(prev => ({ ...prev, question: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                    placeholder="Enter the FAQ question..."
                  />
                </div>

                {/* Answer */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Answer *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.answer}
                    onChange={(e) => setFormData(prev => ({ ...prev, answer: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                    placeholder="Enter the detailed answer..."
                  />
                </div>

                {/* Category and Difficulty */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      required
                      value={formData.category}
                      onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                    >
                      {CATEGORIES.map(category => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Difficulty Level *
                    </label>
                    <select
                      required
                      value={formData.difficulty_level}
                      onChange={(e) => setFormData(prev => ({ ...prev, difficulty_level: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                    >
                      {DIFFICULTIES.map(difficulty => (
                        <option key={difficulty} value={difficulty}>
                          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tags (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={tagInput}
                    onChange={(e) => handleTagInput(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                    placeholder="meditation, dharma, spiritual practice..."
                  />
                </div>

                {/* SEO Keywords */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    SEO Keywords
                  </label>
                  <input
                    type="text"
                    value={formData.seo_keywords}
                    onChange={(e) => setFormData(prev => ({ ...prev, seo_keywords: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                    placeholder="Keywords for search optimization..."
                  />
                </div>

                {/* Author */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Author
                  </label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                    placeholder="Author name..."
                  />
                </div>

                {/* Toggles */}
                <div className="space-y-3">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.is_featured}
                      onChange={(e) => setFormData(prev => ({ ...prev, is_featured: e.target.checked }))}
                      className="sr-only"
                    />
                    <div className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                      formData.is_featured ? 'bg-orange-600' : 'bg-gray-200'
                    }`}>
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                        formData.is_featured ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </div>
                    <span className="ml-3 text-sm font-medium text-gray-700 flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Featured FAQ
                    </span>
                  </label>

                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.published}
                      onChange={(e) => setFormData(prev => ({ ...prev, published: e.target.checked }))}
                      className="sr-only"
                    />
                    <div className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                      formData.published ? 'bg-green-600' : 'bg-gray-200'
                    }`}>
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                        formData.published ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </div>
                    <span className="ml-3 text-sm font-medium text-gray-700 flex items-center">
                      {formData.published ? <Eye className="h-4 w-4 mr-1" /> : <EyeOff className="h-4 w-4 mr-1" />}
                      Published
                    </span>
                  </label>
                </div>

                {/* Submit Buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <button
                    type="submit"
                    className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
                  >
                    <Save className="h-4 w-4" />
                    {editingFAQ ? 'Update FAQ' : 'Create FAQ'}
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Bulk Upload Modal */}
        {showBulkUpload && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Bulk Upload FAQs</h2>
                  <p className="text-sm text-gray-600 mt-1">Upload multiple FAQs at once using JSON format</p>
                </div>
                <button
                  onClick={resetBulkUpload}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="p-6">
                {/* Instructions */}
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <FileText className="h-5 w-5 text-blue-400" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-blue-800">JSON Format Instructions</h3>
                      <div className="mt-2 text-sm text-blue-700">
                        <p>Your JSON should contain an "items" array with FAQ objects. Each FAQ object can have:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                          <li><strong>question</strong> (required) - The FAQ question</li>
                          <li><strong>answer</strong> (required) - The detailed answer</li>
                          <li><strong>category</strong> (optional) - Category name, defaults to "General"</li>
                          <li><strong>tags</strong> (optional) - Array of tags</li>
                          <li><strong>display_order</strong> (optional) - Display order, defaults to 0</li>
                          <li><strong>is_published</strong> (optional) - Published status, defaults to true</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 mb-4">
                  <button
                    onClick={generateSampleJSON}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm"
                  >
                    <Download className="h-4 w-4" />
                    Generate Sample JSON
                  </button>
                </div>

                {/* JSON Input */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    JSON Data
                  </label>
                  <textarea
                    value={bulkUploadData}
                    onChange={(e) => setBulkUploadData(e.target.value)}
                    className="w-full h-80 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm text-gray-900"
                    placeholder="Paste your JSON data here..."
                  />
                </div>

                {/* Upload Results */}
                {bulkUploadResult && (
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Upload Results</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <div className="text-lg font-bold text-green-600">
                          {bulkUploadResult.successCount}
                        </div>
                        <div className="text-sm text-green-800">Successful</div>
                      </div>
                      <div className="bg-red-50 p-3 rounded-lg">
                        <div className="text-lg font-bold text-red-600">
                          {bulkUploadResult.failureCount}
                        </div>
                        <div className="text-sm text-red-800">Failed</div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">
                          {bulkUploadResult.totalItems}
                        </div>
                        <div className="text-sm text-blue-800">Total</div>
                      </div>
                    </div>

                    {/* Success Items */}
                    {bulkUploadResult.createdItems.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-medium text-green-800 mb-2">Successfully Created:</h4>
                        <div className="bg-green-50 p-3 rounded-lg max-h-32 overflow-y-auto">
                          {bulkUploadResult.createdItems.map((question: string, index: number) => (
                            <div key={index} className="text-sm text-green-700">
                              • {question}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Error Items */}
                    {bulkUploadResult.errors.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-medium text-red-800 mb-2">Errors:</h4>
                        <div className="bg-red-50 p-3 rounded-lg max-h-32 overflow-y-auto space-y-1">
                          {bulkUploadResult.errors.map((error: any, index: number) => (
                            <div key={index} className="text-sm text-red-700">
                              <strong>Item {error.item}:</strong> {error.error}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={resetBulkUpload}
                    className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleBulkUpload}
                    disabled={!bulkUploadData.trim() || bulkUploadLoading}
                    className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {bulkUploadLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Uploading...
                      </>
                    ) : (
                      <>
                        <Upload className="h-4 w-4" />
                        Upload FAQs
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}