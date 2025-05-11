
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Empowering Digital Transformation"
        subtitle="Strategic Solutions for Sustainable Growth"
        description="Essnad is an Oman-based consulting firm specializing in digital transformation, governance, risk management, and security with over 20 years of expertise."
        buttonText="Explore Our Services"
        buttonLink="/services"
        imageSrc="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
        layout="split"
        overlayOpacity="opacity-40"
      />

      {/* Overview Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Overview of Essnad</h2>
              <p className="text-lg mb-6 text-essnad-gray">
                Essnad is an Oman-based consulting firm specializing in digital transformation, 
                governance, risk management, business resilience, crisis management, data management, 
                innovation, information security, and cybersecurity.
              </p>
              <p className="text-lg mb-8 text-essnad-gray">
                With over 20 years of experience, we deliver strategic solutions that drive 
                sustainable growth, boost operational efficiency, and strengthen security. 
                We combine deep technical expertise with strategic insight to help businesses 
                modernize technology, manage risk, and streamline operations.
              </p>
              <Button asChild className="bg-essnad-orange hover:bg-orange-600 text-white">
                <Link to="/about-us">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Digital Transformation" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="section bg-essnad-lightGray">
        <div className="container">
          <h2 className="section-title text-center mb-12">Key Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Highlight 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-essnad-orange/10 p-3 rounded-full inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F28C38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20v-6M6 20V10M18 20V4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-essnad-gray">Over 20 Years of Experience</h3>
              <p className="text-essnad-gray">
                With more than two decades of proven expertise in the industry, 
                we have helped countless organizations transform and succeed.
              </p>
            </div>

            {/* Highlight 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-essnad-orange/10 p-3 rounded-full inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F28C38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-essnad-gray">Commitment to Excellence</h3>
              <p className="text-essnad-gray">
                We maintain an unwavering commitment to excellence, innovation, 
                and integrity in everything we do.
              </p>
            </div>

            {/* Highlight 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-essnad-orange/10 p-3 rounded-full inline-block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#F28C38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-essnad-gray">Trusted Partners</h3>
              <p className="text-essnad-gray">
                We serve as trusted advisors to organizations across various 
                industries, providing tailored solutions that address unique challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Services</h2>
            <p className="text-lg max-w-3xl mx-auto text-essnad-gray">
              We offer a comprehensive range of services designed to help your 
              organization navigate complex challenges and achieve sustainable growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-essnad-gray">{service.title}</h3>
                <p className="mb-4 text-essnad-gray">{service.description}</p>
                <Link to="/services" className="inline-flex items-center text-essnad-orange hover:text-orange-600 font-medium">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild className="bg-essnad-orange hover:bg-orange-600 text-white">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-essnad-orange to-orange-500 text-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="max-w-2xl mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-lg">
                Partner with Essnad to navigate complex challenges and achieve sustainable growth through 
                our expert consulting services.
              </p>
            </div>
            <Button asChild className="bg-white text-essnad-orange hover:bg-gray-100 font-medium px-8 py-6">
              <Link to="/contact-us">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

// Sample services data
const services = [
  {
    title: "Strategy Consulting",
    description: "Expert guidance on organizational restructuring, business transitions, and visioning to align with your strategic goals."
  },
  {
    title: "Performance Consulting",
    description: "Enhance operational efficiency through performance improvement, cost reduction, and business transformation initiatives."
  },
  {
    title: "Corporate Governance",
    description: "Strengthen accountability and transparency with robust governance frameworks and regulatory compliance strategies."
  },
  {
    title: "Risk Advisory",
    description: "Comprehensive risk assessment, control evaluation, and business continuity planning to safeguard your operations."
  },
  {
    title: "Technology Consulting",
    description: "Drive digital transformation through innovative technology integration and modern technical leadership."
  },
  {
    title: "IT Security & Cybersecurity",
    description: "Protect your valuable data and systems with advanced information security solutions and cybersecurity strategies."
  }
];

export default Index;
