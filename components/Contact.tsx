import React from 'react';
import SectionHeading from './SectionHeading';
import Button from './Button';
import GeminiTool from './GeminiTool';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionHeading title="هل أنت جاهز للنمو؟" subtitle="تواصل معي" centered />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Info & Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#3e004a] mb-6">دعنا نبدأ العمل معاً</h3>
            
            <div className="flex flex-wrap gap-6 mb-8 text-slate-600">
              <div className="flex items-center gap-3">
                <div className="bg-purple-50 p-2 rounded-full text-[#3e004a]"><Mail size={18} /></div>
                <span>hello@fatima-taher.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-purple-50 p-2 rounded-full text-[#3e004a]"><Phone size={18} /></div>
                <span dir="ltr">+966 50 000 0000</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-purple-50 p-2 rounded-full text-[#3e004a]"><MapPin size={18} /></div>
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">الاسم</label>
                  <input type="text" className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#3e004a] focus:border-transparent outline-none transition-all" placeholder="اسمك الكامل" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">البريد الإلكتروني</label>
                  <input type="email" className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#3e004a] focus:border-transparent outline-none transition-all" placeholder="example@domain.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">نوع الخدمة</label>
                <select className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#3e004a] focus:border-transparent outline-none transition-all bg-white">
                  <option value="">اختر الخدمة المطلوبة</option>
                  <option value="seo">تحسين محركات البحث (SEO)</option>
                  <option value="ads">إدارة إعلانات</option>
                  <option value="content">تسويق المحتوى</option>
                  <option value="consultation">استشارة عامة</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">رسالتك</label>
                <textarea rows={4} className="w-full p-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#3e004a] focus:border-transparent outline-none transition-all" placeholder="أخبرني المزيد عن مشروعك..."></textarea>
              </div>
              <Button type="submit" className="w-full">إرسال الرسالة</Button>
            </form>

            <div className="mt-8 flex gap-4 justify-center">
              <a href="#" className="text-slate-400 hover:text-[#3e004a] transition-colors"><Linkedin size={24} /></a>
              <a href="#" className="text-slate-400 hover:text-[#3e004a] transition-colors"><Instagram size={24} /></a>
            </div>
          </div>

          {/* AI Tool Side */}
          <div className="lg:col-span-5">
             <GeminiTool />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;