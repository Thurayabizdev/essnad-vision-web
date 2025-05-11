
import { Link } from "react-router-dom";

interface EssnadLogoProps {
  variant?: "default" | "white";
  className?: string;
}

const EssnadLogo = ({ 
  variant = "default", 
  className = ""
}: EssnadLogoProps) => {
  return (
    <Link to="/" className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/2d5cc9de-c4e6-418b-9528-40ebd2cd0003.png" 
        alt="Essnad Logo" 
        className="h-8 md:h-10"
      />
    </Link>
  );
};

export default EssnadLogo;
