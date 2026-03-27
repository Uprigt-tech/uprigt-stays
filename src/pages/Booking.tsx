import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Users, Home, Phone, User, MessageCircle, Check, Shield, Clock, Star } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

gsap.registerPlugin(ScrollTrigger);

const Booking = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState({ title: '', description: '' });
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    roomType: '',
    guests: '2',
    message: '',
  });

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
        formRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.checkIn || !formData.checkOut || !formData.roomType) {
      setDialogMessage({
        title: 'Missing Information',
        description: 'Please fill in all required fields.',
      });
      setShowDialog(true);
      return;
    }

    setDialogMessage({
      title: 'Booking Request Received!',
      description: `Thank you, ${formData.name}! We've received your booking request for a ${formData.roomType} from ${formData.checkIn} to ${formData.checkOut}. Our team will contact you shortly at ${formData.phone} to confirm your reservation.`,
    });
    setShowDialog(true);
    
    setFormData({
      name: '',
      phone: '',
      email: '',
      checkIn: '',
      checkOut: '',
      roomType: '',
      guests: '2',
      message: '',
    });
  };

  const handleWhatsAppBooking = () => {
    const phoneNumber = '15550142200';
    const message = `Hi! I'd like to book a room at Uprigt Stays.

Name: ${formData.name || '[Your Name]'}
Phone: ${formData.phone || '[Your Phone]'}
Check-in: ${formData.checkIn || '[Date]'}
Check-out: ${formData.checkOut || '[Date]'}
Room Type: ${formData.roomType || '[Room Type]'}
Guests: ${formData.guests}

Please let me know about availability. Thank you!`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const benefits = [
    { icon: Shield, text: 'Best rate guarantee' },
    { icon: Clock, text: 'Free cancellation' },
    { icon: Star, text: 'Instant confirmation' },
  ];

  const roomTypes = [
    { value: 'deluxe', label: 'Deluxe Room - $129/night' },
    { value: 'executive', label: 'Executive Room - $189/night' },
    { value: 'premium', label: 'Premium Suite - $299/night' },
  ];

  return (
    <div className="pt-24 lg:pt-32 pb-20 lg:pb-28">
      <div ref={headerRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 mb-12 lg:mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <span className="header-animate inline-block font-mono text-xs uppercase tracking-[0.12em] text-text-secondary mb-4">
            Reserve Your Stay
          </span>
          <h1 className="header-animate font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
            BOOK YOUR
            <br />
            ROOM
          </h1>
          <p className="header-animate text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
            Just share your dates — we'll take care of everything. 
            Our team will confirm your booking quickly.
          </p>
        </div>
      </div>

      <div ref={formRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-32">
                <h3 className="font-display text-xl font-semibold text-text-primary mb-6">
                  Why Book Direct?
                </h3>
                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-indigo/10 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-indigo" />
                      </div>
                      <span className="text-text-primary">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                <div className="p-6 bg-soft-beige/50 rounded-2xl">
                  <h4 className="font-display font-semibold text-text-primary mb-3">
                    Need Help?
                  </h4>
                  <p className="text-text-secondary text-sm mb-4">
                    Our reservations team is available 24/7 to assist you with your booking.
                  </p>
                  <a
                    href="tel:+15550142200"
                    className="flex items-center gap-2 text-indigo font-medium hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    +1 (555) 014-2200
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-[28px] p-6 lg:p-10 shadow-card">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="form-input pl-12"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="form-input pl-12"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="form-input"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        Check-in Date *
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                        <input
                          type="date"
                          name="checkIn"
                          value={formData.checkIn}
                          onChange={handleChange}
                          className="form-input pl-12"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        Check-out Date *
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                        <input
                          type="date"
                          name="checkOut"
                          value={formData.checkOut}
                          onChange={handleChange}
                          className="form-input pl-12"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        Room Type *
                      </label>
                      <div className="relative">
                        <Home className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                        <select
                          name="roomType"
                          value={formData.roomType}
                          onChange={handleChange}
                          className="form-input pl-12 appearance-none"
                        >
                          <option value="">Select a room</option>
                          {roomTypes.map((room) => (
                            <option key={room.value} value={room.value}>
                              {room.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        Number of Guests
                      </label>
                      <div className="relative">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
                        <select
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          className="form-input pl-12 appearance-none"
                        >
                          <option value="1">1 Guest</option>
                          <option value="2">2 Guests</option>
                          <option value="3">3 Guests</option>
                          <option value="4">4 Guests</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Special Requests
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Any special requests or notes..."
                      className="form-input resize-none"
                    />
                  </div>

                  <div className="space-y-4 pt-4">
                    <button type="submit" className="btn-primary w-full justify-center">
                      <Check className="w-4 h-4 mr-2" />
                      Confirm Booking
                    </button>
                    
                    <button
                      type="button"
                      onClick={handleWhatsAppBooking}
                      className="w-full py-3 px-6 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#128C7E] hover:shadow-lg"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Book via WhatsApp
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">{dialogMessage.title}</DialogTitle>
            <DialogDescription className="text-text-secondary">
              {dialogMessage.description}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <button
              onClick={() => setShowDialog(false)}
              className="btn-primary w-full"
            >
              Got it
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Booking;
