import React from 'react';
import SectionHeading from './SectionHeading';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '+5', label: 'سنوات خبرة' },
    { number: '+50', label: 'مشروع ناجح' },
    { number: '+20', label: 'عميل سعيد' },
  ];

  const skills = [
    'استراتيجيات تحسين محركات البحث (SEO)',
    'التسويق عبر وسائل التواصل الاجتماعي',
    'كتابة المحتوى الإعلاني والتسويقي',
    'تحليل البيانات و Google Analytics',
    'إدارة الحملات الممولة (PPC)',
    'تحسين تجربة المستخدم (UX)'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading title="من هي فاطمة؟" subtitle="نبذة عني" />
        
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/2">
            <p className="text-lg text-slate-700 leading-loose mb-6">
              شغفي هو تحويل الأفكار إلى نتائج رقمية ملموسة. بصفتي متخصصة في التسويق الرقمي و SEO، أساعد العلامات التجارية على تصدر محركات البحث وبناء هوية قوية.
            </p>
            <p className="text-lg text-slate-700 leading-loose mb-8">
              لا أكتفي بالتنفيذ، بل أصمم استراتيجيات نمو ذكية تعتمد على البيانات لضمان الوصول للجمهور المستهدف وتعظيم العائد على الاستثمار. هدفي هو نجاح مشروعك المستدام.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-[#3e004a] flex-shrink-0" />
                  <span className="text-slate-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-3 gap-4 text-center bg-[#3e004a] rounded-2xl p-8 text-white shadow-xl">
              {stats.map((stat, index) => (
                <div key={index} className="p-4">
                  <h3 className="text-4xl font-bold text-[#D8E59C] mb-2">{stat.number}</h3>
                  <p className="text-purple-200 text-sm sm:text-base">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-[#D8E59C]/10 p-6 rounded-xl border border-[#D8E59C]/20">
              <h4 className="font-bold text-[#3e004a] mb-4">لماذا تختارني؟</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                التزامي لا يتوقف عند تنفيذ المهام، بل أعمل كشريك نجاح حقيقي لمشروعك. أقدم تقارير شفافة، وتواصل مستمر، واستراتيجيات مفصلة خصيصاً لأهدافك.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;