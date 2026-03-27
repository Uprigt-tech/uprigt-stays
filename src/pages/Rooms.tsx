import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ArrowRight, Wind, Wifi, Tv, Coffee } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Rooms = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const roomsRef = useRef<HTMLDivElement>(null);

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
        roomsRef.current?.querySelectorAll('.room-card') || [],
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: roomsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const rooms = [
    {
      name: 'Deluxe Room',
      price: 129,
      image: '/images/room-deluxe.jpg',
      description: 'Perfect for solo travelers or couples seeking comfort and style. Our Deluxe Room offers everything you need for a relaxing stay.',
      features: [
        'Queen-size bed',
        '25 m²',
        'City view',
        'Work desk',
      ],
      amenities: [
        { icon: Wind, label: 'AC' },
        { icon: Wifi, label: 'WiFi' },
        { icon: Tv, label: 'Smart TV' },
        { icon: Coffee, label: 'Breakfast' },
      ],
    },
    {
      name: 'Executive Room',
      price: 189,
      image: '/images/room-executive.jpg',
      description: 'Spacious and elegantly designed for business travelers. Features a separate work area and premium amenities.',
      features: [
        'King-size bed',
        '35 m²',
        'Panoramic view',
        'Executive lounge access',
      ],
      amenities: [
        { icon: Wind, label: 'AC' },
        { icon: Wifi, label: 'WiFi' },
        { icon: Tv, label: 'Smart TV' },
        { icon: Coffee, label: 'Breakfast' },
      ],
    },
    {
      name: 'Premium Suite',
      price: 299,
      image: '/images/room-premium.jpg',
      description: 'The ultimate luxury experience with separate living area, premium furnishings, and breathtaking views.',
      features: [
        'King-size bed',
        '55 m²',
        'Panoramic city view',
        'Butler service',
      ],
      amenities: [
        { icon: Wind, label: 'AC' },
        { icon: Wifi, label: 'WiFi' },
        { icon: Tv, label: 'Smart TV' },
        { icon: Coffee, label: 'Breakfast' },
      ],
    },
  ];

  return (
    <div className="pt-24 lg:pt-32 pb-20 lg:pb-28">
      <div ref={headerRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 mb-12 lg:mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <span className="header-animate inline-block font-mono text-xs uppercase tracking-[0.12em] text-text-secondary mb-4">
            Our Accommodations
          </span>
          <h1 className="header-animate font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
            CHOOSE YOUR
            <br />
            PERFECT ROOM
          </h1>
          <p className="header-animate text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
            Every room is designed to give you the comfort you deserve. 
            Select from our range of thoughtfully designed accommodations.
          </p>
        </div>
      </div>

      <div ref={roomsRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {rooms.map((room, index) => (
            <div key={index} className="room-card group">
              <div className="bg-white h-full flex flex-col rounded-[28px] overflow-hidden shadow-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="font-display font-bold text-text-primary">${room.price}</span>
                    <span className="text-text-secondary text-sm">/night</span>
                  </div>
                </div>

                <div className="p-6 lg:p-8 flex-1 flex flex-col">
                  <h3 className="font-display text-2xl font-bold text-text-primary mb-3">
                    {room.name}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                    {room.description}
                  </p>

                  <div className="mb-6">
                    <ul className="space-y-2">
                      {room.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-sm text-text-primary">
                          <Check className="w-4 h-4 text-indigo flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-black/5">
                    {room.amenities.map((amenity, aIndex) => (
                      <div key={aIndex} className="flex items-center gap-1.5 text-text-secondary">
                        <amenity.icon className="w-4 h-4" />
                        <span className="text-xs">{amenity.label}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/booking"
                    className="btn-primary w-full justify-center"
                  >
                    Check Availability
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 mt-16 lg:mt-20">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-text-secondary mb-6">
            Need help choosing? Our team is here to assist you in finding the perfect room for your stay.
          </p>
          <Link to="/contact" className="btn-secondary inline-flex">
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
