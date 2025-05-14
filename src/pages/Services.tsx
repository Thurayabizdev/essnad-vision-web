import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Briefcase, Users, Lightbulb, Target, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  return (
    <>
      <Hero
        title="Our Services"
        subtitle="Comprehensive Solutions for Business Excellence"
        description="We offer a wide range of consulting services designed to help organizations navigate complex challenges and achieve sustainable growth."
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
        imagePosition="center"
        overlayOpacity="opacity-50"
      />
      
      {/* Main Services Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-essnad-gray">Our Expertise Areas</h2>
            <p className="text-lg max-w-3xl mx-auto text-essnad-gray">
              Discover our comprehensive range of services designed to address your organization's unique challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-essnad-orange/10 p-3 rounded-full inline-block mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-essnad-gray">{service.title}</h3>
                  <p className="text-essnad-gray mb-4">{service.description}</p>
                  <Link to="/contact-us" className="inline-flex items-center text-essnad-orange hover:text-orange-600 font-medium">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-essnad-lightGray">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-essnad-gray">Why Choose Essnad</h2>
            <p className="text-lg max-w-3xl mx-auto text-essnad-gray">
              Our commitment to excellence and client success sets us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center">
                <div className="bg-essnad-orange/10 p-3 rounded-full inline-block mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-essnad-gray">{benefit.title}</h3>
                <p className="text-essnad-gray">{benefit.description}</p>
              </div>
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

// Services data
const services = [
  {
    title: "Strategy Consulting",
    description: "Expert guidance on organizational restructuring, business transitions, and visioning to align with your strategic goals.",
    icon: <Target className="h-6 w-6 text-essnad-orange" />
  },
  {
    title: "Performance Consulting",
    description: "Enhance operational efficiency through performance improvement, cost reduction, and business transformation initiatives.",
    icon: <Briefcase className="h-6 w-6 text-essnad-orange" />
  },
  {
    title: "Corporate Governance",
    description: "Strengthen accountability and transparency with robust governance frameworks and regulatory compliance strategies.",
    icon: <ShieldCheck className="h-6 w-6 text-essnad-orange" />
  },
  {
    title: "Risk Advisory",
    description: "Comprehensive risk assessment, control evaluation, and business continuity planning to safeguard your operations.",
    icon: <ShieldCheck className="h-6 w-6 text-essnad-orange" />
  },
  {
    title: "Technology Consulting",
    description: "Drive digital transformation through innovative technology integration and modern technical leadership.",
    icon: <Lightbulb className="h-6 w-6 text-essnad-orange" />
  },
  {
    title: "IT Security & Cybersecurity",
    description: "Protect your valuable data and systems with advanced information security solutions and cybersecurity strategies.",
    icon: <ShieldCheck className="h-6 w-6 text-essnad-orange" />
  }
];

// Benefits data
const benefits = [
  {
    title: "Expert Team",
    description: "Our consultants bring decades of combined experience across various industries.",
    icon: <Users className="h-6 w-6 text-essnad-orange" />
  },
  {
    title: "Proven Methodology",
    description: "We follow a structured approach that has delivered consistent results for our clients.",
    icon: <Target className="h-6 w-6 text-essnad-orange" />
  },
  {
    title: "Global Perspective",
    description: "We combine local expertise with international best practices for optimal solutions.",
    icon: <Globe className="h-6 w-6 text-essnad-orange" />
  },
  {
    title: "Client-Centric",
    description: "Your success is our priority. We work closely with you to achieve your goals.",
    icon: <Users className="h-6 w-6 text-essnad-orange" />
  }
];

export default Services;
