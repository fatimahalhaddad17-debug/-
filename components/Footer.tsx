import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3e004a] text-white py-8 border-t border-purple-900">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-2 font-medium">جميع الحقوق محفوظة &copy; {new Date().getFullYear()} فاطمة طاهر</p>
        <p className="text-purple-300 text-sm flex items-center justify-center gap-1">
          صمم بحب <Heart size={14} className="text-[#D8E59C] fill-[#D8E59C]" /> للتسويق الرقمي
        </p>
      </div>
    </footer>
  );
};

export default Footer;