// Company Information
export const COMPANY_NAME = 'Star Tech Scales'
export const COMPANY_EMAIL = 'info@startechscales.com'
export const COMPANY_PHONE = '+91 9324902173'
export const COMPANY_ADDRESS = 'Shop No.10, Building No.9, bus stop, PL Lokhande Marg, behind Assisi Nagar, Chembur (W), ACC Nagar, Chedda Nagar, Mumbai, Maharashtra 400089'
export const COMPANY_WEBSITE = 'www.startechscales.com'

// Navigation
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/store/products' },
  { label: 'Categories', href: '/store/categories' },
  { label: 'Services', href: '/store/services' },
  { label: 'About Us', href: '/store/about' },
  { label: 'Blog', href: '/store/blog' },
  { label: 'Contact', href: '/store/contact' },
]

export const FOOTER_LINKS = {
  Company: [
    { label: 'About Us', href: '/store/about' },
    { label: 'Blog', href: '/store/blog' },
    { label: 'FAQ', href: '/store/faq' },
    { label: 'Contact Us', href: '/store/contact' },
  ],
  Products: [
    { label: 'All Products', href: '/store/products' },
    { label: 'Industrial Scales', href: '/store/categories' },
    { label: 'Lab Scales', href: '/store/categories' },
    { label: 'Loadcells', href: '/store/categories' },
  ],
  Services: [
    { label: 'Installation', href: '/store/services' },
    { label: 'Calibration', href: '/store/services' },
    { label: 'Repair', href: '/store/services' },
    { label: 'AMC', href: '/store/services' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/store/privacy' },
    { label: 'Terms & Conditions', href: '/store/terms' },
    { label: 'Shipping Policy', href: '#' },
    { label: 'Return Policy', href: '#' },
  ],
}

// Product Categories
export const CATEGORIES = [
  { id: 1, name: 'All Products', icon: '⚖️', image: '/productimages/product1.jfif', description: 'Complete range of certified weighing equipment' },
  { id: 2, name: 'Industrial Scales', icon: '🏭', image: '/productimages/industrialscales.png', description: 'Platform scales, floor scales and industrial weighing systems' },
  { id: 3, name: 'Weighing Bridges & Items', icon: '🌉', image: '/productimages/WeighBridge.jpeg', description: 'Truck scales and weighbridge systems for heavy vehicles' },
  { id: 4, name: 'Loadcells', icon: '📊', image: '/productimages/loadcells.png', description: 'High-accuracy load cells for industrial applications' },
  { id: 5, name: 'Personal Scales & Items', icon: '⚖️', image: '/productimages/personalscalesanditem.avif', description: 'Digital body, retail and commercial weighing scales' },
  { id: 6, name: 'Lab Scales', icon: '🔬', image: '/productimages/labscale.png', description: 'Precision laboratory instruments' },
  { id: 7, name: 'Weighing Automation', icon: '🤖', image: '/productimages/wieghingautomation.png', description: 'Automatic batching, filling and conveyor weighing systems' },
]

// Services
export const SERVICES = [
  { id: 1, title: 'Installation', icon: '🔧', description: 'Professional installation of weighing scales' },
  { id: 2, title: 'Calibration', icon: '⚙️', description: 'Precision calibration services' },
  { id: 3, title: 'Repair & Maintenance', icon: '🛠️', description: 'Expert repair and maintenance' },
  { id: 4, title: 'AMC (Annual Maintenance)', icon: '📅', description: 'Annual maintenance contracts' },
  { id: 5, title: 'Automation Solutions', icon: '🤖', description: 'Automatic batching, filling and conveyor weighing systems' },
  { id: 6, title: 'Technical Support', icon: '💬', description: '24/7 technical support' },
]

// Industries
export const INDUSTRIES = [
  { id: 1, name: 'Pharmaceutical', description: 'Precision weighing for pharma production' },
  { id: 2, name: 'Food & Beverage', description: 'Food processing and packaging scales' },
  { id: 3, name: 'Manufacturing', description: 'Industrial production weighing' },
  { id: 4, name: 'Chemical', description: 'Chemical industry solutions' },
  { id: 5, name: 'Education', description: 'Laboratory and educational institutions' },
  { id: 6, name: 'Retail', description: 'Retail and commercial scales' },
]

// Sample Products
export const SAMPLE_PRODUCTS = [
  {
    id: 1,
    name: 'Industrial Platform Scale',
    category: 'Industrial Scales',
    price: 45999,
    image: '/productimages/industrialscales.png',
    rating: 4.9,
    reviews: 48,
    description: 'Heavy-duty platform scale for industrial weighing applications',
    sku: 'IPS-001',
    stock: 8,
  },
  {
    id: 2,
    name: 'Lab Precision Scale',
    category: 'Lab Scales',
    price: 89999,
    image: '/productimages/labscale.png',
    rating: 4.8,
    reviews: 31,
    description: 'Precision lab scale for accurate measurement in controlled environments',
    sku: 'LPS-001',
    stock: 4,
  },
  {
    id: 3,
    name: 'Loadcell Assembly',
    category: 'Loadcells',
    price: 27999,
    image: '/productimages/loadcells.png',
    rating: 4.7,
    reviews: 22,
    description: 'Industrial loadcell assembly for reliable force and weight sensing',
    sku: 'LC-001',
    stock: 12,
  },
  {
    id: 4,
    name: 'Weigh Bridge System',
    category: 'Weighing Bridges & Items',
    price: 189999,
    image: '/productimages/WeighBridge.jpeg',
    rating: 4.9,
    reviews: 18,
    description: 'Robust weigh bridge system for large-scale industrial transport weighing',
    sku: 'WBS-001',
    stock: 2,
  },
  {
    id: 5,
    name: 'Personal Digital Scale',
    category: 'Personal Scales & Items',
    price: 4999,
    image: '/productimages/personalscalesanditem.avif',
    rating: 4.6,
    reviews: 39,
    description: 'Compact personal scale for home and commercial use',
    sku: 'PDS-001',
    stock: 20,
  },
  {
    id: 6,
    name: 'Weighing Automation Unit',
    category: 'Weighing Automation',
    price: 129999,
    image: '/productimages/wieghingautomation.png',
    rating: 4.8,
    reviews: 14,
    description: 'Automated weighing solution for modern production lines',
    sku: 'WAU-001',
    stock: 6,
  },
]

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    company: 'Pharma Industries Ltd',
    testimonial: 'Excellent quality scales with outstanding after-sales service. Highly recommended!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Singh',
    company: 'Food Processing Co.',
    testimonial: 'The precision and reliability of their products are unmatched in the industry.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amit Patel',
    company: 'Chemical Manufacturing',
    testimonial: 'Best investment for our production line. Great technical support team.',
    rating: 4,
  },
]

