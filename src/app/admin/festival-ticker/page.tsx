'use client'

import React, { useState, useEffect } from 'react'
import { FestivalAnnouncement, FestivalTickerFormData, FESTIVAL_ICONS } from '@/types/festival'
import FestivalTicker from '@/components/FestivalTicker'

export default function FestivalTickerAdmin() {
  const [announcements, setAnnouncements] = useState<FestivalAnnouncement[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingAnnouncement, setEditingAnnouncement] = useState<FestivalAnnouncement | null>(null)
  const [formData, setFormData] = useState<FestivalTickerFormData>({
    festival_name: '',
    hindi_text: '',
    english_text: '',
    icon: FESTIVAL_ICONS.DIYA,
    link_url: '',
    start_date: '',
    end_date: '',
    is_active: true
  })
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  // Fetch announcements
  const fetchAnnouncements = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/admin/festival-announcements')
      
      if (!response.ok) {
        throw new Error('Failed to fetch announcements')
      }
      
      const data = await response.json()
      setAnnouncements(data)
    } catch (err) {
      console.error('Error fetching announcements:', err)
      setError('Failed to load announcements')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAnnouncements()
  }, [])

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    try {
      const url = editingAnnouncement 
        ? '/api/festival-announcements' 
        : '/api/festival-announcements'
      
      const method = editingAnnouncement ? 'PUT' : 'POST'
      
      const payload = editingAnnouncement 
        ? { id: editingAnnouncement.id, ...formData }
        : formData

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to save announcement')
      }

      setSuccess(editingAnnouncement ? 'Announcement updated successfully!' : 'Announcement created successfully!')
      setShowForm(false)
      setEditingAnnouncement(null)
      resetForm()
      fetchAnnouncements()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    }
  }

  // Handle delete
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this announcement?')) {
      return
    }

    try {
      const response = await fetch(`/api/festival-announcements?id=${id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Failed to delete announcement')
      }

      setSuccess('Announcement deleted successfully!')
      fetchAnnouncements()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete announcement')
    }
  }

  // Handle edit
  const handleEdit = (announcement: FestivalAnnouncement) => {
    setEditingAnnouncement(announcement)
    setFormData({
      festival_name: announcement.festival_name,
      hindi_text: announcement.hindi_text,
      english_text: announcement.english_text,
      icon: announcement.icon,
      link_url: announcement.link_url,
      start_date: announcement.start_date,
      end_date: announcement.end_date,
      is_active: announcement.is_active
    })
    setShowForm(true)
  }

  // Reset form
  const resetForm = () => {
    setFormData({
      festival_name: '',
      hindi_text: '',
      english_text: '',
      icon: FESTIVAL_ICONS.DIYA,
      link_url: '',
      start_date: '',
      end_date: '',
      is_active: true
    })
  }

  // Cancel form
  const handleCancel = () => {
    setShowForm(false)
    setEditingAnnouncement(null)
    resetForm()
    setError(null)
  }

  const commonIcons = Object.values(FESTIVAL_ICONS)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-blue-900 mb-4">Festival Ticker Management</h1>
            <p className="text-gray-600 mb-6">
              Manage festival announcements that appear in the scrolling ticker on the homepage.
            </p>
            
            {/* Preview Section */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-blue-900 mb-4">Live Preview</h2>
              <div className="border-2 border-dashed border-orange-300 rounded-lg overflow-hidden">
                <FestivalTicker announcements={announcements.filter(a => a.is_active)} />
              </div>
            </div>
          </div>

          {/* Success/Error Messages */}
          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
              {success}
            </div>
          )}
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setShowForm(true)}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Add New Announcement
            </button>
            
            <button
              onClick={fetchAnnouncements}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              disabled={loading}
            >
              {loading ? 'Refreshing...' : 'Refresh'}
            </button>
          </div>

          {/* Form Modal */}
          {showForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-blue-900 mb-6">
                    {editingAnnouncement ? 'Edit' : 'Add'} Festival Announcement
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Festival Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Festival Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.festival_name}
                        onChange={(e) => setFormData({...formData, festival_name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="e.g., Jivit Putrika Vrat"
                      />
                    </div>

                    {/* Icon */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Icon *
                      </label>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {commonIcons.map(icon => (
                          <button
                            key={icon}
                            type="button"
                            onClick={() => setFormData({...formData, icon})}
                            className={`p-2 text-2xl rounded border-2 hover:bg-gray-50 ${
                              formData.icon === icon 
                                ? 'border-orange-500 bg-orange-50' 
                                : 'border-gray-200'
                            }`}
                          >
                            {icon}
                          </button>
                        ))}
                      </div>
                      <input
                        type="text"
                        value={formData.icon}
                        onChange={(e) => setFormData({...formData, icon: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Or type custom emoji"
                      />
                    </div>

                    {/* Hindi Text */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Hindi Text *
                      </label>
                      <textarea
                        required
                        value={formData.hindi_text}
                        onChange={(e) => setFormData({...formData, hindi_text: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        rows={3}
                        placeholder="Hindi announcement text with emoji"
                      />
                    </div>

                    {/* English Text */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        English Text *
                      </label>
                      <textarea
                        required
                        value={formData.english_text}
                        onChange={(e) => setFormData({...formData, english_text: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        rows={3}
                        placeholder="English announcement text with emoji"
                      />
                    </div>

                    {/* Link URL */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Link URL *
                      </label>
                      <input
                        type="url"
                        required
                        value={formData.link_url}
                        onChange={(e) => setFormData({...formData, link_url: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="/festivals/festival-name"
                      />
                    </div>

                    {/* Date Range */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Start Date *
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.start_date}
                          onChange={(e) => setFormData({...formData, start_date: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          End Date *
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.end_date}
                          onChange={(e) => setFormData({...formData, end_date: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                    </div>

                    {/* Active Toggle */}
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="is_active"
                        checked={formData.is_active}
                        onChange={(e) => setFormData({...formData, is_active: e.target.checked})}
                        className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                      />
                      <label htmlFor="is_active" className="ml-2 block text-sm text-gray-900">
                        Active (will appear in ticker)
                      </label>
                    </div>

                    {/* Form Actions */}
                    <div className="flex justify-end gap-4 pt-4">
                      <button
                        type="button"
                        onClick={handleCancel}
                        className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
                      >
                        {editingAnnouncement ? 'Update' : 'Create'} Announcement
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* Announcements List */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-blue-900">Festival Announcements</h2>
            </div>
            
            {loading ? (
              <div className="p-8 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600 mx-auto"></div>
                <p className="mt-2 text-gray-600">Loading announcements...</p>
              </div>
            ) : announcements.length === 0 ? (
              <div className="p-8 text-center text-gray-600">
                No announcements found. Create your first announcement above.
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {announcements.map((announcement) => (
                  <div key={announcement.id} className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">{announcement.icon}</span>
                          <h3 className="text-lg font-medium text-blue-900">
                            {announcement.festival_name}
                          </h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            announcement.is_active 
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {announcement.is_active ? 'Active' : 'Inactive'}
                          </span>
                        </div>
                        
                        <div className="space-y-2 mb-3">
                          <p className="text-sm"><strong>Hindi:</strong> {announcement.hindi_text}</p>
                          <p className="text-sm"><strong>English:</strong> {announcement.english_text}</p>
                          <p className="text-sm"><strong>Link:</strong> {announcement.link_url}</p>
                          <p className="text-sm"><strong>Dates:</strong> {announcement.start_date} to {announcement.end_date}</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => handleEdit(announcement)}
                          className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-3 py-1 rounded text-sm transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(announcement.id)}
                          className="bg-red-100 hover:bg-red-200 text-red-800 px-3 py-1 rounded text-sm transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}