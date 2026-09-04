import Chat from "@/components/Chat";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a14] flex flex-col">
      <header className="border-b border-slate-800/60 px-6 py-3 flex items-center justify-between bg-[#0a0a14]/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <span className="text-xl">🤖</span>
          <span className="text-amber-200/90 font-semibold text-sm tracking-wide">
            AI 助手
          </span>
          <span className="text-slate-600 text-xs hidden sm:inline">| agnes-2.0-flash</span>
        </div>
      </header>
      <main className="flex-1 flex flex-col max-w-3xl w-full mx-auto">
        <Chat />
      </main>
    </div>
  );
}
