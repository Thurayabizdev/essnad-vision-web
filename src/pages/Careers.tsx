import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase, ChevronRight, CheckCircle, Heart, Users, Award } from "lucide-react";

const Careers = () => {
  return (
    <>
      <Hero
        title="Grow With Us"
        subtitle="Shape the Future at Essnad"
        imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
        imagePosition="center"
      />

      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title">Careers at Essnad</h2>
            <p className="text-lg text-essnad-gray">
              Join our team of dedicated professionals working to deliver transformative solutions 
              to clients across the globe. At Essnad, we value innovation, integrity, and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {whyJoinData.map((item, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="bg-black/10 p-3 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="h-6 w-6 text-black" />
                  </div>
                  <CardTitle className="text-xl text-essnad-gray">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-essnad-gray">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-essnad-lightGray rounded-lg p-8 mb-16">
            <h3 className="section-subtitle text-center mb-8">Our Culture</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-essnad-gray mb-6">
                  At Essnad, we cultivate a cohesive environment that drives employee engagement 
                  and aligns with our organizational goals. Our workplace culture is built on:
                </p>
                <ul className="space-y-3">
                  {culturePoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-black shrink-0 mr-3 mt-0.5" />
                      <span className="text-essnad-gray">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg overflow-hidden h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <h3 className="section-subtitle text-center mb-8">Current Openings</h3>
          
          {jobOpenings.length > 0 ? (
            <div className="space-y-4 mb-12">
              {jobOpenings.map((job, index) => (
                <div 
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-sm transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="mb-4 md:mb-0">
                      <div className="flex items-center mb-2">
                        <Briefcase className="h-5 w-5 text-black mr-2" />
                        <h4 className="text-xl font-bold text-essnad-gray">{job.title}</h4>
                      </div>
                      <div className="flex flex-wrap items-center text-sm text-essnad-gray">
                        <span className="mr-4">{job.location}</span>
                        <span className="mr-4">{job.type}</span>
                        <span>{job.department}</span>
                      </div>
                    </div>
                    <Button className="bg-black hover:bg-black/80">
                      Apply Now <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-essnad-lightGray rounded-lg">
              <p className="text-xl text-essnad-gray mb-4">No Current Openings</p>
              <p className="text-essnad-gray">
                We don't have any open positions at the moment, but we're always looking 
                for talented individuals to join our team.
              </p>
              <Button className="bg-black hover:bg-black/80 mt-6">
                Submit Your Resume
              </Button>
            </div>
          )}

          {/* Open Application */}
          <div className="text-center mt-12 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-essnad-gray">Don't See a Suitable Position?</h3>
            <p className="text-essnad-gray mb-6">
              We're always looking for talented individuals to join our team. Send us your 
              resume and we'll keep it on file for future opportunities.
            </p>
            <Button className="bg-black hover:bg-black/80">
              Submit Open Application
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-essnad-lightGray">
        <div className="container">
          <h2 className="section-subtitle text-center mb-12">What Our Team Says</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {employeeTestimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-essnad-gray/20 overflow-hidden">
                    <img 
                      src={testimonial.avatarSrc || "https://via.placeholder.com/100"} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="text-center text-essnad-gray italic mb-4">{testimonial.quote}</p>
                <div className="text-center">
                  <h4 className="font-bold text-essnad-gray">{testimonial.name}</h4>
                  <p className="text-sm text-essnad-gray/70">{testimonial.position}</p>
                  <p className="text-xs text-essnad-gray/70">{testimonial.tenure}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// Data
const whyJoinData = [
  {
    icon: Heart,
    title: "Meaningful Work",
    description: "Make a real impact by working on projects that transform organizations and drive positive change in various industries."
  },
  {
    icon: Users,
    title: "Collaborative Team",
    description: "Join a diverse team of experts who value collaboration, knowledge sharing, and mutual growth."
  },
  {
    icon: Award,
    title: "Growth Opportunities",
    description: "Benefit from continuous learning, professional development, and career advancement opportunities."
  }
];

const culturePoints = [
  "Collaboration and teamwork that brings diverse perspectives together",
  "Innovation and creative problem-solving to address complex challenges",
  "Integrity and ethical conduct in all our interactions",
  "Excellence and commitment to delivering high-quality results",
  "Work-life balance that promotes wellbeing and personal growth"
];

const jobOpenings = [
  {
    title: "Senior Consultant - Digital Transformation",
    location: "Muscat, Oman",
    type: "Full-time",
    department: "Consulting"
  },
  {
    title: "Risk Advisory Specialist",
    location: "Muscat, Oman",
    type: "Full-time",
    department: "Risk Advisory"
  },
  {
    title: "Cybersecurity Consultant",
    location: "Remote",
    type: "Full-time",
    department: "IT Security"
  }
];

const employeeTestimonials = [
  {
    quote: "Working at Essnad has been an incredible journey of professional growth. The collaborative environment and challenging projects have helped me develop my skills and expertise.",
    name: "Fatima Al-Zahra",
    position: "Senior Consultant",
    tenure: "With Essnad for 5 years",
    avatarSrc: ""
  },
  {
    quote: "What I value most about Essnad is the culture of innovation and continuous learning. We're encouraged to think outside the box and find creative solutions to complex problems.",
    name: "Omar Al-Farsi",
    position: "Technology Consultant",
    tenure: "With Essnad for 3 years",
    avatarSrc: ""
  },
  {
    quote: "The leadership at Essnad truly cares about employee development. I've had numerous opportunities to grow both professionally and personally since joining the team.",
    name: "Noor Al-Kindi",
    position: "Risk Advisory Specialist",
    tenure: "With Essnad for 2 years",
    avatarSrc: ""
  }
];

export default Careers;
