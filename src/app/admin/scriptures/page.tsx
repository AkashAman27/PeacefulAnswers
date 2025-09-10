'use client';

import { useState, useEffect } from 'react';
import { 
  Plus, 
  Edit2, 
  Trash2, 
  Search, 
  Book,
  FileText,
  Upload,
  Download,
  Eye,
  EyeOff,
  Star,
  Save,
  X,
  BookOpen
} from 'lucide-react';

interface Scripture {
  id: string;
  title: string;
  sanskrit_name?: string;
  scripture_type: string;
  description?: string;
  total_chapters?: number;
  total_verses?: number;
  status: string;
  is_featured: boolean;
  created_at: string;
}

interface Verse {
  id: string;
  chapter_number: number;
  verse_number: number;
  sanskrit_text?: string;
  transliteration?: string;
  translation: string;
  commentary?: string;
  status: string;
  is_featured: boolean;
}

export default function AdminScripturesPage() {
  const [scriptures, setScriptures] = useState<Scripture[]>([]);
  const [verses, setVerses] = useState<Verse[]>([]);
  const [selectedScripture, setSelectedScripture] = useState<Scripture | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showBulkUpload, setShowBulkUpload] = useState(false);
  const [bulkUploadData, setBulkUploadData] = useState('');
  const [bulkUploadLoading, setBulkUploadLoading] = useState(false);
  const [bulkUploadResult, setBulkUploadResult] = useState<any>(null);

  useEffect(() => {
    fetchScriptures();
  }, []);

  useEffect(() => {
    if (selectedScripture) {
      fetchVerses(selectedScripture.id);
    }
  }, [selectedScripture]);

  const fetchScriptures = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/scriptures');
      if (response.ok) {
        const data = await response.json();
        setScriptures(data.data || []);
        // Auto-select first scripture (Bhagavad Gita)
        if (data.data && data.data.length > 0) {
          setSelectedScripture(data.data[0]);
        }
      }
    } catch (error) {
      console.error('Error fetching scriptures:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchVerses = async (scriptureId: string) => {
    try {
      const params = new URLSearchParams({
        scripture_id: scriptureId,
        limit: '1000', // Increased limit for admin interface to load all verses
        ...(searchTerm && { search: searchTerm }),
      });

      const response = await fetch(`/api/scriptures/verses?${params}`);
      if (response.ok) {
        const data = await response.json();
        setVerses(data.data || []);
      }
    } catch (error) {
      console.error('Error fetching verses:', error);
    }
  };

  const handleBulkUpload = async () => {
    if (!bulkUploadData.trim()) {
      alert('Please enter JSON data for bulk upload');
      return;
    }

    if (!selectedScripture) {
      alert('Please select a scripture first');
      return;
    }

    try {
      setBulkUploadLoading(true);
      setBulkUploadResult(null);

      // Parse JSON data
      const jsonData = JSON.parse(bulkUploadData);
      
      // Validate structure
      if (!jsonData.verses || !Array.isArray(jsonData.verses)) {
        throw new Error('JSON must contain a "verses" array');
      }

      // Add scripture_id to the request
      const requestData = {
        scripture_id: selectedScripture.id,
        verses: jsonData.verses
      };

      // Send to bulk upload API
      const response = await fetch('/api/scriptures/bulk-upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const result = await response.json();

      if (response.ok) {
        setBulkUploadResult(result);
        await fetchVerses(selectedScripture.id); // Refresh the verses list
        
        if (result.successCount > 0) {
          alert(`Successfully uploaded ${result.successCount} verse(s)!`);
        }
      } else {
        alert(`Upload failed: ${result.error}`);
      }
    } catch (error) {
      console.error('Bulk upload error:', error);
      alert(error instanceof Error ? error.message : 'Failed to parse JSON data');
    } finally {
      setBulkUploadLoading(false);
    }
  };

  const generateSampleJSON = () => {
    const sampleData = {
      verses: [
        {
          chapter_number: 1,
          verse_number: 1,
          sanskrit_text: "धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः।\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय।।",
          transliteration: "dharma-kṣhetre kuru-kṣhetre samavetā yuyutsavaḥ\nmāmakāḥ pāṇḍavāśhchaiva kim akurvata sañjaya",
          translation: "O Sañjaya, after gathering on the holy field of Kurukṣhetra, and desiring to fight, what did my sons and the sons of Pāṇḍu do?",
          word_meanings: [
            { word: "dharma-kṣhetre", meaning: "in the holy field" },
            { word: "kuru-kṣhetre", meaning: "in the field of Kurus" },
            { word: "samavetāḥ", meaning: "assembled" },
            { word: "yuyutsavaḥ", meaning: "desiring to fight" }
          ],
          commentary: "This opening verse sets the scene for the Bhagavad Gita. King Dhritarashtra asks his minister Sanjaya about the events at Kurukshetra, the field where the great battle between the Kauravas and Pandavas is about to begin.",
          key_concepts: ["dharma", "kurukshetra", "battle", "righteousness"],
          tags: ["opening", "dhritarashtra", "sanjaya", "battlefield"],
          is_featured: false,
          status: "published"
        },
        {
          chapter_number: 1,
          verse_number: 2,
          sanskrit_text: "सञ्जय उवाच।\nदृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा।\nआचार्यमुपसङ्गम्य राजा वचनमब्रवीत्।।",
          transliteration: "sañjaya uvācha\ndṛiṣhṭvā tu pāṇḍavānīkaṁ vyūḍhaṁ duryodhanas tadā\nāchāryam upasaṅgamya rājā vachanam abravīt",
          translation: "Sañjaya said: On seeing the Pandava army arranged in military formation, King Duryodhana approached his teacher Dronacharya, and said the following words.",
          word_meanings: [
            { word: "sañjayaḥ uvācha", meaning: "Sanjaya said" },
            { word: "dṛiṣhṭvā", meaning: "on seeing" },
            { word: "pāṇḍava-anīkam", meaning: "the Pandava army" },
            { word: "vyūḍham", meaning: "arranged in military formation" }
          ],
          commentary: "Sanjaya begins his narration by describing how Duryodhana, upon seeing the well-arranged Pandava forces, approached his teacher Dronacharya. This shows Duryodhana's anxiety about the upcoming battle.",
          key_concepts: ["military formation", "teacher-student relationship", "battle strategy"],
          tags: ["duryodhana", "dronacharya", "pandava army", "military formation"],
          is_featured: false,
          status: "published"
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

  const filteredVerses = verses.filter(verse => {
    const searchLower = searchTerm.toLowerCase().trim();
    
    if (!searchLower) return true;
    
    // Check for chapter and verse number patterns
    const chapterVersePatterns = [
      // "chapter 1", "ch 1", "c 1"
      /(?:chapter|ch|c)\s*(\d+)/i,
      // "verse 1", "v 1"
      /(?:verse|v)\s*(\d+)/i,
      // "1,1" or "1.1" (chapter,verse)
      /^(\d+)[,.](\d+)$/,
      // "chapter 1 verse 1", "ch 1 v 1", etc.
      /(?:chapter|ch|c)\s*(\d+)\s*(?:verse|v)\s*(\d+)/i
    ];
    
    // Check chapter patterns
    const chapterMatch = searchLower.match(/(?:chapter|ch|c)\s*(\d+)/i);
    if (chapterMatch) {
      const searchChapter = parseInt(chapterMatch[1]);
      if (verse.chapter_number === searchChapter) {
        return true;
      }
    }
    
    // Check verse patterns
    const verseMatch = searchLower.match(/(?:verse|v)\s*(\d+)/i);
    if (verseMatch) {
      const searchVerse = parseInt(verseMatch[1]);
      if (verse.verse_number === searchVerse) {
        return true;
      }
    }
    
    // Check "1,1" or "1.1" pattern (chapter,verse)
    const chapterVerseMatch = searchLower.match(/^(\d+)[,.](\d+)$/);
    if (chapterVerseMatch) {
      const searchChapter = parseInt(chapterVerseMatch[1]);
      const searchVerse = parseInt(chapterVerseMatch[2]);
      if (verse.chapter_number === searchChapter && verse.verse_number === searchVerse) {
        return true;
      }
    }
    
    // Check "chapter 1 verse 1" pattern
    const fullMatch = searchLower.match(/(?:chapter|ch|c)\s*(\d+)\s*(?:verse|v)\s*(\d+)/i);
    if (fullMatch) {
      const searchChapter = parseInt(fullMatch[1]);
      const searchVerse = parseInt(fullMatch[2]);
      if (verse.chapter_number === searchChapter && verse.verse_number === searchVerse) {
        return true;
      }
    }
    
    // Check if it's just numbers (could be chapter or verse)
    if (/^\d+$/.test(searchLower)) {
      const num = parseInt(searchLower);
      if (verse.chapter_number === num || verse.verse_number === num) {
        return true;
      }
    }
    
    // Original content search (translation, sanskrit, transliteration)
    return (
      verse.translation.toLowerCase().includes(searchLower) ||
      verse.sanskrit_text?.toLowerCase().includes(searchLower) ||
      verse.transliteration?.toLowerCase().includes(searchLower) ||
      verse.commentary?.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Scripture Management</h1>
            <p className="text-gray-600 mt-2">Manage Hindu scriptures and verses</p>
          </div>
          <div className="flex items-center gap-3">
            {selectedScripture && (
              <button
                onClick={() => setShowBulkUpload(true)}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Upload className="h-4 w-4" />
                Bulk Upload Verses
              </button>
            )}
            <button className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors">
              <Plus className="h-4 w-4" />
              Add Scripture
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Scriptures List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Book className="h-5 w-5 mr-2 text-orange-600" />
                  Scriptures
                </h2>
              </div>
              
              {loading ? (
                <div className="p-6 text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600 mx-auto"></div>
                  <p className="mt-4 text-gray-600">Loading scriptures...</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {scriptures.map((scripture) => (
                    <div
                      key={scripture.id}
                      onClick={() => setSelectedScripture(scripture)}
                      className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                        selectedScripture?.id === scripture.id ? 'bg-blue-50 border-r-4 border-blue-500' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900">{scripture.title}</h3>
                          {scripture.sanskrit_name && (
                            <p className="text-sm text-gray-600 mt-1">{scripture.sanskrit_name}</p>
                          )}
                          <div className="flex items-center mt-2 text-sm text-gray-500">
                            <span className="bg-gray-100 px-2 py-1 rounded text-xs">
                              {scripture.scripture_type.replace('_', ' ').toUpperCase()}
                            </span>
                            {scripture.total_chapters && (
                              <span className="ml-2">{scripture.total_chapters} chapters</span>
                            )}
                          </div>
                        </div>
                        {scripture.is_featured && (
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Verses List */}
          <div className="lg:col-span-2">
            {selectedScripture ? (
              <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900 flex items-center">
                      <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                      {selectedScripture.title} - Verses
                    </h2>
                    <span className="text-sm text-gray-500">
                      {verses.length} verses
                    </span>
                  </div>

                  {/* Search */}
                  <div className="mt-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search verses... (e.g., 'Chapter 1', 'Verse 1', '1,1', 'Chapter 1 Verse 1')"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                      />
                    </div>
                  </div>
                </div>

                <div className="max-h-[600px] overflow-y-auto">
                  {filteredVerses.length === 0 ? (
                    <div className="p-8 text-center">
                      <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">No verses found</h3>
                      <p className="text-gray-600 max-w-md mx-auto">
                        {searchTerm ? 'Try different search terms.' : 'Use bulk upload to add verses to this scripture.'}
                      </p>
                    </div>
                  ) : (
                    <div className="divide-y divide-gray-200">
                      {filteredVerses.map((verse) => (
                        <div key={verse.id} className="p-6 hover:bg-gray-50">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                                Chapter {verse.chapter_number}, Verse {verse.verse_number}
                              </span>
                              {verse.is_featured && (
                                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              )}
                              <span className={`px-2 py-1 rounded text-xs font-medium ${
                                verse.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                              }`}>
                                {verse.status}
                              </span>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
                                <Edit2 className="h-4 w-4" />
                              </button>
                              <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg">
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>

                          {verse.sanskrit_text && (
                            <div className="mb-3">
                              <h4 className="text-sm font-medium text-gray-700 mb-1">Sanskrit:</h4>
                              <p className="text-gray-900 font-devanagari text-lg leading-relaxed">
                                {verse.sanskrit_text}
                              </p>
                            </div>
                          )}

                          {verse.transliteration && (
                            <div className="mb-3">
                              <h4 className="text-sm font-medium text-gray-700 mb-1">Transliteration:</h4>
                              <p className="text-gray-800 italic">
                                {verse.transliteration}
                              </p>
                            </div>
                          )}

                          <div className="mb-3">
                            <h4 className="text-sm font-medium text-gray-700 mb-1">Translation:</h4>
                            <p className="text-gray-900 leading-relaxed">
                              {verse.translation}
                            </p>
                          </div>

                          {verse.commentary && (
                            <div>
                              <h4 className="text-sm font-medium text-gray-700 mb-1">Commentary:</h4>
                              <p className="text-gray-700 text-sm leading-relaxed">
                                {verse.commentary}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <Book className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Select a Scripture</h3>
                <p className="text-gray-600">Choose a scripture from the left panel to view and manage its verses.</p>
              </div>
            )}
          </div>
        </div>

        {/* Bulk Upload Modal */}
        {showBulkUpload && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Bulk Upload Verses</h2>
                  <p className="text-sm text-gray-600 mt-1">
                    Upload multiple verses to {selectedScripture?.title}
                  </p>
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
                        <p>Your JSON should contain a "verses" array with verse objects. Each verse object can have:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                          <li><strong>chapter_number</strong> (required) - Chapter number</li>
                          <li><strong>verse_number</strong> (required) - Verse number</li>
                          <li><strong>translation</strong> (required) - English translation</li>
                          <li><strong>sanskrit_text</strong> (optional) - Original Sanskrit text</li>
                          <li><strong>transliteration</strong> (optional) - Romanized Sanskrit</li>
                          <li><strong>word_meanings</strong> (optional) - Array of word definitions</li>
                          <li><strong>commentary</strong> (optional) - Detailed commentary</li>
                          <li><strong>key_concepts</strong> (optional) - Array of spiritual concepts</li>
                          <li><strong>tags</strong> (optional) - Array of tags</li>
                          <li><strong>status</strong> (optional) - 'published', 'draft', or 'archived'</li>
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
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
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
                      <div className="bg-yellow-50 p-3 rounded-lg">
                        <div className="text-lg font-bold text-yellow-600">
                          {bulkUploadResult.skippedVerses?.length || 0}
                        </div>
                        <div className="text-sm text-yellow-800">Skipped (Duplicates)</div>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">
                          {bulkUploadResult.totalItems}
                        </div>
                        <div className="text-sm text-blue-800">Total</div>
                      </div>
                    </div>

                    {/* Success Items */}
                    {bulkUploadResult.createdVerses?.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-medium text-green-800 mb-2">Successfully Created:</h4>
                        <div className="bg-green-50 p-3 rounded-lg max-h-32 overflow-y-auto">
                          {bulkUploadResult.createdVerses.map((verse: string, index: number) => (
                            <div key={index} className="text-sm text-green-700">
                              • Chapter {verse}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Error Items */}
                    {bulkUploadResult.errors?.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-medium text-red-800 mb-2">Errors:</h4>
                        <div className="bg-red-50 p-3 rounded-lg max-h-32 overflow-y-auto space-y-1">
                          {bulkUploadResult.errors.map((error: any, index: number) => (
                            <div key={index} className="text-sm text-red-700">
                              <strong>Verse {error.verse}:</strong> {error.error}
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
                    disabled={!bulkUploadData.trim() || bulkUploadLoading || !selectedScripture}
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
                        Upload Verses
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