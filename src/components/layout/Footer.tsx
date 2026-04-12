import Link from "next/link";
import { MapPin, Mail, Phone, Globe, MessageCircle, Share2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#1A1A2E] text-white pt-20 pb-10 border-t border-white/10" id="contact">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#1F4E9E] to-[#4A90D9] flex items-center justify-center text-white font-bold text-xl">
                E
              </div>
              <span className="font-bold text-2xl tracking-tight">EPHAD Academy</span>
            </Link>
            <p className="text-white/60 max-w-md mb-8 leading-relaxed">
              Empowering the digital generation through practical, hands-on technical education in Kubwa, Abuja.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Globe size={20} className="text-white/80" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <MessageCircle size={20} className="text-white/80" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Share2 size={20} className="text-white/80" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-white/60 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#courses" className="text-white/60 hover:text-white transition-colors">Our Courses</Link></li>
              <li><Link href="#testimonials" className="text-white/60 hover:text-white transition-colors">Student Success</Link></li>
              <li><Link href="#faq" className="text-white/60 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin size={20} className="mt-1 flex-shrink-0 text-[#4A90D9]" />
                <span>Kubwa, Abuja, Nigeria</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Phone size={20} className="flex-shrink-0 text-[#4A90D9]" />
                <span>+234 (0) 800 000 0000</span>
              </li>
              <li className="flex items-center gap-3 text-white/60">
                <Mail size={20} className="flex-shrink-0 text-[#4A90D9]" />
                <span>hello@ephad.edu.ng</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} EPHAD ICT Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white/80">Privacy Policy</Link>
            <Link href="#" className="hover:text-white/80">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
