
import { useState } from "react";
import Hero from "@/components/Hero";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FileText, Download, FileQuestion, Book } from "lucide-react";

const Resources = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  // Filter resources based on active tab
  const filteredResources = activeTab === "all" 
    ? [...whitepapers, ...guides] 
    : activeTab === "whitepapers" 
      ? whitepapers 
      : guides;

  return (
    <>
      <Hero
        title="Resources"
        subtitle="Knowledge Hub for Business Transformation"
        imageSrc="https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06"
        imagePosition="center"
      />

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Knowledge Resources</h2>
            <p className="text-lg text-essnad-gray">
              Access our collection of whitepapers, guides, and FAQs to help you 
              navigate complex business challenges and stay informed on industry best practices.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full mb-12" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all" className="px-6">All Resources</TabsTrigger>
                <TabsTrigger value="whitepapers" className="px-6">Whitepapers</TabsTrigger>
                <TabsTrigger value="guides" className="px-6">Guides</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource, index) => (
                  <ResourceCard key={index} resource={resource} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="whitepapers" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {whitepapers.map((whitepaper, index) => (
                  <ResourceCard key={index} resource={whitepaper} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="guides" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {guides.map((guide, index) => (
                  <ResourceCard key={index} resource={guide} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* FAQs Section */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h2 className="section-subtitle text-center mb-8">Frequently Asked Questions</h2>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-essnad-gray font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-essnad-gray">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Request Resources */}
          <div className="mt-16 bg-essnad-lightGray rounded-lg p-8 text-center max-w-3xl mx-auto">
            <Book className="h-12 w-12 mx-auto text-essnad-orange mb-4" />
            <h3 className="text-xl font-bold mb-3 text-essnad-gray">Need More Resources?</h3>
            <p className="text-essnad-gray mb-6">
              Can't find what you're looking for? Our team can provide additional resources 
              tailored to your specific business needs.
            </p>
            <Button asChild className="bg-essnad-orange hover:bg-orange-600">
              <Link to="/contact-us">Request Custom Resources</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

// Resource Card Component
const ResourceCard = ({ resource }: { resource: any }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="h-48 bg-essnad-gray/10 relative overflow-hidden">
        <img 
          src={resource.image} 
          alt={resource.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-medium text-essnad-gray">
          {resource.type}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-3">
          {resource.type === "Whitepaper" ? (
            <FileText className="h-5 w-5 text-essnad-orange mr-2" />
          ) : (
            <Book className="h-5 w-5 text-essnad-orange mr-2" />
          )}
          <span className="text-sm font-medium text-essnad-gray">
            {resource.category}
          </span>
        </div>
        <h3 className="text-lg font-bold mb-3 text-essnad-gray">{resource.title}</h3>
        <p className="text-sm text-essnad-gray mb-4 line-clamp-3">{resource.description}</p>
        <Button 
          variant="outline" 
          className="w-full flex items-center justify-center border-essnad-orange text-essnad-orange hover:bg-essnad-orange hover:text-white"
        >
          <Download className="mr-2 h-4 w-4" /> Download Resource
        </Button>
      </div>
    </div>
  );
};

// Data
const whitepapers = [
  {
    title: "Digital Transformation in the Middle East: Trends and Insights",
    description: "This whitepaper explores the current state of digital transformation in the Middle East, highlighting key trends, challenges, and opportunities for businesses.",
    category: "Digital Transformation",
    type: "Whitepaper",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    title: "Cybersecurity Best Practices for Enterprise Organizations",
    description: "A comprehensive guide to implementing robust cybersecurity measures in enterprise environments, including threat detection, response strategies, and employee training.",
    category: "IT Security",
    type: "Whitepaper",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3"
  },
  {
    title: "Building Organizational Resilience in Uncertain Times",
    description: "This whitepaper outlines strategies for enhancing business resilience, including crisis management planning, operational flexibility, and stakeholder communication.",
    category: "Business Resilience",
    type: "Whitepaper",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
  },
  {
    title: "ISO Certification: Benefits and Implementation Strategies",
    description: "An in-depth analysis of the business benefits of ISO certification and practical strategies for successful implementation across various industry sectors.",
    category: "ISO Consultancy",
    type: "Whitepaper",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
  }
];

const guides = [
  {
    title: "A Step-by-Step Guide to Risk Assessment",
    description: "This practical guide provides a structured approach to risk assessment, helping organizations identify, analyze, and mitigate potential risks effectively.",
    category: "Risk Management",
    type: "Guide",
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f"
  },
  {
    title: "Implementing Six Sigma Methodology: A Beginner's Guide",
    description: "A comprehensive introduction to Six Sigma methodology, including key principles, implementation steps, and tools for quality improvement and process optimization.",
    category: "Performance Consulting",
    type: "Guide",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66"
  },
  {
    title: "Crisis Management Planning: Essential Components",
    description: "This guide outlines the essential components of an effective crisis management plan, including risk assessment, response strategies, and recovery procedures.",
    category: "Crisis Management",
    type: "Guide",
    image: "https://images.unsplash.com/photo-1521790361543-f645cf042ec4"
  }
];

const faqs = [
  {
    question: "What industries does Essnad specialize in?",
    answer: "Essnad provides consulting services across a wide range of industries, including finance, government, energy, telecommunications, healthcare, and manufacturing. Our expertise is adaptable to various sectors, allowing us to deliver tailored solutions regardless of industry-specific challenges."
  },
  {
    question: "How does the consulting process work at Essnad?",
    answer: "Our consulting process typically begins with an initial consultation to understand your specific challenges and needs. We then conduct a thorough assessment, develop a customized solution, implement the recommended strategies, and provide ongoing support to ensure sustainable results. Throughout the process, we maintain clear communication and collaborate closely with your team."
  },
  {
    question: "What is digital transformation and why is it important?",
    answer: "Digital transformation is the integration of digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers. It's important because it enables organizations to remain competitive in an increasingly digital marketplace, improve operational efficiency, enhance customer experiences, and unlock new growth opportunities."
  },
  {
    question: "How long does an ISO certification process take?",
    answer: "The ISO certification timeline varies depending on the size of your organization, the complexity of your operations, and your current level of readiness. Typically, the process takes between 6 to 12 months from initial assessment to certification. Our consultants work with you to establish a realistic timeline based on your specific circumstances."
  },
  {
    question: "What benefits can my organization gain from implementing risk management strategies?",
    answer: "Implementing effective risk management strategies offers numerous benefits, including: improved decision-making through risk awareness, enhanced operational efficiency by minimizing disruptions, better resource allocation, strengthened governance and compliance, increased stakeholder confidence, and competitive advantage through proactive risk mitigation."
  },
  {
    question: "How do I know which consulting services my business needs?",
    answer: "Determining your consulting needs starts with identifying your core challenges and objectives. Our team can help through an initial consultation where we discuss your current situation, goals, and pain points. Based on this assessment, we can recommend the most appropriate services to address your specific needs and create a tailored approach for your organization."
  }
];

export default Resources;
