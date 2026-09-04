# AI 助手 - NPC 聊天网站

基于 agnes-2.0-flash 的仙侠游戏 NPC 聊天网站。

## 本地运行

```bash
cd D:\game
npm install
npm run dev
```

然后打开 http://localhost:3000

## 环境变量

复制 `.env.local` 并填入你的 API Key：

```
ANTHROPIC_API_KEY=你的AgnesAI密钥
NEXTAUTH_SECRET=随机字符串（用于安全）
```

## 部署到 Vercel

详见 [部署教程.md](./部署教程.md)
