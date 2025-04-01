import { AuroraText } from "@/components/magicui/aurora-text";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <main>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter  text-white text-center">
           <AuroraText>Coming Soon</AuroraText>
        </h1>
      </main>
    </div>
  );
}
