"use client";

import { useState } from "react";

export default function AuthButton() {
  const [isLogged, setIsLogged] = useState(false);

  useState(() => {
    setIsLogged(localStorage.getItem("isLoggedIn") === "true");
  });

  if (isLogged) {
    return (
      <button
        onClick={() => {
          localStorage.removeItem("isLoggedIn");
          window.location.reload();
        }}
        className="px-3 py-1.5 text-xs text-rose-300 hover:text-rose-200 border border-rose-500/30 hover:border-rose-400/50 rounded transition-all duration-200"
      >
        退出登录
      </button>
    );
  }

  return (
    <button
      onClick={() => {
        const pwd = prompt("请输入密码：");
        if (pwd === "admin123") {
          localStorage.setItem("isLoggedIn", "true");
          window.location.reload();
        } else if (pwd !== null) {
          alert("密码错误");
        }
      }}
      className="flex items-center gap-2 px-4 py-2 bg-amber-600/20 hover:bg-amber-600/30 text-amber-300 hover:text-amber-200 border border-amber-500/40 hover:border-amber-400/60 rounded-lg transition-all duration-200"
    >
      <span>登录</span>
    </button>
  );
}
