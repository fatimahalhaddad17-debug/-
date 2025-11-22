import React from 'react';
import SectionHeading from './SectionHeading';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'سارة الأحمد',
      role: 'مديرة تسويق - شركة أزياء',
      text: 'تعاملت مع الكثير من المسوقين، لكن فاطمة تتميز بالفهم العميق للسوق السعودي. النتائج كانت مبهرة وزادت مبيعاتنا بنسبة 40% خلال 3 أشهر.',
    },
    {
      name: 'خالد العمري',
      role: 'رائد أعمال',
      text: 'خدمة تحسين محركات البحث نقلت موقعي من الصفحة العاشرة إلى الثلاث نتائج الأولى. أنصح بالتعامل معها بشدة لأي شخص يبحث عن الاحترافية.',
    },
    {
      name: 'مريم الكعبي',
      role: 'صاحبة متجر إلكتروني',
      text: 'استراتيجية المحتوى التي وضعتها فاطمة غيرت طريقة تفاعل الجمهور معنا تماماً. شكراً لك على هذا الإبداع والتفاني في العمل.',
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading title="ماذا يقول العملاء؟" subtitle="شهادات" centered />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-2xl relative border border-slate-100 hover:shadow-lg transition-shadow">
              <Quote className="absolute top-6 left-6 text-[#D8E59C]/50 w-10 h-10 transform rotate-180" />
              <p className="text-slate-700 leading-relaxed mb-6 relative z-10">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#3e004a]/10 flex items-center justify-center text-[#3e004a] font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#3e004a] text-sm">{review.name}</h4>
                  <p className="text-slate-500 text-xs">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;