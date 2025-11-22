import { GoogleGenAI } from "@google/genai";

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.error("API_KEY is missing from environment variables.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateSeoTip = async (businessNiche: string): Promise<string> => {
  const ai = getAiClient();
  if (!ai) return "عذراً، خدمة الذكاء الاصطناعي غير متوفرة حالياً.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are Fatima Taher, an expert SEO and Digital Marketing specialist in the Arab world. 
      A user has provided their business niche: "${businessNiche}".
      
      Please provide 3 concise, high-impact SEO or Digital Marketing tips specifically for this niche in Arabic.
      Format the output as a simple HTML unordered list (<ul><li>...</li></ul>). 
      Keep the tone professional, encouraging, and expert. 
      Do not include markdown backticks.`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 500,
      }
    });

    return response.text || "لم يتم العثور على نصيحة.";
  } catch (error) {
    console.error("Error generating SEO tip:", error);
    return "حدث خطأ أثناء توليد النصيحة. يرجى المحاولة لاحقاً.";
  }
};