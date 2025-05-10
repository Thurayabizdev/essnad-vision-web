
import Hero from "@/components/Hero";
import { CheckCircle, Award, Target, Users, LineChart } from "lucide-react";

const OurImpact = () => {
  return (
    <>
      <Hero
        title="Our Impact"
        subtitle="Driving Positive Change Through Expert Consulting"
        imageSrc="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
        imagePosition="center"
      />

      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title text-center mb-12">Our Commitment to Excellence</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactData.map((impact, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="mb-4">
                  <impact.icon className="h-10 w-10 text-essnad-orange" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-essnad-gray">{impact.title}</h3>
                <p className="text-essnad-gray">{impact.description}</p>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <h4 className="text-sm font-semibold text-essnad-orange mb-2">Key Outcomes:</h4>
                  <ul className="space-y-2">
                    {impact.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-essnad-orange shrink-0 mr-2 mt-0.5" />
                        <span className="text-sm text-essnad-gray">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Section */}
      <section className="section bg-essnad-lightGray">
        <div className="container">
          <h2 className="section-title text-center mb-12">Client Success Stories</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {clientSuccessData.map((client, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-essnad-gray/10">
                  <img 
                    src={client.imageSrc} 
                    alt={client.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase text-essnad-orange">{client.category}</span>
                  <h3 className="text-xl font-bold mb-3 mt-1 text-essnad-gray">{client.title}</h3>
                  <p className="text-essnad-gray text-sm mb-4">{client.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-essnad-gray/70">{client.location}</span>
                    <span className="bg-essnad-orange/10 text-essnad-orange text-xs py-1 px-2 rounded">
                      {client.result}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-essnad-orange text-white">
        <div className="container">
          <h2 className="section-title text-center mb-12 text-white">Our Impact in Numbers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {statsData.map((stat, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-8">
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-lg font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title text-center mb-12">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-essnad-lightGray rounded-lg p-6 relative"
              >
                <div className="absolute -top-5 left-6 w-10 h-10 flex items-center justify-center rounded-full bg-essnad-orange text-white text-2xl">
                  "
                </div>
                <p className="text-essnad-gray italic mb-6 pt-4">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-essnad-gray/20 overflow-hidden mr-4">
                    <img 
                      src={testimonial.avatarSrc || "https://via.placeholder.com/100"} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-essnad-gray">{testimonial.name}</h4>
                    <p className="text-sm text-essnad-gray/70">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// Impact Data
const impactData = [
  {
    icon: Award,
    title: "Commitment to Excellence",
    description: "Delivering high-quality services that exceed client expectations and drive long-term success.",
    outcomes: [
      "99% client satisfaction rate",
      "Over 500 successful projects completed",
      "80% of clients return for additional services"
    ]
  },
  {
    icon: Target,
    title: "Tailored Solutions",
    description: "Customized strategies designed to address unique needs and challenges.",
    outcomes: [
      "Personalized approach for each client",
      "Industry-specific methodologies",
      "Adaptive implementation strategies"
    ]
  },
  {
    icon: LineChart,
    title: "Driving Sustainable Growth",
    description: "Implementing initiatives for eco-friendly and sustainable business practices.",
    outcomes: [
      "Reduced environmental impact",
      "Long-term resource efficiency",
      "Enhanced corporate social responsibility"
    ]
  },
  {
    icon: Users,
    title: "Client-Centric Approach",
    description: "Ensuring solutions are aligned with client goals for maximum impact.",
    outcomes: [
      "Clear communication throughout projects",
      "Collaborative problem-solving",
      "Ongoing support and guidance"
    ]
  },
  {
    icon: Award,
    title: "Strategic Insights",
    description: "Navigating complex landscapes to identify opportunities and drive growth.",
    outcomes: [
      "Data-driven decision making",
      "Forward-looking recommendations",
      "Trend analysis and forecasting"
    ]
  },
  {
    icon: LineChart,
    title: "Measurable Results",
    description: "Focusing on quantifiable outcomes that demonstrate real business value.",
    outcomes: [
      "Comprehensive performance metrics",
      "ROI-focused strategies",
      "Regular progress reporting"
    ]
  }
];

// Client Success Data
const clientSuccessData = [
  {
    title: "Digital Transformation for Financial Institution",
    description: "Implemented comprehensive digital transformation strategy for a leading financial institution, resulting in enhanced customer experience and operational efficiency.",
    category: "Digital Transformation",
    location: "Muscat, Oman",
    result: "40% Efficiency Increase",
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  },
  {
    title: "Risk Management Framework for Energy Company",
    description: "Developed and implemented a robust risk management framework for a major energy company, ensuring regulatory compliance and improved risk visibility.",
    category: "Risk Advisory",
    location: "Dubai, UAE",
    result: "Risk Reduction",
    imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    title: "Cybersecurity Enhancement for Government Agency",
    description: "Strengthened the cybersecurity posture of a government agency through comprehensive assessment, strategy development, and implementation.",
    category: "IT Security",
    location: "Riyadh, Saudi Arabia",
    result: "Security Improvement",
    imageSrc: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
  }
];

// Stats Data
const statsData = [
  { value: "500+", label: "Projects Completed" },
  { value: "150+", label: "Clients Served" },
  { value: "20+", label: "Years of Experience" },
  { value: "30+", label: "Expert Consultants" }
];

// Testimonials Data
const testimonials = [
  {
    quote: "Essnad's strategic guidance transformed our approach to digital transformation. Their expertise and client-focused methodology delivered exceptional results that exceeded our expectations.",
    name: "Ahmed Al-Balushi",
    position: "CIO",
    company: "Gulf Financial Group",
    avatarSrc: ""
  },
  {
    quote: "Working with Essnad on our risk management framework was a game-changer. Their team's thorough understanding of our industry and commitment to excellence made all the difference.",
    name: "Sarah Al-Harthy",
    position: "Risk Director",
    company: "Oman Energy Solutions",
    avatarSrc: ""
  },
  {
    quote: "The cybersecurity solutions provided by Essnad significantly enhanced our security posture. Their team's proactive approach and technical expertise were invaluable to our organization.",
    name: "Mohammed Al-Fahdi",
    position: "IT Security Manager",
    company: "National Telecommunications Authority",
    avatarSrc: ""
  },
  {
    quote: "Essnad's business continuity planning helped us navigate challenging times with confidence. Their strategic insights and practical implementation guidance were exactly what we needed.",
    name: "Laila Al-Zadjali",
    position: "Operations Director",
    company: "Gulf Retail Group",
    avatarSrc: ""
  }
];

export default OurImpact;
