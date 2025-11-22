import React, { useState } from 'react';
import { generateSeoTip } from '../services/geminiService';
import { Sparkles, Send, Loader2 } from 'lucide-react';

const GeminiTool: React.FC = () => {
  const [niche, setNiche] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!niche.trim()) return;

    setLoading(true);
    setResult(null);
    
    const tip = await generateSeoTip(niche);
    setResult(tip);
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-br from-[#3e004a] to-[#2a0033] rounded-2xl p-8 text-white shadow-2xl h-full flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-white/10 p-2 rounded-lg">
          <Sparkles className="text-[#D8E59C] w-6 h-6" />
        </div>
        <div>
          <h3 className="font-bold text-xl">مستشارك الذكي لـ SEO</h3>
          <p className="text-purple-200 text-xs">مدعوم بواسطة Google Gemini AI</p>
        </div>
      </div>

      <p className="text-purple-100 mb-6 text-sm leading-relaxed">
        أدخل مجال عملك (مثل: مطعم، متجر عطور، عيادة أسنان) وسأقوم بتوليد 3 نصائح تسويقية مخصصة لك فوراً.
      </p>

      <form onSubmit={handleGenerate} className="relative mb-6">
        <input
          type="text"
          value={niche}
          onChange={(e) => setNiche(e.target.value)}
          placeholder="اكتب مجال عملك هنا..."
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-[#D8E59C] transition-all"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !niche}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#D8E59C] text-[#3e004a] p-1.5 rounded-md hover:bg-[#c5d680] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5 transform rotate-180" />}
        </button>
      </form>

      {result && (
        <div className="bg-white/10 rounded-xl p-4 border border-white/10 animate-fade-in flex-grow overflow-y-auto max-h-64 custom-scrollbar">
          <h4 className="font-bold text-[#D8E59C] mb-2 text-sm">النصائح المقترحة:</h4>
          <div 
            className="prose prose-invert prose-sm text-purple-50"
            dangerouslySetInnerHTML={{ __html: result }}
          />
        </div>
      )}
    </div>
  );
};

export default GeminiTool;