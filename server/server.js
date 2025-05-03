import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { OpenAI } from "openai";
import { buildSystemPrompt } from "./promptBuilder.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/api/generate", async (req, res) => {
  const { prompt, ticketType, includeAC, includeTesting, detailLevel } =
    req.body;

  const systemPrompt = buildSystemPrompt({
    ticketType,
    includeAC,
    includeTesting,
    detailLevel,
  });

  try {
    const chatResponse = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: prompt },
      ],
      temperature: 0.3,
    });

    const description =
      chatResponse.choices[0]?.message?.content || "No description generated.";
    res.json({ description });
  } catch (error) {
    console.error("OpenAI error:", error);
    res.status(500).json({ error: "Failed to generate description." });
  }
});

app.listen(3000, () => {
  console.log("API server running on http://localhost:3000");
});
