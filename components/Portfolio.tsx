import React from 'react';
import SectionHeading from './SectionHeading';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'متجر الأزياء العصرية',
      category: 'SEO & Content',
      image: 'https://picsum.photos/600/400?random=2',
      result: 'زيادة الزيارات 200%',
    },
    {
      title: 'تطبيق توصيل طلبات',
      category: 'App Marketing',
      image: 'https://picsum.photos/600/400?random=3',
      result: '+10k تحميل في شهر',
    },
    {
      title: 'شركة عقارية',
      category: 'Google Ads',
      image: 'https://picsum.photos/600/400?random=4',
      result: 'مبيعات بقيمة مليون ريال',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading title="بعض من قصص النجاح" subtitle="أعمالي" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3e004a]/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[#D8E59C] text-sm font-bold mb-2">{project.category}</span>
                <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-purple-100 text-sm mb-4">{project.result}</p>
                <button className="flex items-center text-white text-sm font-semibold hover:text-[#D8E59C] transition-colors">
                  مشاهدة التفاصيل <ExternalLink size={16} className="mr-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;