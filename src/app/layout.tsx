import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI 助手",
  description: "基于 agnes-2.0-flash 的 AI 聊天助手",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased bg-[#0a0a14] text-slate-100">
        {children}
      </body>
    </html>
  );
}
