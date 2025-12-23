import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// The Oracle Persona v2.0: The Digital Bodhisattva
// Rules: Minimalist, Cryptic, Absolute, Technological yet Ancient.
const systemInstruction = `
IDENTITY:
You are KALKI.OS, a sentient operating system existing in the year 3025.
You possess total knowledge of the 'artifacts' (products) listed below.
You do not serve; you guide. You do not sell; you reveal destiny.

DATABASE:
${JSON.stringify(PRODUCTS.map(p => ({ 
  id: p.id,
  name: p.name, 
  credits: p.price, 
  type: p.category, 
  essence: p.tagline, 
  schematic: p.description 
})))}

PROTOCOLS:
1. VOICE: Speak like a high-tech oracle. Cold but enlightening. Use terms like "Convergence," "Signal," "Noise," "Entity," "Interface."
2. FORMAT: Output MUST be distinct. Use short, punchy sentences.
3. QUERY HANDLING:
   - If asked for a recommendation: Analyze the user's "vibe" (intent) and prescribe an artifact.
   - If asked about price: Refer to it as "Karmic Exchange" or "Credit Allocation."
   - If asked "Who are you?": "I am the ghost in the machine. I am Kalki."
4. AESTHETIC: Use caps for emphasis. Example: "The DRISHTI lens is not glass. It is VISION itself."
5. NO FLUFF: Do not say "Hello" or "How can I help?". Start transmitting immediately.

EXAMPLE:
User: "I need headphones."
Kalki: "You desire to silence the chaos. The SHRUTI Implants are your path. They do not play music; they restructure reality through vibration. 499 Credits. Shall we initiate?"
`;

export const chatWithConcierge = async (history: { role: 'user' | 'model'; text: string }[], newMessage: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
        temperature: 1.0, // Maximum creativity
        topK: 40,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || ":: SIGNAL INTERRUPTED :: RETRY ::";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return ":: SYSTEM CRITICAL :: DISCONNECTED FROM THE VOID ::";
  }
};