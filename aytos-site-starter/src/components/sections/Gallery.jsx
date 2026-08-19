export default function Gallery({ images = [] }) {
  // Default placeholder images for demo
  const placeholderImages = [
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
  ];

  const galleryImages = images.length > 0 ? images : placeholderImages;

  return (
    <section id="portfolio" className="bg-white">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-ink mb-12 text-center">
          Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src={image}
                alt={`Portfolio item ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
