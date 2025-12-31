
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async askAssistant(question: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: question,
        config: {
          systemInstruction: "You are an AI assistant for Nihad's professional portfolio. Nihad is a senior programmer and web developer focused on luxury, high-end web solutions. Answer questions about his skills (React, Node, TS), experience, and projects professionally and concisely. Keep it classy and elegant.",
          temperature: 0.7,
        },
      });
      return response.text;
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I'm currently resting. Please feel free to reach out to Nihad directly via the contact form!";
    }
  }
}

export const gemini = new GeminiService();
