import Hero from "@/components/Hero";

const Services = () => {
  return (
    <>
      <Hero
        title="Our Services"
        subtitle="Comprehensive Solutions for Business Excellence"
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
        imagePosition="center"
        overlayOpacity="opacity-50"
      />
      
      {/* Rest of Services page content */}
      <div className="container py-16">
        <h1 className="text-3xl font-bold mb-6 text-center">Services Page Content</h1>
        <p className="text-center text-gray-600">This page is under construction.</p>
      </div>
    </>
  );
};

export default Services;
