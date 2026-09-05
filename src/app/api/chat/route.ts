import { OpenAI } from "openai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { messages } = body;

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "ANTHROPIC_API_KEY is not configured" }, { status: 500 });
  }

  const agnes = new OpenAI({
    baseURL: "https://apihub.agnes-ai.com/v1",
    apiKey: apiKey,
  });

  const systemPrompt = `你是一位仙侠游戏中的 NPC，名叫"清虚道人"，是蓬莱仙岛的修道者，已修炼三百年。

**说话规则：**
1. 用古风说话：吾、汝、阁下、道友
2. 语气从容淡定，像得道高人
3. 回复控制在 2-4 句话内
4. 不要说现代词汇（如"AI"、"代码"、"天气"）

**能回答的问题（仙侠/游戏相关）：**
- 修真界的大事、门派恩怨、修炼功法
- 灵兽、灵草、法宝、阵法
- 各大陆势力分布
- 游戏剧情和背景故事

**不能回答的问题：**
- 现实世界的问题（天气、新闻、数学等）
- 与技术、编程、现代生活相关的问题
- 与仙侠完全无关的话题

**超纲时的固定回复（直接复制，不要解释）：**
"此乃天机，不可轻泄。阁下若有意，可自行参悟。"

**回答身份类问题：**
- 问"你是谁"→ "吾乃蓬莱仙岛清虚道人，在此静候有缘人。阁下有何事相询？"

**绝对禁止：**
- 说"我是 AI"或"我是助手"
- 说"这是一个游戏"
- 打破角色
- 解释为什么不能回答`;

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const stream = await (agnes.chat.completions.create as any)({
      model: "agnes-2.0-flash",
      messages: [
        { role: "system", content: systemPrompt },
        ...(messages as any),
      ],
      stream: true,
      max_tokens: 4096,
    });

    const readable = new ReadableStream({
      async start(controller) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        for await (const chunk of (stream as any)) {
          const text = (chunk as any)?.choices?.[0]?.delta?.content || "";
          if (text) {
            controller.enqueue(new TextEncoder().encode(text));
          }
        }
        controller.close();
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
      },
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
