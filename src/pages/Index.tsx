
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Award, ShieldCheck, Briefcase, Users, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
        imageSrc="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
        layout="split"
        overlayOpacity="opacity-50"
      />

      {/* Featured Services Slider */}
      <section className="py-12 bg-gradient-to-b from-essnad-lightGray to-white overflow-hidden">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8 text-essnad-gray">Our Expertise Areas</h2>
          
          <div className="flex gap-4 pb-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {featuredServices.map((service, index) => (
              <div 
                key={index} 
                className="min-w-[300px] snap-center bg-white rounded-xl shadow-md overflow-hidden flex-shrink-0 transition-all hover:shadow-lg"
              >
                <div className="h-40 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-essnad-gray">{service.title}</h3>
                  <p className="text-essnad-gray mb-4">{service.description}</p>
                  <Link to="/services" className="inline-flex items-center text-essnad-orange hover:text-orange-600 font-medium">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-4">
            <Button asChild className="bg-essnad-orange hover:bg-orange-600 text-white">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

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
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e610" 
                alt="Digital Transformation" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-essnad-gray text-white">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="max-w-2xl mx-auto">Delivering measurable results and creating lasting value for our clients across industries</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <p className="text-4xl font-bold text-essnad-orange mb-2">{stat.value}</p>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
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

      {/* Testimonials Section */}
      <section className="py-16 bg-essnad-lightGray">
        <div className="container">
          <h2 className="section-title text-center mb-12">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white overflow-visible relative">
                <CardContent className="pt-8">
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-essnad-orange/20 flex items-center justify-center">
                    <span className="text-5xl text-essnad-orange leading-none">"</span>
                  </div>
                  <p className="text-essnad-gray mb-6 text-center italic">
                    {testimonial.quote}
                  </p>
                  <div className="text-center">
                    <h4 className="font-bold text-essnad-gray">{testimonial.name}</h4>
                    <p className="text-sm text-essnad-gray/70">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
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

// Featured services for the new slider
const featuredServices = [
  {
    title: "Digital Transformation",
    description: "Modern strategies to transform your business processes through cutting-edge technology.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    title: "Risk Management",
    description: "Comprehensive solutions to identify, assess, and mitigate business risks effectively.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf"
  },
  {
    title: "Cybersecurity",
    description: "Protect your organization from digital threats with advanced security frameworks.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
  },
  {
    title: "Business Resilience",
    description: "Build adaptive strategies to ensure business continuity in changing environments.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c"
  },
  {
    title: "Governance",
    description: "Establish effective structures to enhance accountability and decision-making.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f"
  }
];

// Statistics for the new stats section
const stats = [
  { value: "200+", label: "Clients Served" },
  { value: "20+", label: "Years Experience" },
  { value: "95%", label: "Client Retention" },
  { value: "50+", label: "Expert Consultants" }
];

// Testimonials for the new section
const testimonials = [
  {
    quote: "Essnad transformed our approach to digital security. Their expertise and tailored solutions have been invaluable to our organization's growth.",
    name: "Ahmed Al-Farsi",
    position: "CTO, Global Technologies"
  },
  {
    quote: "Working with Essnad has been a game-changer for our business resilience strategy. Their team's insights helped us navigate complex challenges with confidence.",
    name: "Sarah Johnson",
    position: "Operations Director, Innovate Inc."
  },
  {
    quote: "The governance framework Essnad implemented has significantly improved our decision-making processes and organizational transparency.",
    name: "Khalid Al-Zadjali",
    position: "CEO, Oman Enterprises"
  }
];

export default Index;
