"use client";

export default function LogoutBtn() {
  return (
    <button
      onClick={() => {
        localStorage.removeItem("isLoggedIn");
        window.location.reload();
      }}
      className="px-3 py-1.5 text-xs text-rose-300 hover:text-rose-200 border border-rose-500/30 rounded transition-all"
    >
      退出
    </button>
  );
}
