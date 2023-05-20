import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <p>Hi Welcome to CV/Resume Generator</p>
      <button>
        <Link href={"/generator"}>
          Generate
        </Link>
      </button>
    </main>
  );
}
