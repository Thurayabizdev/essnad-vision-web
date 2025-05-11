
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Hero from "@/components/Hero";
import { CheckIcon, Users, BookOpen, Target, Award, Globe } from "lucide-react";

const AboutUs = () => {
  return (
    <>
      <Hero
        title="About Us"
        subtitle="Discover Our Journey and Vision"
        imageSrc="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
        imagePosition="top"
        layout="left-aligned"
        cornerAccent={true}
        overlayOpacity="opacity-60"
      />

      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-12">About Essnad</h2>

            <Tabs defaultValue="story" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
                <TabsTrigger value="story" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span className="hidden md:inline">Our Story</span>
                </TabsTrigger>
                <TabsTrigger value="mission" className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  <span className="hidden md:inline">Mission</span>
                </TabsTrigger>
                <TabsTrigger value="vision" className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span className="hidden md:inline">Vision</span>
                </TabsTrigger>
                <TabsTrigger value="values" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span className="hidden md:inline">Values</span>
                </TabsTrigger>
                <TabsTrigger value="global" className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <span className="hidden md:inline">Global</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="story" className="p-6 bg-essnad-lightGray rounded-lg">
                <h3 className="section-subtitle">Our Story</h3>
                <div className="space-y-4">
                  <p className="text-essnad-gray">
                    Essnad was founded with a mission to empower organizations through innovative consulting, 
                    rooted in Oman with a vision for global impact.
                  </p>
                  <p className="text-essnad-gray">
                    Our team brings more than two decades of combined experience, delivering tailored 
                    solutions across diverse sectors. Through the years, we have built a reputation for 
                    excellence, integrity, and innovation in everything we do.
                  </p>
                  <div className="mt-8 flex items-center">
                    <div className="bg-essnad-orange/10 p-4 rounded-full mr-6">
                      <span className="text-3xl font-bold text-essnad-orange">20+</span>
                    </div>
                    <p className="text-lg text-essnad-gray font-medium">
                      Years of expertise in consulting and digital transformation
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="mission" className="p-6 bg-essnad-lightGray rounded-lg">
                <h3 className="section-subtitle">Mission Statement</h3>
                <p className="text-essnad-gray">
                  To deliver innovative consulting solutions that empower organizations to excel in a 
                  dynamic digital landscape, fostering sustainable growth, enhanced business resilience, 
                  and operational excellence.
                </p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-essnad-orange mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <h4 className="font-medium mb-1">Innovative Solutions</h4>
                    <p className="text-sm">Delivering cutting-edge strategies</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-essnad-orange mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <h4 className="font-medium mb-1">Sustainable Growth</h4>
                    <p className="text-sm">Building for long-term success</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-essnad-orange mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                        <path d="m9 12 2 2 4-4"></path>
                      </svg>
                    </div>
                    <h4 className="font-medium mb-1">Operational Excellence</h4>
                    <p className="text-sm">Optimizing business processes</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="vision" className="p-6 bg-essnad-lightGray rounded-lg">
                <h3 className="section-subtitle">Our Vision</h3>
                <p className="text-essnad-gray">
                  To be the foremost catalyst for digital transformation and business resilience, 
                  inspiring global organizations to achieve their full potential through cutting-edge 
                  strategies, unwavering excellence, and robust resilience.
                </p>
                <div className="mt-6 p-6 border-l-4 border-essnad-orange bg-white rounded-r-lg">
                  <p className="text-lg italic text-essnad-gray">
                    "We envision a world where organizations thrive through technological advancement, 
                    strategic insight, and operational excellence."
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="values" className="p-6 bg-essnad-lightGray rounded-lg">
                <h3 className="section-subtitle">Core Values</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-essnad-orange/10 p-2 rounded-full mr-4">
                      <CheckIcon className="h-5 w-5 text-essnad-orange" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-essnad-gray">Integrity</h4>
                      <p className="text-essnad-gray">
                        We uphold the highest ethical standards, confidently ensuring transparency 
                        and accountability in all our interactions with stakeholders and the 
                        communities we serve.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-essnad-orange/10 p-2 rounded-full mr-4">
                      <CheckIcon className="h-5 w-5 text-essnad-orange" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-essnad-gray">Customer Focus</h4>
                      <p className="text-essnad-gray">
                        Our customer-centric approach guarantees outstanding value and cultivates 
                        long-lasting relationships rooted in trust and mutual respect.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-essnad-orange/10 p-2 rounded-full mr-4">
                      <CheckIcon className="h-5 w-5 text-essnad-orange" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-essnad-gray">People</h4>
                      <p className="text-essnad-gray">
                        We are confident that our employees, our most valuable asset, fully embody 
                        our corporate values and align with the goals of our organization. We take 
                        pride in sharing our knowledge with our clients, reflecting our strong 
                        commitment to ethical principles.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="global" className="p-6 bg-essnad-lightGray rounded-lg">
                <h3 className="section-subtitle">Global Presence</h3>
                <p className="text-essnad-gray mb-6">
                  Establish a strong global presence by partnering with diverse sectors worldwide 
                  to deliver transformative, high-impact solutions.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <img 
                    src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
                    alt="Global Presence" 
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="mt-4">
                    <h4 className="font-medium mb-1 text-essnad-gray">Our Global Reach</h4>
                    <p className="text-sm text-essnad-gray">
                      While rooted in Oman, our expertise and services extend across borders, 
                      helping organizations worldwide navigate their unique challenges.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* For mobile, also provide accordion view */}
      <section className="section bg-white md:hidden">
        <div className="container">
          <h2 className="section-subtitle text-center mb-6">Learn More About Us</h2>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Our Story</AccordionTrigger>
              <AccordionContent>
                <p className="text-essnad-gray">
                  Essnad was founded with a mission to empower organizations through innovative consulting, 
                  rooted in Oman with a vision for global impact.
                </p>
                <p className="text-essnad-gray mt-4">
                  Our team brings more than two decades of combined experience, delivering tailored 
                  solutions across diverse sectors.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger>Mission Statement</AccordionTrigger>
              <AccordionContent>
                <p className="text-essnad-gray">
                  To deliver innovative consulting solutions that empower organizations to excel in a 
                  dynamic digital landscape, fostering sustainable growth, enhanced business resilience, 
                  and operational excellence.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger>Vision</AccordionTrigger>
              <AccordionContent>
                <p className="text-essnad-gray">
                  To be the foremost catalyst for digital transformation and business resilience, 
                  inspiring global organizations to achieve their full potential through cutting-edge 
                  strategies, unwavering excellence, and robust resilience.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger>Core Values</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-essnad-gray">Integrity</h4>
                    <p className="text-essnad-gray">
                      We uphold the highest ethical standards, confidently ensuring transparency 
                      and accountability in all our interactions.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-essnad-gray">Customer Focus</h4>
                    <p className="text-essnad-gray">
                      Our customer-centric approach guarantees outstanding value and cultivates 
                      long-lasting relationships.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-essnad-gray">People</h4>
                    <p className="text-essnad-gray">
                      We are confident that our employees fully embody our corporate values and align 
                      with the goals of our organization.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger>Global Presence</AccordionTrigger>
              <AccordionContent>
                <p className="text-essnad-gray">
                  Establish a strong global presence by partnering with diverse sectors worldwide 
                  to deliver transformative, high-impact solutions.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
