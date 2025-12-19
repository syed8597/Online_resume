import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, User } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';


export default function ContactInfo() {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Tailwind lg breakpoint ~1024px
    };

    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define contacts array
  const contacts = [
    {
      icon: Mail,
      text: 'haneefsyed0000@gmail.com',
      href: isMobile
        ? 'mailto:haneefsyed0000@gmail.com'
        : 'https://mail.google.com/mail/?view=cm&to=haneefsyed0000@gmail.com',
      label: 'Send email'
    },
    {
      icon: FaWhatsapp,
      text: '+92 3408519529',
      href: 'https://wa.me/923408519529',
      label: 'Message on WhatsApp'
    },
    {
      icon: Phone,
      text: '+92 3408519529',
      href: 'tel:+923408519529',
      label: 'Call phone'
    },
    {
      icon: MapPin,
      text: 'Gulberg III Lahore, Punjab Pakistan',
      href: 'https://www.google.com/maps/search/?api=1&query=Gulberg+III+Lahore+Punjab+Pakistan',
      label: 'View on map'
    }
  ];

  return (
    <section className="mb-8">
      <h3 className="text-emerald-400 font-semibold mb-4 flex items-center gap-2">
        <User size={18} />
        Contact
      </h3>
      <div className="space-y-3">
        {contacts.map((contact, index) => {
          const Icon = contact.icon;
          return (
            <a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={contact.label}
              className="flex items-center gap-3 text-sm hover:text-emerald-400 transition-colors cursor-pointer"
            >
              <Icon size={16} className="text-emerald-400" />
              <span>{contact.text}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
