"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <div className="flex items-center gap-3">
        {session.user.image && (
          <img
            src={session.user.image}
            alt={session.user.name || "Avatar"}
            className="w-8 h-8 rounded-full border border-amber-500/30"
          />
        )}
        <span className="text-amber-200/80 text-sm hidden sm:block">
          {session.user.name}
        </span>
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="px-3 py-1.5 text-xs text-rose-300 hover:text-rose-200 border border-rose-500/30 hover:border-rose-400/50 rounded transition-all duration-200"
        >
          退出登录
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn("github", { callbackUrl: "/" })}
      className="flex items-center gap-2 px-4 py-2 bg-amber-600/20 hover:bg-amber-600/30 text-amber-300 hover:text-amber-200 border border-amber-500/40 hover:border-amber-400/60 rounded-lg transition-all duration-200"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0.268.084.625.246.926.586.645.396 1.343 1.014 1.343 2.136 0 4.95-2.867 8.746-8.859 8.746-5.005 0-9.356-3.786-9.356-8.487 0-1.064.09-1.927.27-2.682 3.97.725 7.024 3.022 7.024 6.306 0 4.135-2.586 7.187-5.853 7.187-.227 0-.45-.012-.67-.034C8.884 21.006 11.2 19.862 12 19.355V22c0 .266.181.575.69.483C19.137 20.187 22 16.432 22 12.017 22 6.484 17.522 2 12 2z" />
      </svg>
      <span>GitHub 登录</span>
    </button>
  );
}
