import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current?.querySelectorAll('.header-animate') || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        galleryRef.current?.querySelectorAll('.gallery-item') || [],
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: galleryRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const galleryImages = [
    { src: '/images/room-deluxe.jpg', alt: 'Deluxe Room', category: 'Rooms', span: 'col-span-1 row-span-2' },
    { src: '/images/room-executive.jpg', alt: 'Executive Bathroom', category: 'Rooms', span: 'col-span-1 row-span-1' },
    { src: '/images/room-premium.jpg', alt: 'Premium Suite', category: 'Rooms', span: 'col-span-1 row-span-1' },
    { src: '/images/location-reception.jpg', alt: 'Hotel Reception', category: 'Reception', span: 'col-span-1 row-span-2' },
    { src: '/images/stay-stairs.jpg', alt: 'Hotel Interior', category: 'Interior', span: 'col-span-2 row-span-1' },
    { src: '/images/gallery-seating.jpg', alt: 'Seating Area', category: 'Rooms', span: 'col-span-1 row-span-1' },
    { src: '/images/comfort-bed.jpg', alt: 'Bed Detail', category: 'Rooms', span: 'col-span-1 row-span-1' },
    { src: '/images/amenities-workspace.jpg', alt: 'Work Space', category: 'Amenities', span: 'col-span-1 row-span-1' },
    { src: '/images/experience-bathroom.jpg', alt: 'Luxury Bathroom', category: 'Rooms', span: 'col-span-2 row-span-1' },
    { src: '/images/dining-food.jpg', alt: 'Breakfast', category: 'Dining', span: 'col-span-1 row-span-1' },
    { src: '/images/location-street.jpg', alt: 'Neighborhood', category: 'Location', span: 'col-span-1 row-span-1' },
    { src: '/images/memory-balcony.jpg', alt: 'Balcony View', category: 'Exterior', span: 'col-span-2 row-span-1' },
  ];

  return (
    <div className="pt-24 lg:pt-32 pb-20 lg:pb-28">
      <div ref={headerRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 mb-12 lg:mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <span className="header-animate inline-block font-mono text-xs uppercase tracking-[0.12em] text-text-secondary mb-4">
            Visual Tour
          </span>
          <h1 className="header-animate font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
            TAKE A LOOK AT
            <br />
            YOUR NEXT STAY
          </h1>
          <p className="header-animate text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
            Explore our spaces through these images. From cozy rooms to welcoming common areas, 
            see what awaits you at Uprigt Stays.
          </p>
        </div>
      </div>

      <div ref={galleryRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`gallery-item relative group overflow-hidden rounded-[20px] lg:rounded-[24px] ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="font-mono text-xs uppercase tracking-wider opacity-70">
                    {image.category}
                  </span>
                  <h4 className="font-display font-semibold mt-1">{image.alt}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 mt-16 lg:mt-20">
        <div className="max-w-4xl mx-auto">
          <h3 className="font-display text-xl font-semibold text-text-primary text-center mb-8">
            Browse by Category
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['All', 'Rooms', 'Reception', 'Interior', 'Amenities', 'Dining', 'Location', 'Exterior'].map(
              (category, index) => (
                <button
                  key={index}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    index === 0
                      ? 'bg-indigo text-white'
                      : 'bg-white text-text-primary hover:bg-indigo/10 border border-black/5'
                  }`}
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
