import { Clock } from "@/components/clock";
import { HoverEffectBackground } from "@/components/hovereffect";
import { TypingText } from "@/components/typingtext";
import { get } from "@/lib/utils";

export default function Page() {
  return (
    <HoverEffectBackground darkbackground="#1e293b" lightbackground="#f1f5f9">
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)] bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] 
bg-[size:44px_44px]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Clock/>
        <TypingText
        text="云术工作室"
        waitTime={2000}
        alwaysVisibleCount={0}
        className="text-5xl font-bold text-gradient"
      />
        <ol className="text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <li className="mb-2 tracking-[-.01em]">
            欢迎来到这里，休息一下吧。或使用文档站和导航栏开始你的探索之旅。
          </li>
          <li className="mb-2 tracking-[-.01em]">
            {get("https://v1.hitokoto.cn").then((res) => res.hitokoto + " ——" + res.from)}
          </li>
        </ol>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://doc.cldery.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            文档站
          </a>
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://doc.cldery.com/team.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            成员列表
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nav.cldery.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            导航站
          </a>
        </div>
      </main>
    </div>
    </HoverEffectBackground>
  );
}
