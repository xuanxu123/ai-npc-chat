export default function AuthError() {
  return (
    <div className="min-h-screen bg-[#0a0a14] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-5xl mb-4">😅</div>
        <h1 className="text-xl font-bold text-rose-300 mb-2">登录失败</h1>
        <p className="text-slate-400 mb-6">无法完成 GitHub 授权，请重试</p>
        <a
          href="/api/auth/signin"
          className="inline-flex px-5 py-2.5 bg-amber-600/20 hover:bg-amber-600/30 text-amber-200 border border-amber-500/40 rounded-xl transition-all"
        >
          重新登录
        </a>
      </div>
    </div>
  );
}
