'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { FileText, Book, Users, Calendar, BarChart3, TrendingUp } from 'lucide-react'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    pages: 0,
    scriptures: 0,
    deities: 0,
    practices: 0,
    publishedPages: 0,
    draftPages: 0
  })

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch deities count
        const { count: deitiesCount } = await supabase
          .from('hindu.deities')
          .select('*', { count: 'exact', head: true })

        const { count: publishedDeitiesCount } = await supabase
          .from('hindu.deities')
          .select('*', { count: 'exact', head: true })
          .eq('status', 'published')

        const { count: draftDeitiesCount } = await supabase
          .from('hindu.deities')
          .select('*', { count: 'exact', head: true })
          .eq('status', 'draft')

        // For now, use existing blog data for other stats
        const { count: pagesCount } = await supabase
          .from('modern_posts')
          .select('*', { count: 'exact', head: true })

        const { count: publishedCount } = await supabase
          .from('modern_posts')
          .select('*', { count: 'exact', head: true })
          .eq('status', 'published')

        setStats({
          pages: pagesCount || 0,
          scriptures: 0, // Will be implemented later
          deities: deitiesCount || 0,
          practices: 0, // Will be implemented later
          publishedPages: publishedCount || 0,
          draftPages: draftDeitiesCount || 0
        })
      } catch (error) {
        console.error('Error fetching stats:', error)
        // Set default values on error
        setStats({
          pages: 0,
          scriptures: 0,
          deities: 0,
          practices: 0,
          publishedPages: 0,
          draftPages: 0
        })
      }
    }

    fetchStats()
  }, [])

  const statCards = [
    {
      title: 'Total Pages',
      value: stats.pages,
      icon: FileText,
      color: 'bg-blue-500',
      change: '+12%'
    },
    {
      title: 'Scriptures',
      value: stats.scriptures,
      icon: Book,
      color: 'bg-orange-500',
      change: '+8%'
    },
    {
      title: 'Deities',
      value: stats.deities,
      icon: Users,
      color: 'bg-red-500',
      change: '+5%'
    },
    {
      title: 'Practices',
      value: stats.practices,
      icon: Calendar,
      color: 'bg-green-500',
      change: '+15%'
    }
  ]

  const quickActions = [
    { title: 'Manage Deities', href: '/admin/deities', color: 'bg-red-600' },
    { title: 'Add New Deity', href: '/admin/deities/new', color: 'bg-orange-600' },
    { title: 'Bulk Upload JSON', href: '/admin/bulk-upload', color: 'bg-purple-600' },
    { title: 'Create New Page', href: '/admin/pages/new', color: 'bg-blue-600' },
    { title: 'Add Practice', href: '/admin/practices/new', color: 'bg-green-600' }
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-900 to-orange-600 rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome to PeacefulAnswers CMS</h1>
        <p className="text-lg opacity-90">
          Manage your spiritual content, scriptures, and wisdom teachings
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat) => {
          const IconComponent = stat.icon
          return (
            <div key={stat.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`${stat.color} rounded-lg p-3`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                <span className="text-green-500 text-sm font-medium">{stat.change}</span>
                <span className="text-gray-600 text-sm ml-1">vs last month</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Status Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Status</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Published Pages</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                {stats.publishedPages}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Draft Pages</span>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm font-medium">
                {stats.draftPages}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Content</span>
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
                {stats.pages + stats.scriptures + stats.deities + stats.practices}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action) => (
              <a
                key={action.title}
                href={action.href}
                className={`${action.color} text-white rounded-lg p-4 text-center hover:opacity-90 transition-opacity`}
              >
                <span className="text-sm font-medium">{action.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-600">New scripture added to Bhagavad Gita collection</span>
            <span className="text-gray-400 text-sm">2 hours ago</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-gray-600">Homepage content updated</span>
            <span className="text-gray-400 text-sm">5 hours ago</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-gray-600">New deity profile published</span>
            <span className="text-gray-400 text-sm">1 day ago</span>
          </div>
        </div>
      </div>
    </div>
  )
}