'use client'

import { Button } from '@/components/ui/button'
import { Plus, Edit, Trash2, Eye, Search } from 'lucide-react'

export default function AdminBlogs() {
  const blogs = [
    { id: 1, title: 'How to Choose the Right Weighing Scale', author: 'John Doe', date: '2024-07-15', status: 'Published', views: 2450 },
    { id: 2, title: 'Calibration Best Practices for Precision', author: 'Jane Smith', date: '2024-07-10', status: 'Published', views: 1890 },
    { id: 3, title: 'Industrial Scales in Modern Manufacturing', author: 'Mike Johnson', date: '2024-07-05', status: 'Draft', views: 0 },
    { id: 4, title: 'Laboratory Equipment Maintenance Guide', author: 'Sarah Williams', date: '2024-06-28', status: 'Published', views: 3210 },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Blog Articles</h1>
            <p className="text-muted-foreground mt-1">Create and manage blog content</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus size={18} className="mr-2" />
            New Article
          </Button>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-3 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Articles Table */}
        <div className="bg-card rounded-lg border border-border shadow-premium overflow-hidden">
          <table className="w-full">
            <thead className="bg-muted/50 border-b border-border">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Title</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Author</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Views</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-foreground max-w-xs truncate">{blog.title}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{blog.author}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{blog.date}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      blog.status === 'Published' ? 'bg-green-500/10 text-green-700 dark:text-green-400' : 'bg-amber-500/10 text-amber-700 dark:text-amber-400'
                    }`}>
                      {blog.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-foreground">{blog.views}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye size={16} />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit size={16} />
                      </Button>
                      <Button variant="ghost" size="sm" className="hover:text-red-600">
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
