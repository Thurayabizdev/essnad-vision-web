import { useState } from "react";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Form Submitted Successfully",
        description: "We'll get back to you as soon as possible.",
      });
      setIsLoading(false);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: ""
      });
    }, 1000);
  };

  return (
    <>
      <Hero
        title="Let's Connect"
        subtitle="We're Here to Help You Succeed"
        imageSrc="https://images.unsplash.com/photo-1516321497487-e288fb19713f"
        imagePosition="center"
      />

      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="section-title mb-6">Send Us a Message</h2>
              <p className="text-essnad-gray mb-8">
                Have questions or need assistance? Fill out the form below and our team will 
                get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-essnad-gray">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-gray-300 focus:border-black focus:ring-black"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-essnad-gray">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-gray-300 focus:border-black focus:ring-black"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-essnad-gray">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-black focus:ring-black"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-essnad-gray">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-black focus:ring-black"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-essnad-gray">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-black focus:ring-black"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-essnad-gray">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-gray-300 focus:border-black focus:ring-black"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="bg-black hover:bg-black/80 text-white w-full md:w-auto px-8"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="section-title mb-6">Contact Information</h2>
              <p className="text-essnad-gray mb-8">
                You can reach out to us directly using the information below. 
                Our team is available to assist you during business hours.
              </p>

              <div className="space-y-6">
                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-essnad-orange shrink-0 mr-4" />
                      <div>
                        <h3 className="font-medium text-essnad-gray mb-1">Office Address</h3>
                        <p className="text-essnad-gray">
                          123 Business Avenue<br />
                          Al Khuwair<br />
                          Muscat, Oman
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-essnad-orange shrink-0 mr-4" />
                      <div>
                        <h3 className="font-medium text-essnad-gray mb-1">Phone</h3>
                        <p className="text-essnad-gray">+968 1234 5678</p>
                        <p className="text-essnad-gray">+968 9876 5432</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-essnad-orange shrink-0 mr-4" />
                      <div>
                        <h3 className="font-medium text-essnad-gray mb-1">Email</h3>
                        <p className="text-essnad-gray">info@essnad.com</p>
                        <p className="text-essnad-gray">support@essnad.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="pt-4">
                  <h3 className="font-medium text-essnad-gray mb-4">Business Hours</h3>
                  <div className="space-y-2 text-essnad-gray">
                    <div className="flex justify-between">
                      <span>Sunday - Thursday:</span>
                      <span>8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Friday:</span>
                      <span>Closed</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00 AM - 1:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 relative">
        <div className="absolute inset-0 bg-essnad-gray/20 flex items-center justify-center">
          <div className="text-center p-8 bg-white rounded-lg shadow-lg">
            <p className="text-essnad-gray font-medium">Map placeholder</p>
            <p className="text-sm text-essnad-gray/70 mt-2">Interactive map would be displayed here</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
