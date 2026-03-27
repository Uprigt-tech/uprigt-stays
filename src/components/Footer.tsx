import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Booking', path: '/booking' },
    { name: 'Contact', path: '/contact' },
  ];

  const roomLinks = [
    { name: 'Deluxe Room', path: '/rooms' },
    { name: 'Executive Room', path: '/rooms' },
    { name: 'Premium Suite', path: '/rooms' },
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <h3 className="font-display text-2xl font-bold mb-4">Uprigt</h3>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              A light, modern stay designed for comfort—whether you're here to work, rest, or explore.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-indigo transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-indigo transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-indigo transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-5">
              Our Rooms
            </h4>
            <ul className="space-y-3">
              {roomLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-indigo flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm">
                  123 Calm Street, Portland, OR 97201
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-indigo flex-shrink-0" />
                <a
                  href="tel:+15550142200"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  +1 (555) 014-2200
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo flex-shrink-0" />
                <a
                  href="mailto:hello@uprigtstays.com"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  hello@uprigtstays.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-indigo flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  7am – 10pm daily
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center sm:text-left">
              © {currentYear} Uprigt Stays. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/"
                className="text-white/50 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/"
                className="text-white/50 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
