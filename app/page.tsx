import { AuroraText } from "@/components/magicui/aurora-text";
import { Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <main>
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl text-white text-center">
          Coming <AuroraText>Soon</AuroraText>
        </h1>
      </main>
    </div>
  );
}
