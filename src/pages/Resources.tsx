import Hero from "@/components/Hero";

const Resources = () => {
  return (
    <>
      <Hero
        title="Resources"
        subtitle="Knowledge Hub & Educational Materials"
        imageSrc="https://images.unsplash.com/photo-1493962853295-0fd70327578a"
        imagePosition="center"
        overlayOpacity="opacity-60"
      />
      
      {/* Rest of Resources page content */}
      <div className="container py-16">
        <h1 className="text-3xl font-bold mb-6 text-center">Resources Page Content</h1>
        <p className="text-center text-gray-600">This page is under construction.</p>
      </div>
    </>
  );
};

export default Resources;
