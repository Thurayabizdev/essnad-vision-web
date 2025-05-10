
import { useState } from "react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const toggleService = (id: string) => {
    if (expandedService === id) {
      setExpandedService(null);
    } else {
      setExpandedService(id);
    }
  };

  const filterServices = (category: string) => {
    setActiveCategory(category);
    setExpandedService(null);
  };

  const filteredServices = activeCategory === "all" 
    ? serviceCategories.flatMap(category => category.services) 
    : serviceCategories.find(category => category.id === activeCategory)?.services || [];

  return (
    <>
      <Hero
        title="Our Services"
        subtitle="Comprehensive Consulting Solutions for Your Business"
        imageSrc="https://images.unsplash.com/photo-1518770660439-4636190af475"
        imagePosition="center"
      />

      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title text-center mb-8">Explore Our Services</h2>
          <p className="text-lg text-center text-essnad-gray max-w-3xl mx-auto mb-12">
            At Essnad, we offer a wide range of consulting services designed to help your 
            organization navigate complex challenges and achieve sustainable growth.
          </p>

          {/* Service Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button 
              variant={activeCategory === "all" ? "default" : "outline"}
              onClick={() => filterServices("all")}
              className={activeCategory === "all" ? "bg-essnad-orange hover:bg-orange-600" : ""}
            >
              All Services
            </Button>
            {serviceCategories.map((category) => (
              <Button 
                key={category.id} 
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => filterServices(category.id)}
                className={activeCategory === category.id ? "bg-essnad-orange hover:bg-orange-600" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div 
                key={service.id} 
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-essnad-orange/10 p-3 rounded-full mr-3">
                      <service.icon className="h-6 w-6 text-essnad-orange" />
                    </div>
                    <h3 className="text-xl font-bold text-essnad-gray">{service.name}</h3>
                  </div>
                  
                  <div className={`transition-all duration-300 ${
                    expandedService === service.id ? "max-h-[1000px] opacity-100" : "max-h-24 overflow-hidden"
                  }`}>
                    <p className="text-essnad-gray mb-4">{service.description}</p>
                    
                    {service.details && expandedService === service.id && (
                      <ul className="mt-4 space-y-2">
                        {service.details.map((detail, index) => (
                          <li key={index} className="flex items-start">
                            <span className="inline-block bg-essnad-orange/10 p-1 rounded-full mr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F28C38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m9 18 6-6-6-6"></path>
                              </svg>
                            </span>
                            <span className="text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  
                  <button
                    onClick={() => toggleService(service.id)}
                    className="mt-4 text-essnad-orange hover:text-orange-600 text-sm font-medium flex items-center"
                  >
                    {expandedService === service.id ? "Read Less" : "Read More"}
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
                      className={`ml-1 transition-transform ${
                        expandedService === service.id ? "rotate-180" : ""
                      }`}
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-essnad-lightGray">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-subtitle mb-4">Need a Tailored Solution?</h2>
            <p className="text-lg mb-6 text-essnad-gray">
              Contact us today to discuss how our expertise can help address 
              your unique business challenges.
            </p>
            <Button asChild className="bg-essnad-orange hover:bg-orange-600">
              <Link to="/contact-us">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

// Import icons at the component level
const Icons = {
  Strategy: (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
    </svg>
  ),
  Performance: (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20v-6M6 20V10M18 20V4"></path>
    </svg>
  ),
  Governance: (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
    </svg>
  ),
  Risk: (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path>
    </svg>
  ),
  Audit: (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle>
    </svg>
  ),
  Crisis: (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 9 6 6"></path><path d="m15 9-6 6"></path>
    </svg>
  ),
  Technology: (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m16 6 4 14"></path><path d="M12 6v14"></path><path d="M8 8v12"></path><path d="M4 4v16"></path>
    </svg>
  ),
  Security: (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  ),
  Consultancy: (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
    </svg>
  ),
  Sustainability: (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 22v-1a4 4 0 0 1 4-4h16"></path><path d="M7.5 17.5 3 13l18-5-5 18-4.5-4.5"></path><path d="m6 9 3-3 2-2"></path>
    </svg>
  ),
  Resilience: (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76ZM16 8l-2 2"></path><path d="M5 10.5 10.5 5"></path><path d="M19 21v-7l-6 6"></path>
    </svg>
  ),
  Research: (props: any) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path>
    </svg>
  ),
};

// Service data
const serviceCategories = [
  {
    id: "strategy",
    name: "Strategy",
    services: [
      {
        id: "org-restructuring",
        name: "Organizational Restructuring",
        icon: Icons.Strategy,
        description: "Embedding our core values into the company culture to drive employee engagement and align daily operations with organizational goals.",
        details: [
          "Cultural transformation and alignment",
          "Organizational structure optimization",
          "Role clarification and responsibility mapping",
          "Performance management systems"
        ]
      },
      {
        id: "business-transition",
        name: "Business Transition",
        icon: Icons.Strategy,
        description: "Supporting businesses through seamless transitions with forward-looking strategies.",
        details: [
          "Change management frameworks",
          "Transition planning and execution",
          "Stakeholder communication strategies",
          "Post-transition stabilization"
        ]
      },
      {
        id: "visioning",
        name: "Visioning",
        icon: Icons.Strategy,
        description: "Crafting tailored visions to guide organizations toward long-term success.",
        details: [
          "Vision development workshops",
          "Strategic objectives alignment",
          "Future state modeling",
          "Vision communication planning"
        ]
      }
    ]
  },
  {
    id: "performance",
    name: "Performance",
    services: [
      {
        id: "performance-improvement",
        name: "Performance Improvement",
        icon: Icons.Performance,
        description: "Enhancing organizational performance through structured methodologies.",
        details: [
          "Performance baseline assessment",
          "Process optimization",
          "KPI development and tracking",
          "Continuous improvement frameworks"
        ]
      },
      {
        id: "cost-reduction",
        name: "Cost Reduction",
        icon: Icons.Performance,
        description: "Implementing strategies to optimize costs and improve efficiency.",
        details: [
          "Cost structure analysis",
          "Spend optimization strategies",
          "Resource allocation review",
          "Operational efficiency improvements"
        ]
      },
      {
        id: "business-transformation",
        name: "Business Transformation",
        icon: Icons.Performance,
        description: "Driving comprehensive transformation to meet modern challenges.",
        details: [
          "End-to-end transformation planning",
          "Digital enablement strategies",
          "Operating model redesign",
          "Implementation roadmapping"
        ]
      }
    ]
  },
  {
    id: "governance",
    name: "Governance",
    services: [
      {
        id: "governance-frameworks",
        name: "Governance Frameworks",
        icon: Icons.Governance,
        description: "Enhancing accountability, transparency, and resilience through robust governance structures.",
        details: [
          "Board effectiveness assessment",
          "Corporate governance structure design",
          "Decision-making framework development",
          "Governance documentation and policies"
        ]
      },
      {
        id: "regulatory-compliance",
        name: "Regulatory Compliance",
        icon: Icons.Governance,
        description: "Ensuring alignment with industry regulations and standards.",
        details: [
          "Compliance gap analysis",
          "Regulatory monitoring systems",
          "Compliance program development",
          "Staff compliance training"
        ]
      }
    ]
  },
  {
    id: "risk",
    name: "Risk Advisory",
    services: [
      {
        id: "risk-assessment",
        name: "Risk Assessment",
        icon: Icons.Risk,
        description: "Evaluating risks to develop proactive mitigation strategies.",
        details: [
          "Enterprise risk assessment",
          "Risk register development",
          "Risk quantification and prioritization",
          "Mitigation strategy development"
        ]
      },
      {
        id: "control-evaluation",
        name: "Control Evaluation",
        icon: Icons.Risk,
        description: "Assessing and improving internal controls for better governance.",
        details: [
          "Control environment assessment",
          "Control design effectiveness review",
          "Control remediation planning",
          "Monitoring system implementation"
        ]
      },
      {
        id: "business-continuity",
        name: "Business Continuity",
        icon: Icons.Risk,
        description: "Ensuring organizations can navigate challenges with continuity plans.",
        details: [
          "Business impact analysis",
          "Continuity strategy development",
          "Plan documentation and testing",
          "Recovery procedure optimization"
        ]
      }
    ]
  },
  {
    id: "technology",
    name: "Technology",
    services: [
      {
        id: "digital-transformation",
        name: "Digital Transformation",
        icon: Icons.Technology,
        description: "Leveraging cutting-edge technologies to modernize businesses.",
        details: [
          "Digital maturity assessment",
          "Transformation roadmap development",
          "Technology selection and implementation",
          "Digital culture enablement"
        ]
      },
      {
        id: "innovation",
        name: "Innovation & Technology Integration",
        icon: Icons.Technology,
        description: "Integrating innovative solutions for efficiency.",
        details: [
          "Innovation capability building",
          "Technology trend analysis",
          "Solution architecture design",
          "Integration planning and execution"
        ]
      },
      {
        id: "security-solutions",
        name: "Information Security Solutions",
        icon: Icons.Security,
        description: "Protecting data with advanced security measures.",
        details: [
          "Security posture assessment",
          "Security architecture design",
          "Defense-in-depth implementation",
          "Security monitoring solutions"
        ]
      }
    ]
  },
];

export default Services;
