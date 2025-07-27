import Image from "next/image";
import { Textarea } from "@/components/ui/textarea"
export default function Home() {
  return (
    <main className="h-screen w-full">

      <Textarea placeholder="Type your message here." className="w-full h-full border-none rounded-none text-2xl" />

    </main>
  );
}
