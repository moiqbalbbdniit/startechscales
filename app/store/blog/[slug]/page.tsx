import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Calendar, User, Clock, Share2, ArrowLeft, ArrowRight } from 'lucide-react'

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
    content: `
      <h2>Introduction</h2>
      <p>Precision weighing is fundamental to pharmaceutical manufacturing. The accuracy of weight measurements directly impacts product quality, regulatory compliance, and patient safety.</p>

      <h2>Importance of Precision Weighing</h2>
      <p>In pharmaceutical manufacturing, even minute variations in ingredient quantities can lead to significant consequences. This comprehensive guide explores the critical aspects of precision weighing.</p>

      <h2>Standards and Regulations</h2>
      <p>The pharmaceutical industry must comply with strict international standards including USP (United States Pharmacopeia) and EP (European Pharmacopoeia). These standards define acceptable tolerances and calibration procedures.</p>

      <h2>Best Practices</h2>
      <p>Regular calibration, environmental control, and operator training are essential components of a robust weighing program.</p>

      <h2>Conclusion</h2>
      <p>Implementing comprehensive precision weighing practices ensures product quality, regulatory compliance, and operational efficiency.</p>
    `,
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
    content: `
      <h2>Overview</h2>
      <p>Proper calibration and maintenance are critical for ensuring accurate measurements and extending the lifespan of your weighing equipment.</p>

      <h2>Calibration Fundamentals</h2>
      <p>Calibration is the process of comparing a scale's measurements to known standards to ensure accuracy.</p>

      <h2>Maintenance Schedule</h2>
      <p>Regular maintenance prevents downtime and ensures consistent accuracy. Establish a routine maintenance schedule based on your equipment manufacturer's recommendations.</p>

      <h2>Troubleshooting Common Issues</h2>
      <p>Understanding common problems and their solutions helps maintain optimal scale performance.</p>

      <h2>Conclusion</h2>
      <p>A comprehensive calibration and maintenance program is essential for reliable weighing operations.</p>
    `,
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
    content: `
      <h2>Food Safety Regulations</h2>
      <p>Modern food safety regulations significantly impact how food manufacturers operate, including their choice of weighing equipment.</p>

      <h2>FSMA Requirements</h2>
      <p>The Food Safety Modernization Act (FSMA) established new standards for produce safety and preventive controls.</p>

      <h2>Weighing Equipment Standards</h2>
      <p>Food-grade weighing equipment must meet specific sanitary and accuracy standards to comply with regulations.</p>

      <h2>Implementation Strategies</h2>
      <p>Implementing compliant weighing solutions requires understanding regulatory requirements and selecting appropriate equipment.</p>

      <h2>Conclusion</h2>
      <p>Compliance with food safety regulations ensures consumer protection and operational efficiency.</p>
    `,
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
    content: `
      <h2>Digital Revolution in Manufacturing</h2>
      <p>Digital technologies are transforming how industries approach weighing and measurement operations.</p>

      <h2>IoT Integration</h2>
      <p>Internet of Things (IoT) enabled scales provide real-time data and connectivity for improved operational visibility.</p>

      <h2>Cloud-Based Solutions</h2>
      <p>Cloud platforms enable centralized monitoring and analysis of weighing data across multiple facilities.</p>

      <h2>Benefits and Challenges</h2>
      <p>While digital solutions offer significant benefits, implementation requires careful planning and change management.</p>

      <h2>Future Outlook</h2>
      <p>The future of industrial weighing lies in intelligent, connected systems that optimize production and ensure compliance.</p>
    `,
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
    content: `
      <h2>Environmental Impact on Measurements</h2>
      <p>Environmental conditions significantly influence weighing accuracy and must be carefully managed.</p>

      <h2>Temperature Effects</h2>
      <p>Temperature variations can cause material expansion and contraction, affecting measurement accuracy.</p>

      <h2>Humidity and Vibration</h2>
      <p>Humidity levels and vibrations from surrounding equipment can introduce measurement errors.</p>

      <h2>Mitigation Strategies</h2>
      <p>Implementing environmental controls and selecting appropriate equipment helps minimize these effects.</p>

      <h2>Best Practices</h2>
      <p>Establishing controlled environments and regular monitoring ensures consistent and accurate measurements.</p>
    `,
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
    content: `
      <h2>Client Overview</h2>
      <p>A leading pharmaceutical manufacturer faced challenges with production efficiency and data tracking.</p>

      <h2>Challenges</h2>
      <p>The company struggled with manual data entry, inconsistent measurements, and lack of real-time visibility into production.</p>

      <h2>Solution Implementation</h2>
      <p>We implemented an integrated weighing solution with real-time data connectivity and automated reporting.</p>

      <h2>Results</h2>
      <p>The implementation resulted in 35% improvement in production efficiency and significant reduction in errors.</p>

      <h2>Key Takeaways</h2>
      <p>This case study demonstrates the significant benefits of modernizing weighing operations with smart solutions.</p>
    `,
    author: 'Marcus Chen',
    date: '2024-06-10',
    category: 'Case Studies',
    image: '/images/blog-6.jpg',
    readTime: 10,
  },
]

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.id,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.id === params.slug)

  if (!post) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author }],
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.id === params.slug)

  if (!post) {
    notFound()
  }

  const currentIndex = BLOG_POSTS.findIndex((p) => p.id === params.slug)
  const previousPost = BLOG_POSTS[currentIndex + 1]
  const nextPost = BLOG_POSTS[currentIndex - 1]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/store/blog" className="text-white hover:text-white/80 transition-colors flex items-center gap-2 mb-6">
            <ArrowLeft size={18} />
            Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">{post.category}</span>
            <span className="text-white/80 text-sm flex items-center gap-1">
              <Clock size={16} />
              {post.readTime} min read
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">{post.title}</h1>

          <div className="flex items-center gap-6 text-white/90 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <User size={18} />
              </div>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="prose prose-slate dark:prose-invert max-w-none">
          {/* Featured Image Placeholder */}
          <div className="h-96 bg-slate-200 dark:bg-slate-800 rounded-lg flex items-center justify-center mb-8">
            <span className="text-slate-400">Blog Featured Image</span>
          </div>

          {/* Article Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="lead text-xl text-slate-600 dark:text-slate-400 mb-8">{post.excerpt}</p>

            <div className="text-slate-600 dark:text-slate-400 space-y-6">
              <h2>Introduction</h2>
              <p>
                This comprehensive article explores the key aspects of {post.title.toLowerCase()}, providing valuable insights
                and practical guidance for professionals in the industry.
              </p>

              <h2>Key Sections</h2>
              <p>
                The article covers essential topics including best practices, regulatory requirements, and implementation
                strategies tailored to your specific needs.
              </p>

              <h2>Practical Applications</h2>
              <p>
                Learn how to apply these concepts in real-world scenarios to optimize your operations and achieve better
                results.
              </p>

              <h2>Conclusion</h2>
              <p>
                Understanding and implementing these practices will help you achieve greater efficiency, compliance, and
                success in your operations.
              </p>
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-4">
              <span className="text-slate-600 dark:text-slate-400 font-medium">Share this article:</span>
              <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Share2 size={18} />
              </button>
            </div>
          </div>
        </article>

        {/* Author Box */}
        <div className="mt-16 bg-slate-50 dark:bg-slate-800 rounded-lg p-8 border border-slate-200 dark:border-slate-700">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <User size={32} className="text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">{post.author}</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Experienced professional with expertise in industrial weighing solutions and precision measurement. Passionate
                about sharing knowledge and best practices with the industry.
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts Navigation */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Read Next</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {previousPost && (
              <Link href={`/store/blog/${previousPost.id}`}>
                <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6 hover:border-primary/50 transition-colors h-full cursor-pointer">
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm mb-3">
                    <ArrowLeft size={16} />
                    Previous Article
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 text-balance">
                    {previousPost.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{previousPost.readTime} min read</p>
                </div>
              </Link>
            )}
            {nextPost && (
              <Link href={`/store/blog/${nextPost.id}`}>
                <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6 hover:border-primary/50 transition-colors h-full cursor-pointer">
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm mb-3 justify-end">
                    Next Article
                    <ArrowRight size={16} />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2 line-clamp-2 text-balance text-right">
                    {nextPost.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 text-right">{nextPost.readTime} min read</p>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
