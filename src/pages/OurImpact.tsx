import Hero from "@/components/Hero";
import { Users, Award, Briefcase, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

const OurImpact = () => {
  return (
    <>
      <Hero
        title="Our Impact"
        subtitle="Driving Meaningful Change Through Innovation"
        description="Delivering measurable results and creating lasting value for our clients across industries."
        imageSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
        imagePosition="center"
        overlayOpacity="opacity-50"
      />

      {/* Impact Stats Section */}
      <section className="py-16 bg-essnad-gray text-white">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="max-w-2xl mx-auto">Delivering measurable results and creating lasting value for our clients across industries</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <p className="text-4xl font-bold text-essnad-orange mb-2">
                  <CountUp
                    start={0}
                    end={stat.end}
                    duration={8}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-essnad-gray">Key Highlights</h2>
            <p className="text-lg max-w-3xl mx-auto text-essnad-gray">
              Our work has empowered organizations to achieve excellence, resilience, and sustainable growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-essnad-orange/10 p-8 rounded-lg text-center">
                <div className="mb-4 flex justify-center">{highlight.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-essnad-orange">{highlight.title}</h3>
                <p className="text-essnad-gray">{highlight.description}</p>
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
              <h2 className="text-3xl font-bold mb-4">Ready to Make an Impact?</h2>
              <p className="text-lg">
                Partner with Essnad to drive innovation and achieve measurable results for your organization.
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

const stats = [
  { end: 200, suffix: "+", label: "Clients Served" },
  { end: 20, suffix: "+", label: "Years Experience" },
  { end: 95, suffix: "%", label: "Client Retention" },
  { end: 50, suffix: "+", label: "Expert Consultants" }
];

const highlights = [
  {
    icon: <Users className="h-10 w-10 text-essnad-orange" />,
    title: "Empowering People",
    description: "We help organizations unlock the full potential of their teams through training, leadership, and collaboration."
  },
  {
    icon: <Award className="h-10 w-10 text-essnad-orange" />,
    title: "Award-Winning Projects",
    description: "Our innovative solutions have been recognized for excellence and impact across the region."
  },
  {
    icon: <Briefcase className="h-10 w-10 text-essnad-orange" />,
    title: "Diverse Industries",
    description: "We serve clients in government, finance, healthcare, technology, and more."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-essnad-orange" />,
    title: "Innovation at Core",
    description: "We drive transformation through creative problem-solving and forward-thinking strategies."
  }
];

export default OurImpact;
