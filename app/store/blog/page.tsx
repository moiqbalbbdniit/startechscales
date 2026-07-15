import { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Calendar, User, ArrowRight, Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read latest articles and insights about industrial weighing scales, precision measurement, and industry trends.',
}

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  image: string
  readTime: number
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 'precision-weighing-guide',
    title: 'Complete Guide to Precision Weighing in Pharmaceutical Industry',
    excerpt:
      'Learn about the critical standards and best practices for accurate weight measurement in pharmaceutical manufacturing and quality control.',
    content: 'Full article content here...',
    author: 'Dr. Rajesh Kumar',
    date: '2024-07-10',
    category: 'Industry Insights',
    image: '/images/blog-1.jpg',
    readTime: 8,
  },
  {
    id: 'calibration-best-practices',
    title: 'Best Practices for Scale Calibration and Maintenance',
    excerpt:
      'Discover essential maintenance routines and calibration procedures to ensure optimal performance and longevity of your industrial scales.',
    content: 'Full article content here...',
    author: 'Priya Sharma',
    date: '2024-07-05',
    category: 'Technical Guide',
    image: '/images/blog-2.jpg',
    readTime: 6,
  },
  {
    id: 'food-safety-regulations',
    title: 'Food Safety Standards and Their Impact on Weighing Solutions',
    excerpt:
      'Understand how food safety regulations like FSMA influence the choice of weighing equipment in food processing facilities.',
    content: 'Full article content here...',
    author: 'Amit Patel',
    date: '2024-06-28',
    category: 'Compliance',
    image: '/images/blog-3.jpg',
    readTime: 7,
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation in Industrial Weighing Technology',
    excerpt:
      'Explore how IoT and cloud-based solutions are revolutionizing the way industries manage their weighing infrastructure.',
    content: 'Full article content here...',
    author: 'Sarah Johnson',
    date: '2024-06-20',
    category: 'Technology Trends',
    image: '/images/blog-4.jpg',
    readTime: 9,
  },
  {
    id: 'environmental-monitoring',
    title: 'Environmental Factors Affecting Weighing Accuracy',
    excerpt:
      'Temperature, humidity, and vibration can significantly impact weighing accuracy. Learn how to compensate for these environmental factors.',
    content: 'Full article content here...',
    author: 'Dr. Neha Verma',
    date: '2024-06-15',
    category: 'Technical Guide',
    image: '/images/blog-5.jpg',
    readTime: 5,
  },
  {
    id: 'case-study-pharma',
    title: 'Case Study: Optimizing Production Efficiency with Smart Scales',
    excerpt:
      'How a leading pharmaceutical company increased production efficiency by 35% using integrated weighing solutions.',
    content: 'Full article content here...',
    author: 'Marcus Chen',
    date: '2024-06-10',
    category: 'Case Studies',
    image: '/images/blog-6.jpg',
    readTime: 10,
  },
]

export default function BlogPage() {
  const categories = Array.from(new Set(BLOG_POSTS.map((post) => post.category)))
  const featuredPost = BLOG_POSTS[0]
  const recentPosts = BLOG_POSTS.slice(1)

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-4">Blog & Insights</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Stay updated with industry trends, technical guides, and best practices in precision weighing and industrial measurement.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Featured Article</h2>
          <Link href={`/store/blog/${featuredPost.id}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 hover:opacity-90 transition-opacity cursor-pointer">
              {/* Image */}
              <div className="rounded-lg overflow-hidden h-96 lg:h-auto bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
                <div className="text-slate-400 text-center">
                  <span>Blog Image</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between py-4">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">{featuredPost.readTime} min read</span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 text-balance">
                    {featuredPost.title}
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 text-balance">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
                    Read Article
                    <ArrowRight size={18} />
                  </Button>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Categories Filter */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6 overflow-x-auto pb-2">
            <button className="px-4 py-2 rounded-full bg-primary text-white font-medium flex-shrink-0">All Articles</button>
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-200 font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex-shrink-0"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Link key={post.id} href={`/store/blog/${post.id}`}>
                <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-lg transition-all h-full flex flex-col cursor-pointer">
                  {/* Image */}
                  <div className="h-48 bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                    <span className="text-slate-400">Blog Image</span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-600 dark:text-slate-400">{post.readTime} min</span>
                    </div>

                    <h3 className="font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 text-balance">
                      {post.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow line-clamp-3 text-balance">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5 rounded-lg border border-primary/20 dark:border-primary/10 p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Get the latest articles, industry insights, and updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
