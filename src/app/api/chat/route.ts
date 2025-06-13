import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

export async function POST(req: Request) {
  const { message } = await req.json();

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: "OpenAI API key missing" },
      { status: 500 }
    );
  }

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });

    const aiMessage = completion.data.choices[0]?.message?.content || "";
    return NextResponse.json({ reply: aiMessage });
  } catch (err) {
    console.error("OpenAI error", err);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}
