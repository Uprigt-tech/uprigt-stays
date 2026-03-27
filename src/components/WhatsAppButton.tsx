import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '15550142200';
  const message = 'Hi! I would like to know more about booking a room at Uprigt Stays.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white fill-white" />
    </a>
  );
};

export default WhatsAppButton;
