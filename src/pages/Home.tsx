import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Users, MapPin, Wallet, HeadphonesIcon, ArrowRight, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroImageRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const exploreRef = useRef<HTMLDivElement>(null);
  const comfortRef = useRef<HTMLDivElement>(null);
  const amenitiesRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const stayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline();

      heroTl.fromTo(
        heroImageRef.current,
        { x: 100, opacity: 0, scale: 0.95 },
        { x: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }
      );

      heroTl.fromTo(
        heroTextRef.current?.querySelectorAll('.hero-animate') || [],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
        '-=0.6'
      );

      gsap.fromTo(
        featuresRef.current?.querySelectorAll('.feature-card') || [],
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        exploreRef.current?.querySelectorAll('.explore-panel') || [],
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: exploreRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        comfortRef.current?.querySelectorAll('.comfort-panel') || [],
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: comfortRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        comfortRef.current?.querySelector('.comfort-text') || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: comfortRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        amenitiesRef.current?.querySelectorAll('.amenity-item') || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: amenitiesRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        locationRef.current?.querySelectorAll('.location-panel') || [],
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: locationRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        stayRef.current?.querySelector('.stay-panel') || [],
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: stayRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: MapPin,
      title: 'Prime Location',
      description: 'Located in the heart of the city, close to all major attractions and transport.',
    },
    {
      icon: Wallet,
      title: 'Affordable Luxury',
      description: 'Experience premium comfort at prices that make sense for every traveler.',
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Our friendly team is always here to help, any time of day or night.',
    },
  ];

  const amenities = [
    'Fast Wi-Fi',
    'Daily housekeeping',
    'Work desk',
    '24/7 support',
    'Air conditioning',
    'Smart TV',
    'Complimentary breakfast',
    'Room service',
  ];

  return (
    <div className="overflow-hidden">
      <section className="min-h-screen relative flex items-center pt-24 lg:pt-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div ref={heroTextRef} className="order-2 lg:order-1 py-8 lg:py-0">
              <span className="hero-animate inline-block font-mono text-xs uppercase tracking-[0.12em] text-text-secondary mb-4">
                Welcome to
              </span>
              <h1 className="hero-animate font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-primary leading-[0.95] tracking-tight mb-6">
                UPRIGT
                <br />
                STAYS
              </h1>
              <p className="hero-animate text-lg text-text-secondary max-w-md mb-8 leading-relaxed">
                Looking for a peaceful and comfortable stay? You're in the right place.
                We make your stay simple and comfortable.
              </p>

              <div className="hero-animate flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-warm-orange text-warm-orange" />
                    <span className="font-semibold text-text-primary">4.8</span>
                  </div>
                  <span className="text-sm text-text-secondary">Guest Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-indigo" />
                  <span className="font-semibold text-text-primary">500+</span>
                  <span className="text-sm text-text-secondary">Happy Guests</span>
                </div>
              </div>

              <div className="hero-animate flex flex-wrap gap-4">
                <Link to="/rooms" className="btn-primary">
                  Explore Rooms
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link to="/booking" className="btn-secondary">
                  Book Your Stay
                </Link>
              </div>
            </div>

            <div ref={heroImageRef} className="order-1 lg:order-2">
              <div className="image-panel relative aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/5]">
                <img
                  src="/images/hero-lobby.jpg"
                  alt="Uprigt Stays Hotel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={featuresRef} className="py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-text-secondary mb-3 block">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              Everything You Need
            </h2>
            <p className="text-text-secondary">
              Whether you're traveling for work or relaxation, we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="w-12 h-12 rounded-xl bg-indigo/10 flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-indigo" />
                </div>
                <h3 className="font-display text-xl font-semibold text-text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={exploreRef} className="py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="explore-panel image-panel aspect-[4/5] lg:aspect-auto lg:row-span-2">
              <img
                src="/images/room-deluxe.jpg"
                alt="Deluxe Room"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="explore-panel image-panel aspect-[16/10]">
              <img
                src="/images/room-executive.jpg"
                alt="Executive Room Bathroom"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="explore-panel image-panel aspect-[16/10]">
              <img
                src="/images/gallery-seating.jpg"
                alt="Cozy Seating Area"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="mt-8">
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-text-secondary">
              Explore the stay
            </span>
          </div>
        </div>
      </section>

      <section ref={comfortRef} className="py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <div className="comfort-panel image-panel aspect-[3/4]">
                <img
                  src="/images/comfort-bed.jpg"
                  alt="Comfortable Bed"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="comfort-panel image-panel aspect-[3/4] mt-8">
                <img
                  src="/images/comfort-room.jpg"
                  alt="Spacious Room"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="comfort-text">
              <span className="font-mono text-xs uppercase tracking-[0.12em] text-text-secondary mb-4 block">
                Rooms & Suites
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
                DESIGNED FOR
                <br />
                COMFORT
              </h2>
              <p className="text-text-secondary mb-8 leading-relaxed max-w-md">
                Every room is designed to give you the comfort you deserve.
                From premium bedding to thoughtful amenities, we ensure your stay is nothing short of perfect.
              </p>
              <Link to="/rooms" className="btn-primary inline-flex">
                View All Rooms
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section ref={amenitiesRef} className="py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
                AMENITIES
                <br />
                THAT MATTER
              </h2>
              <p className="text-text-secondary mb-8 leading-relaxed max-w-md">
                We've thought of everything so you don't have to. Enjoy modern conveniences
                that make your stay seamless and enjoyable.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="amenity-item flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-indigo/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-indigo" />
                    </div>
                    <span className="text-sm text-text-primary">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 lg:gap-6">
              <div className="comfort-panel image-panel aspect-[3/4] mt-8">
                <img
                  src="/images/amenities-workspace.jpg"
                  alt="Work Space"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="comfort-panel image-panel aspect-[3/4]">
                <img
                  src="/images/amenities-detail.jpg"
                  alt="Room Details"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={locationRef} className="py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <div className="location-panel image-panel aspect-[3/4]">
                <img
                  src="/images/location-street.jpg"
                  alt="Neighborhood Street"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="location-panel image-panel aspect-[3/4] mt-8">
                <img
                  src="/images/location-reception.jpg"
                  alt="Hotel Reception"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
                PRIME LOCATION
                <br />
                EASY ACCESS
              </h2>
              <p className="text-text-secondary mb-8 leading-relaxed max-w-md">
                Close to transit, dining, and the places you need to be.
                Our central location puts you right where the action is.
              </p>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-indigo" />
                <span className="text-text-primary">123 Calm Street, Portland, OR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={stayRef} className="py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="stay-panel image-panel relative aspect-[16/9] lg:aspect-[21/9] overflow-hidden">
            <img
              src="/images/stay-stairs.jpg"
              alt="Hotel Interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center pb-12 lg:pb-16">
              <div className="text-center text-white px-4">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight">
                  YOUR STAY
                  <br />
                  STARTS HERE
                </h2>
                <Link to="/booking" className="btn-primary inline-flex">
                  Check Availability
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
