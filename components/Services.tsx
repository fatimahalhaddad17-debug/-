import React from 'react';
import SectionHeading from './SectionHeading';
import { Search, BarChart2, PenTool, Megaphone, Target, Smartphone } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8 text-[#D8E59C]" />,
      title: 'تحسين محركات البحث (SEO)',
      description: 'رفع ترتيب موقعك في الصفحة الأولى من جوجل وزيادة الزيارات العضوية المجانية.',
    },
    {
      icon: <Megaphone className="w-8 h-8 text-[#D8E59C]" />,
      title: 'إدارة الحملات الإعلانية',
      description: 'إدارة حملات Google Ads و فيسبوك و انستجرام لتحقيق أعلى عائد على الاستثمار.',
    },
    {
      icon: <PenTool className="w-8 h-8 text-[#D8E59C]" />,
      title: 'تسويق المحتوى',
      description: 'كتابة محتوى إبداعي وتسويقي يجذب الجمهور ويبني هوية قوية لعلامتك التجارية.',
    },
    {
      icon: <BarChart2 className="w-8 h-8 text-[#D8E59C]" />,
      title: 'التحليل والتقارير',
      description: 'مراقبة الأداء وتحليل البيانات لتقديم رؤى دقيقة تساعد في اتخاذ القرارات الصحيحة.',
    },
    {
      icon: <Target className="w-8 h-8 text-[#D8E59C]" />,
      title: 'استراتيجيات التسويق',
      description: 'بناء خطط تسويقية متكاملة تناسب أهدافك وميزانيتك وتستهدف جمهورك بدقة.',
    },
    {
      icon: <Smartphone className="w-8 h-8 text-[#D8E59C]" />,
      title: 'إدارة منصات التواصل',
      description: 'إدارة كاملة لحساباتك على السوشيال ميديا من النشر وحتى الرد على العملاء.',
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionHeading title="كيف يمكنني مساعدتك؟" subtitle="خدماتي" centered />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg bg-[#3e004a] transform group-hover:rotate-6 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#3e004a] mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;