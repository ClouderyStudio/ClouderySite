import { HoverEffectBackground } from "@/components/hovereffect";
import Image from "next/image";

export default function Team() {
  return (
<div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
<main>
  <h1 className="text-4xl font-bold text-center">团队介绍</h1>
  <ol className="text-sm/6 text-center font-[family-name:var(--font-geist-mono)]">
    <li className="mb-2 tracking-[-.01em]">
      云术工作室的团队成员。
    </li>
  </ol>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="flex flex-col items-center">
      <Image
        src="https://api.mmp.cc/api/qqavatar?qq=2675256772"
        alt="qiyi"
        width={200}
        height={200}
        className="rounded-full"
      />
      <h2 className="text-lg font-bold mt-4">柒屹</h2>
      <p className="text-sm text-center">创始人</p>
    </div>
    <div className="flex flex-col items-center">
      <Image
        src="https://api.mmp.cc/api/qqavatar?qq=2457483710"
        alt="yz"
        width={200}
        height={200}
        className="rounded-full"
      />
      <h2 className="text-lg font-bold mt-4">云竹</h2>
      <p className="text-sm text-center">创始人
      </p>
    </div>
    <div className="flex flex-col items-center">
      <Image
        src="https://api.mmp.cc/api/qqavatar?qq=953595252"
        alt="xinnian"
        width={200}
        height={200}
        className="rounded-full"
      />
      <h2 className="text-lg font-bold mt-4">信念</h2>
      <p className="text-sm text-center">成员</p>
    </div>
    </div>
  </main>
  </div>
  );
}
