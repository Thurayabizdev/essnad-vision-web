
import { useState } from "react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import BlogCard from "@/components/BlogCard";

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "Digital Transformation: Navigating the Future of Business",
    excerpt: "Discover how digital transformation is reshaping industries and what organizations need to know to stay competitive in an increasingly digital landscape.",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    date: "May 5, 2025",
    author: "Ahmed Al-Balushi",
    category: "Digital Transformation",
    slug: "digital-transformation-navigating-future",
    featured: true
  },
  {
    id: 2,
    title: "The Importance of Robust Governance Frameworks",
    excerpt: "Learn how implementing strong governance frameworks can enhance accountability, transparency, and resilience in your organization.",
    imageUrl: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
    date: "April 28, 2025",
    author: "Sarah Johnson",
    category: "Governance",
    slug: "importance-robust-governance-frameworks"
  },
  {
    id: 3,
    title: "Risk Management Strategies for Uncertain Times",
    excerpt: "Explore effective risk management approaches that can help your organization navigate through unpredictable business environments.",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    date: "April 15, 2025",
    author: "Mohammed Al-Farsi",
    category: "Risk Management",
    slug: "risk-management-strategies-uncertain-times"
  },
  {
    id: 4,
    title: "Building Business Resilience in a Changing World",
    excerpt: "Discover practical strategies for enhancing organizational resilience and adaptability in the face of global challenges.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    date: "April 10, 2025",
    author: "Lisa Chen",
    category: "Business Resilience",
    slug: "building-business-resilience-changing-world"
  },
  {
    id: 5,
    title: "The Future of Cybersecurity: Trends and Innovations",
    excerpt: "Stay ahead of emerging cybersecurity threats with insights into the latest trends, technologies, and best practices.",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    date: "April 3, 2025",
    author: "Khalid Al-Zadjali",
    category: "Cybersecurity",
    slug: "future-cybersecurity-trends-innovations"
  },
  {
    id: 6,
    title: "Sustainable Business Practices for Long-Term Success",
    excerpt: "Learn how implementing eco-friendly initiatives can drive business growth while contributing to environmental sustainability.",
    imageUrl: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8",
    date: "March 27, 2025",
    author: "Fatima Al-Balushi",
    category: "Sustainability",
    slug: "sustainable-business-practices-long-term-success"
  },
  {
    id: 7,
    title: "Innovation and Technology Integration in Modern Business",
    excerpt: "Explore how organizations are leveraging cutting-edge technologies to drive digital transformation and operational efficiency.",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    date: "March 20, 2025",
    author: "Thomas Williams",
    category: "Innovation",
    slug: "innovation-technology-integration-modern-business"
  },
];

// Categories for filtering
const categories = [
  "All",
  "Digital Transformation",
  "Governance",
  "Risk Management",
  "Business Resilience",
  "Cybersecurity",
  "Innovation",
  "Sustainability"
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  
  // Get featured post
  const featuredPost = blogPosts.find(post => post.featured);
  
  // Filter remaining posts
  const filteredPosts = blogPosts
    .filter(post => !post.featured)
    .filter(post => 
      (activeCategory === "All" || post.category === activeCategory) &&
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
       post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  return (
    <>
      <Hero
        title="Blog & Insights"
        subtitle="Stay informed with our latest articles, insights, and industry trends"
        imageSrc="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
        overlayOpacity="opacity-70"
        layout="minimal"
        theme="light"
      />
      
      <section className="py-16 bg-gray-50">
        <div className="container">
          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-16">
              <div className="relative">
                <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-3 h-28 bg-essnad-orange"></div>
                <h2 className="text-3xl font-bold mb-8 text-essnad-gray pl-6">Featured Article</h2>
              </div>
              <BlogCard
                title={featuredPost.title}
                excerpt={featuredPost.excerpt}
                imageUrl={featuredPost.imageUrl}
                date={featuredPost.date}
                author={featuredPost.author}
                category={featuredPost.category}
                slug={featuredPost.slug}
                featured={true}
              />
            </div>
          )}
          
          {/* Search and Filter */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full md:w-auto">
                <TabsList className="bg-white border overflow-x-auto">
                  {categories.map((category) => (
                    <TabsTrigger key={category} value={category} className="data-[state=active]:bg-essnad-orange data-[state=active]:text-white">
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                imageUrl={post.imageUrl}
                date={post.date}
                author={post.author}
                category={post.category}
                slug={post.slug}
              />
            ))}
          </div>
          
          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-gray-600">No articles found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
              <Button 
                onClick={() => {setSearchTerm(""); setActiveCategory("All");}}
                className="mt-4 bg-essnad-orange hover:bg-orange-600"
              >
                Reset Filters
              </Button>
            </div>
          )}
          
          {/* Newsletter Signup */}
          <div className="mt-20 bg-gradient-to-r from-essnad-orange to-orange-500 rounded-lg p-8 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="mb-6">Stay updated with our latest insights, industry trends, and exclusive content delivered directly to your inbox.</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white text-essnad-gray border-none"
                />
                <Button className="bg-essnad-gray hover:bg-gray-700 text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
