import OpenAI from "openai";

let client: OpenAI | null = null;

/**
 * Build the OpenRouter client only when a key exists.
 * Constructing `new OpenAI()` at import time throws during `next build`
 * if OPENROUTER_API_KEY / OPENAI_API_KEY are unset.
 */
export function getOpenRouterClient(): OpenAI | null {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) return null;
  if (!client) {
    client = new OpenAI({
      apiKey,
      baseURL: "https://openrouter.ai/api/v1",
    });
  }
  return client;
}
