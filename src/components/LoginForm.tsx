"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    // 如果已经登录，直接跳转
    if (localStorage.getItem("isLoggedIn") === "true") {
      router.push("/");
    }
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/");
    } else {
      setError("密码错误");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a14] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-6xl mb-6">🤖</div>
        <h1 className="text-3xl font-bold text-amber-200 mb-2">AI 助手</h1>
        <p className="text-slate-400 mb-8">请输入密码以使用 AI 对话功能</p>
        <form onSubmit={handleSubmit} className="max-w-xs mx-auto">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="输入密码..."
            className="w-full px-4 py-3 bg-slate-800/60 border border-slate-600/50 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500/50 mb-3 text-center"
            autoFocus
          />
          {error && <p className="text-rose-400 text-sm mb-3">{error}</p>}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-amber-600/20 hover:bg-amber-600/30 text-amber-200 border border-amber-500/40 rounded-xl transition-all duration-200"
          >
            登录
          </button>
        </form>
        <p className="text-slate-600 text-xs mt-6">默认密码：admin123</p>
      </div>
    </div>
  );
}
