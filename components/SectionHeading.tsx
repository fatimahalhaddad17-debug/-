import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-right'}`}>
      {subtitle && (
        <span className="text-[#3e004a]/70 font-bold text-sm tracking-wider uppercase mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-[#3e004a] mb-4">
        {title}
      </h2>
      <div className={`h-1.5 w-20 bg-[#D8E59C] rounded-full ${centered ? 'mx-auto' : 'ms-0'}`}></div>
    </div>
  );
};

export default SectionHeading;