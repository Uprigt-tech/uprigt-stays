import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Check } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
        contentRef.current?.querySelectorAll('.contact-animate') || [],
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setShowDialog(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: '123 Calm Street, Portland, OR 97201',
      link: 'https://maps.google.com/?q=123+Calm+Street+Portland+OR',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 014-2200',
      link: 'tel:+15550142200',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@uprigtstays.com',
      link: 'mailto:hello@uprigtstays.com',
    },
    {
      icon: Clock,
      title: 'Hours',
      content: '7am – 10pm daily',
      link: null,
    },
  ];

  return (
    <div className="pt-24 lg:pt-32 pb-20 lg:pb-28">
      <div ref={headerRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 mb-12 lg:mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <span className="header-animate inline-block font-mono text-xs uppercase tracking-[0.12em] text-text-secondary mb-4">
            Get in Touch
          </span>
          <h1 className="header-animate font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
            WE'RE ALWAYS
            <br />
            HERE FOR YOU
          </h1>
          <p className="header-animate text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
            Need help or have questions? Don't hesitate to reach out. 
            Our friendly team is ready to assist you.
          </p>
        </div>
      </div>

      <div ref={contentRef} className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-8">
              <div className="contact-animate grid sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 bg-white rounded-2xl shadow-soft hover:shadow-soft-lg transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-full bg-indigo/10 flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-indigo" />
                    </div>
                    <h4 className="font-display font-semibold text-text-primary mb-1">
                      {item.title}
                    </h4>
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-text-secondary text-sm hover:text-indigo transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <span className="text-text-secondary text-sm">{item.content}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="contact-animate rounded-[24px] overflow-hidden shadow-soft aspect-[4/3]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178858.7417436828!2d-122.8397977128906!3d45.52306215558594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950b0b7da97427%3A0x1c36b3e8c99aa380!2sPortland%2C%20OR!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Uprigt Stays Location"
                />
              </div>

              <div className="contact-animate p-6 bg-[#25D366]/10 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-text-primary mb-2">
                      Prefer WhatsApp?
                    </h4>
                    <p className="text-text-secondary text-sm mb-4">
                      Chat with us directly for quick responses and instant booking.
                    </p>
                    <a
                      href="https://wa.me/15550142200"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white font-medium text-sm hover:bg-[#128C7E] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-animate">
              <div className="bg-white rounded-[28px] p-6 lg:p-10 shadow-card h-full">
                <h3 className="font-display text-2xl font-bold text-text-primary mb-2">
                  Send us a Message
                </h3>
                <p className="text-text-secondary mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="form-input"
                      required
                    />
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
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="How can we help you?"
                      className="form-input resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-xl flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <Check className="w-4 h-4 text-green-600" />
              </div>
              Message Sent!
            </DialogTitle>
            <DialogDescription className="text-text-secondary">
              Thank you for reaching out! We've received your message and will get back to you within 24 hours.
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

export default Contact;
