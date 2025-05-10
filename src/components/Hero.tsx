
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  imageSrc?: string;
  buttonText?: string;
  buttonLink?: string;
  overlayOpacity?: string;
  imagePosition?: "center" | "top" | "bottom";
}

const Hero = ({
  title,
  subtitle,
  description,
  imageSrc = "https://images.unsplash.com/photo-1501854140801-50d01698950b",
  buttonText,
  buttonLink = "/services",
  overlayOpacity = "opacity-50",
  imagePosition = "center"
}: HeroProps) => {
  return (
    <div className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat w-full h-full z-0"
        style={{
          backgroundImage: `url(${imageSrc})`,
          backgroundPosition: imagePosition
        }}
      ></div>
      
      {/* Overlay */}
      <div className={`absolute inset-0 bg-essnad-gray ${overlayOpacity} z-10`}></div>
      
      {/* Content */}
      <div className="container relative z-20 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
          {title}
        </h1>
        
        {subtitle && (
          <h2 className="text-xl md:text-2xl font-medium mb-4 max-w-3xl mx-auto animate-fade-in">
            {subtitle}
          </h2>
        )}
        
        {description && (
          <p className="text-lg max-w-2xl mx-auto mb-8 animate-fade-in">
            {description}
          </p>
        )}
        
        {buttonText && (
          <Button 
            asChild 
            className="bg-essnad-orange hover:bg-orange-600 text-white px-8 py-6 text-lg animate-fade-in"
          >
            <Link to={buttonLink}>
              {buttonText}
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Hero;
