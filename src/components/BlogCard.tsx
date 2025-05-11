
import { Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
  category: string;
  slug: string;
  featured?: boolean;
}

const BlogCard = ({
  title,
  excerpt,
  imageUrl,
  date,
  author,
  category,
  slug,
  featured = false
}: BlogCardProps) => {
  return featured ? (
    <div className="relative w-full h-[500px] overflow-hidden rounded-lg shadow-lg">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-essnad-gray bg-opacity-70" />
      <div className="absolute inset-0 flex flex-col justify-end p-8">
        <span className="inline-block mb-4 px-3 py-1 bg-essnad-orange text-white text-sm font-medium rounded">
          {category}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{title}</h2>
        <p className="text-lg text-white mb-6 line-clamp-3">{excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-white">
            <User size={16} className="mr-2" />
            <span className="text-sm mr-4">{author}</span>
            <Clock size={16} className="mr-2" />
            <span className="text-sm">{date}</span>
          </div>
          <Link 
            to={`/blog/${slug}`} 
            className="px-6 py-2 bg-essnad-orange text-white rounded hover:bg-orange-600 transition-colors"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-essnad-orange/20" />
        <span className="absolute top-4 left-4 px-3 py-1 bg-essnad-orange text-white text-sm font-medium rounded">
          {category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-essnad-gray line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-500">
            <User size={16} className="mr-2" />
            <span className="text-xs mr-3">{author}</span>
            <Clock size={16} className="mr-2" />
            <span className="text-xs">{date}</span>
          </div>
          <Link 
            to={`/blog/${slug}`} 
            className="text-essnad-orange font-medium hover:text-orange-600 transition-colors"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
