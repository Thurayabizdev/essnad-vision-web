import Hero from "@/components/Hero";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, FileText, HelpCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <>
      <Hero
        title="Resources"
        subtitle="Knowledge Hub & Educational Materials"
        description="Explore our curated collection of whitepapers, guides, FAQs, and more to empower your organization."
        imageSrc="https://images.unsplash.com/photo-1493962853295-0fd70327578a"
        imagePosition="center"
        overlayOpacity="opacity-60"
      />
      {/* Main Resources Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-essnad-gray">Resource Library</h2>
            <p className="text-lg max-w-3xl mx-auto text-essnad-gray">
              Access a variety of materials designed to help you stay informed and ahead in your industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-essnad-orange/10 p-4 rounded-full inline-block mb-4">
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-essnad-gray">{resource.title}</h3>
                  <p className="text-essnad-gray mb-4">{resource.description}</p>
                  <Button asChild className="bg-essnad-orange hover:bg-orange-600 text-white">
                    <Link to={resource.link}>View</Link>
                  </Button>
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
              <h2 className="text-3xl font-bold mb-4">Have Questions or Need More Info?</h2>
              <p className="text-lg">
                Reach out to our team for personalized support or to request additional resources tailored to your needs.
              </p>
            </div>
            <Button asChild className="bg-white text-essnad-orange hover:bg-gray-100 font-medium px-8 py-6">
              <Link to="/contact-us">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

const resources = [
  {
    icon: <BookOpen className="h-8 w-8 text-essnad-orange" />,
    title: "Whitepapers",
    description: "In-depth research and analysis on key industry topics.",
    link: "/resources#whitepapers"
  },
  {
    icon: <FileText className="h-8 w-8 text-essnad-orange" />,
    title: "Guides",
    description: "Step-by-step guides to help you implement best practices.",
    link: "/resources#guides"
  },
  {
    icon: <HelpCircle className="h-8 w-8 text-essnad-orange" />,
    title: "FAQs",
    description: "Answers to the most common questions about our services and solutions.",
    link: "/resources#faqs"
  },
  {
    icon: <Users className="h-8 w-8 text-essnad-orange" />,
    title: "Expert Insights",
    description: "Thought leadership and insights from our team of experts.",
    link: "/blog"
  }
];

export default Resources;
