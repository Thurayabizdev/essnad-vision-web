
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
  layout?: "centered" | "left-aligned" | "split" | "minimal";
  theme?: "light" | "dark";
  cornerAccent?: boolean;
}

const Hero = ({
  title,
  subtitle,
  description,
  imageSrc = "https://images.unsplash.com/photo-1501854140801-50d01698950b",
  buttonText,
  buttonLink = "/services",
  overlayOpacity = "opacity-50",
  imagePosition = "center",
  layout = "centered",
  theme = "dark",
  cornerAccent = false
}: HeroProps) => {
  // Layout-specific styles
  const getContainerClasses = () => {
    switch (layout) {
      case "left-aligned":
        return "items-start text-left px-8 md:px-16";
      case "split":
        return "md:grid md:grid-cols-2 md:gap-8 items-center";
      case "minimal":
        return "items-center justify-center px-4 bg-essnad-orange";
      default: // centered
        return "items-center text-center px-4";
    }
  };
  
  const textColor = theme === "light" ? "text-essnad-gray" : "text-white";
  
  return (
    <div className={`relative h-[70vh] min-h-[500px] flex overflow-hidden ${layout === "minimal" ? "h-[50vh]" : ""}`}>
      {/* Corner accent */}
      {cornerAccent && (
        <div className="absolute top-0 right-0 w-48 h-48 bg-essnad-orange opacity-20 transform -translate-x-[40%] translate-y-[40%] rotate-45 z-10"></div>
      )}
      
      {layout !== "minimal" && (
        <>
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
        </>
      )}
      
      {/* Content - Added vertical padding to create space between header and content */}
      <div className={`container relative z-20 flex flex-col justify-center py-16 ${getContainerClasses()}`}>
        {layout === "split" ? (
          <>
            <div className="mb-8 md:mb-0 p-4">
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in ${textColor}`}>
                {title}
              </h1>
              
              {subtitle && (
                <h2 className={`text-xl md:text-2xl font-medium mb-4 max-w-3xl animate-fade-in ${textColor}`}>
                  {subtitle}
                </h2>
              )}
              
              {description && (
                <p className={`text-lg max-w-2xl mb-8 animate-fade-in ${textColor}`}>
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
            <div className="hidden md:block bg-essnad-orange/10 h-full"></div>
          </>
        ) : (
          <>
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in ${textColor}`}>
              {title}
            </h1>
            
            {subtitle && (
              <h2 className={`text-xl md:text-2xl font-medium mb-4 max-w-3xl mx-auto animate-fade-in ${textColor}`}>
                {subtitle}
              </h2>
            )}
            
            {description && (
              <p className={`text-lg max-w-2xl mx-auto mb-8 animate-fade-in ${textColor}`}>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Hero;
