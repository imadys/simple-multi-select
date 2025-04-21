import { Button } from "@/components/ui/button";
import WowForm from "@/components/wow-form";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// meta
export const metadata = {
  title: "Simplest Multi Select for Shadcn/ui",
  description: "A simple multi select component for Shadcn/ui",
  favicon: "/imadys-icon.png",
  image: "/cover.png",
}


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-foreground p-4" style={{
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.09) 3px, transparent 3px), linear-gradient(to right, rgba(255, 255, 255, 0.09) 3px, transparent 3px)`,
      backgroundSize: `32px 32px`,
      backgroundColor: `#0a0a0a`,
    }}>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-2xl font-bold mb-3 text-center">
          Simplest Multi Select for <Link href="https://ui.shadcn.com" target="_blank" className="text-primary bg-white p-1 rounded-md">Shadcn/ui</Link>
        </h1>
        <p className="text-white text-sm lg:max-w-[600px] w-full text-center">
          A customizable multi-select dropdown built using Headless UI-style components. Ideal for selecting multiple options with visual feedback using badges.
        </p>
      </div>
      <div className="bg-white p-4 rounded-md lg:max-w-[500px] w-full mt-4">
        <WowForm />
      </div>
      <div className="flex items-center flex-wrap gap-2 mt-4 text-white text-sm">
        <Button variant={"link"} asChild>

          <Link target="_blank" href="https://imadys.me" className="text-white text-sm">
            <Image src="/imadys-icon.png" alt="imadys" width={20} height={20} />
            imadys.me</Link>
        </Button>
        <div>-</div>
        <Button variant={"link"} asChild>

          <Link target="_blank" href="https://github.com/imadys/simple-multi-select/" className="text-white text-sm">
            <Github />
            Usage and more info @ Github</Link>
        </Button>
      </div>
    </div>
  );
}
