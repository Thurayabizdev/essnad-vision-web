
import { useState } from "react";
import Hero from "@/components/Hero";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, User, Tag, Search } from "lucide-react";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter blogs based on search query and category
  const filteredBlogs = blogPosts.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || blog.categories.includes(activeCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Hero
        title="Blog & Insights"
        subtitle="Stay Updated with Industry Trends and Expert Perspectives"
        imageSrc="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
        imagePosition="center"
      />

      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <h2 className="text-2xl font-bold text-essnad-gray">Latest Articles</h2>
                <div className="relative w-full sm:w-auto">
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 border-gray-300 focus:border-essnad-orange focus:ring-essnad-orange"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>

              {filteredBlogs.length > 0 ? (
                <div className="space-y-8">
                  {filteredBlogs.map((post, index) => (
                    <div key={index} className="border-b border-gray-200 pb-8 last:border-b-0">
                      {post.image && (
                        <div className="mb-4 rounded-lg overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <h3 className="text-xl font-bold mb-2 text-essnad-gray hover:text-essnad-orange transition-colors">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      
                      <div className="flex flex-wrap gap-3 text-sm text-essnad-gray/70 mb-3">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </span>
                        <span className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </span>
                        <span className="flex items-center">
                          <Tag className="h-4 w-4 mr-1" />
                          {post.categories.join(", ")}
                        </span>
                      </div>
                      
                      <p className="text-essnad-gray mb-4">{post.excerpt}</p>
                      
                      <Link to={`/blog/${post.slug}`} className="text-essnad-orange font-medium hover:text-orange-600 transition-colors flex items-center">
                        Read More
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="ml-2"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  ))}
                  
                  {/* Pagination */}
                  <div className="flex justify-center mt-12">
                    <nav className="inline-flex" aria-label="Pagination">
                      <Button variant="outline" className="mr-2">Previous</Button>
                      <Button variant="outline" className="bg-essnad-orange text-white hover:bg-orange-600 mr-2">1</Button>
                      <Button variant="outline" className="mr-2">2</Button>
                      <Button variant="outline" className="mr-2">3</Button>
                      <Button variant="outline">Next</Button>
                    </nav>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 bg-essnad-lightGray rounded-lg">
                  <p className="text-xl text-essnad-gray">No articles found</p>
                  <p className="text-essnad-gray mt-2">Try adjusting your search or filter criteria</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-essnad-gray">Categories</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setActiveCategory("all")}
                    className={`block w-full text-left px-4 py-2 rounded-md ${
                      activeCategory === "all" 
                        ? "bg-essnad-orange text-white" 
                        : "bg-gray-100 text-essnad-gray hover:bg-gray-200"
                    }`}
                  >
                    All Categories
                  </button>
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveCategory(category.id)}
                      className={`block w-full text-left px-4 py-2 rounded-md ${
                        activeCategory === category.id 
                          ? "bg-essnad-orange text-white" 
                          : "bg-gray-100 text-essnad-gray hover:bg-gray-200"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Posts */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-essnad-gray">Popular Posts</h3>
                <div className="divide-y divide-gray-200">
                  {popularPosts.map((post, index) => (
                    <div key={index} className="py-3 first:pt-0 last:pb-0">
                      <Link 
                        to={`/blog/${post.slug}`} 
                        className="flex items-center hover:bg-essnad-lightGray rounded-lg p-2 transition-colors"
                      >
                        <div className="w-16 h-16 bg-essnad-gray/10 rounded mr-3 shrink-0 overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-essnad-gray line-clamp-2 hover:text-essnad-orange transition-colors">
                            {post.title}
                          </h4>
                          <div className="text-xs text-essnad-gray/70 mt-1 flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {post.date}
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-essnad-gray">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      className="text-essnad-gray hover:text-essnad-orange hover:border-essnad-orange"
                    >
                      {tag}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-essnad-lightGray p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-essnad-gray">Stay Updated</h3>
                <p className="text-essnad-gray mb-4">Subscribe to our newsletter for the latest insights and updates.</p>
                <div className="space-y-3">
                  <Input 
                    type="email" 
                    placeholder="Your Email Address" 
                    className="w-full border-gray-300"
                  />
                  <Button className="w-full bg-essnad-orange hover:bg-orange-600">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Data
const categories = [
  { id: "digital-transformation", name: "Digital Transformation" },
  { id: "cybersecurity", name: "Cybersecurity" },
  { id: "risk-management", name: "Risk Management" },
  { id: "business-resilience", name: "Business Resilience" },
  { id: "governance", name: "Governance" }
];

const tags = [
  "Innovation", "Technology", "Security", "Cloud", "Risk", 
  "Compliance", "Digital", "Strategy", "Business", "Transformation"
];

const blogPosts = [
  {
    title: "The Future of Digital Transformation in Middle Eastern Businesses",
    slug: "future-digital-transformation-middle-east",
    author: "Ahmed Al-Balushi",
    date: "May 5, 2025",
    categories: ["digital-transformation", "business-resilience"],
    excerpt: "Explore how businesses in the Middle East are embracing digital transformation to stay competitive in the global market.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  },
  {
    title: "Effective Risk Management Strategies for 2025",
    slug: "risk-management-strategies-2025",
    author: "Sarah Johnson",
    date: "April 28, 2025",
    categories: ["risk-management", "governance"],
    excerpt: "Discover the latest risk management strategies that organizations should implement to protect their assets and reputation.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf"
  },
  {
    title: "Cybersecurity Best Practices for Remote Working Environments",
    slug: "cybersecurity-remote-working",
    author: "Mohammed Al-Farsi",
    date: "April 15, 2025",
    categories: ["cybersecurity", "risk-management"],
    excerpt: "Learn how to secure your organization's data and systems in an increasingly remote working world.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3"
  },
  {
    title: "Building Resilience Through Crisis Management Planning",
    slug: "resilience-crisis-management-planning",
    author: "Laila Al-Zadjali",
    date: "April 3, 2025",
    categories: ["business-resilience", "governance"],
    excerpt: "Understand the key components of effective crisis management planning and how it contributes to organizational resilience.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
  },
  {
    title: "The Role of Corporate Governance in Sustainable Business Growth",
    slug: "corporate-governance-sustainable-growth",
    author: "David Chen",
    date: "March 20, 2025",
    categories: ["governance", "business-resilience"],
    excerpt: "Explore how strong corporate governance practices can drive sustainable business growth and stakeholder value.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
  }
];

const popularPosts = [
  {
    title: "Top 5 Technology Trends for Businesses in 2025",
    slug: "top-technology-trends-2025",
    date: "May 1, 2025",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e"
  },
  {
    title: "The Growing Importance of Information Security in Digital Environments",
    slug: "importance-information-security-digital",
    date: "April 22, 2025",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3"
  },
  {
    title: "How to Implement Six Sigma Methodology in Your Organization",
    slug: "implement-six-sigma-methodology",
    date: "April 10, 2025",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
  }
];

export default Blog;