// FAQ
export const FAQ = [
  {
    id: 1,
    question: 'What is the warranty period?',
    answer: 'All our products come with a 2-year manufacturer warranty covering defects in material and workmanship.',
  },
  {
    id: 2,
    question: 'Do you provide installation service?',
    answer: 'Yes, we provide professional installation service for all our scales. Contact our team for details.',
  },
  {
    id: 3,
    question: 'What is your return policy?',
    answer: 'We accept returns within 30 days of purchase if the product is unused and in original packaging.',
  },
  {
    id: 4,
    question: 'Do you offer customization?',
    answer: 'Yes, we can customize scales according to your specific requirements. Please contact our sales team.',
  },
  {
    id: 5,
    question: 'What payment methods do you accept?',
    answer: 'We accept credit cards, bank transfers, and UPI payments. EMI options are also available.',
  },
  {
    id: 6,
    question: 'How often should scales be calibrated?',
    answer: 'We recommend annual calibration for most industrial scales. Laboratory scales should be calibrated more frequently.',
  },
]

// Price Ranges
export const PRICE_RANGES = [
  { min: 0, max: 10000, label: 'Under ₹10,000' },
  { min: 10000, max: 25000, label: '₹10,000 - ₹25,000' },
  { min: 25000, max: 50000, label: '₹25,000 - ₹50,000' },
  { min: 50000, max: 100000, label: '₹50,000 - ₹1,00,000' },
  { min: 100000, max: Infinity, label: 'Above ₹1,00,000' },
]

// Sort Options
export const SORT_OPTIONS = [
  { value: 'relevance', label: 'Relevance' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
]
