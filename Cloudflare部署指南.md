# 部署到 Cloudflare Pages

## 前置条件

1. 确保已有 Cloudflare 账号：https://dash.cloudflare.com/sign-up
2. 在 https://console.agnes-ai.com 获取你的 API Key

## 第一步：创建 Cloudflare Pages 项目

1. 打开 https://dash.cloudflare.com/pages
2. 点击 **Create a project** → **Connect to Git**
3. 选择 GitHub 账号，找到 `xuanxu123/ai-npc-chat` 仓库
4. 点击 **Begin setup**

## 第二步：配置构建设置

| 配置项 | 值 |
|--------|-----|
| Project name | `ai-npc-chat`（或自定义） |
| Production branch | `main` |
| Build command | `npm run build:cf` |
| Build output directory | `.open-next` |
| Root directory | （留空） |

**环境变量**（在 Pages 设置中添加）：
```
ANTHROPIC_API_KEY = sk-你的AgnesAI密钥
```

点击 **Save and Deploy**。

## 第三步：完成部署

等待构建完成（约 2-3 分钟），访问你的站点：
```
https://ai-npc-chat.xuanxu123.pages.dev
```

## 自定义域名（可选）

在 **Domains** 设置中添加你自己的域名。

## 本地测试

```bash
cd D:\game
npm run build:cf
npx wrangler dev --port=8787
```

然后访问 http://localhost:8787

## 常见问题

### 构建失败

检查 `ANTHROPIC_API_KEY` 是否已正确设置。

### 聊天无响应

检查浏览器控制台，确认 API Key 有效。
如需更新 API Key，在 Cloudflare Pages → Settings → Environment Variables 中修改。
