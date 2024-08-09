import Image from "next/image";
import Heading from "./_components/Heading";

/* 
      "check-background":
        "linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
*/

export default function Home() {
  return (
    <main className="w-[600px] mx-auto bg-primary-bright-blue min-h-screen">
      <Heading />
    </main>
  );
}
