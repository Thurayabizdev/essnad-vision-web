import Hero from "@/components/Hero";

const OurImpact = () => {
  return (
    <>
      <Hero
        title="Our Impact"
        subtitle="Driving Meaningful Change Through Innovation"
        imageSrc="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
        imagePosition="center"
        overlayOpacity="opacity-50"
        theme="dark"
      />
      
      {/* Rest of OurImpact page content */}
      <div className="container py-16">
        <h1 className="text-3xl font-bold mb-6 text-center">Our Impact Page Content</h1>
        <p className="text-center text-gray-600">This page is under construction.</p>
      </div>
    </>
  );
};

export default OurImpact;
