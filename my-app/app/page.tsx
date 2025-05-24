import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <div className="grid gap-4 text-cyan-950">
        <h1 className="text-xl text-wrap whitespace-break-spaces">
          Assalamu Alaikum! Find authentic Duas for every moment in your daily
          life - Morning, evening, hardship and gratitude.
        </h1>
        <span className="italic">
          Collected from Qu'ran and Hadith. Simple, clear and easy to remember.
        </span>
      </div>
    </div>
  );
}
