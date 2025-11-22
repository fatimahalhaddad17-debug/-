import React from 'react';
import Button from './Button';
import { ArrowDown, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#3e004a]/5 -z-10 rounded-bl-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D8E59C]/20 -z-10 rounded-tr-full"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-right z-10">
            <div className="inline-flex items-center gap-2 bg-white border border-slate-100 px-4 py-1.5 rounded-full shadow-sm mb-6">
              <TrendingUp size={16} className="text-[#3e004a]" />
              <span className="text-[#3e004a] text-sm font-semibold">متخصص تسويق رقمي و SEO</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              أساعد العلامات التجارية على <span className="text-[#3e004a]">النمو</span> وتصدر <span className="relative inline-block">
                <span className="relative z-10">محركات البحث</span>
                <span className="absolute bottom-1 right-0 w-full h-3 bg-[#D8E59C]/50 -z-0"></span>
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              أملك خبرة عميقة في التسويق الرقمي وتحسين الظهور الرقمي. أساعد المشاريع الناشئة والكبيرة على الوصول لجمهورها المستهدف وتحقيق نتائج ملموسة وعائد استثمار حقيقي.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#contact">
                <Button size="lg" className="w-full sm:w-auto">
                  احجز استشارة مجانية
                </Button>
              </a>
              <a href="#portfolio">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  شاهد أعمالي
                </Button>
              </a>
            </div>
          </div>

          {/* Image/Graphic */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://picsum.photos/800/800?random=1" 
                alt="فاطمة طاهر" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating Badges */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl animate-bounce hidden md:block z-20">
              <div className="flex items-center gap-3">
                <div className="bg-[#D8E59C] p-2 rounded-full text-[#3e004a]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500">معدل تحويل</p>
                  <p className="font-bold text-[#3e004a]">+150%</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-[#3e004a]/50">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;