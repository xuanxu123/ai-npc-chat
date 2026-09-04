#!/bin/bash
# AI NPC 聊天网站 - 一键部署脚本

echo "======================================"
echo "  AI NPC 聊天网站 - 部署脚本"
echo "======================================"
echo ""

# 检查是否在项目目录
if [ ! -f "package.json" ]; then
    echo "错误：请在项目目录运行此脚本"
    echo "项目目录：D:\\game"
    exit 1
fi

echo "1. 清理旧锁文件..."
rm -f .git/index.lock
rm -f .git/HEAD.lock

echo "2. 初始化 Git..."
git init 2>/dev/null
git add . 2>/dev/null
git commit -m "Initial commit" 2>/dev/null

echo "3. 创建 GitHub 仓库..."
echo "   （请手动在 GitHub 创建仓库: https://github.com/new）"

echo ""
echo "4. 推送代码到 GitHub..."
echo "   请手动运行："
echo "   git remote add origin https://github.com/xuanxu123/ai-npc-chat.git"
echo "   git push -u origin main"

echo ""
echo "======================================"
echo "  部署完成！"
echo "======================================"
echo ""
echo "GitHub 仓库：https://github.com/$USER/$REPO"
echo ""
echo "下一步：部署到 Vercel"
echo "1. 打开 https://vercel.com/new"
echo "2. 点击 'Log in with GitHub'"
echo "3. 选择 '$REPO' 仓库"
echo "4. 添加环境变量："
echo "   - ANTHROPIC_API_KEY = (在 Vercel 后台设置)"
echo "   - NEXTAUTH_SECRET = mysecret123"
echo "5. 点击 Deploy"
echo ""
echo "部署成功后，你会得到一个链接，发给别人就能访问了！"
