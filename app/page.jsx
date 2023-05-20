import Link from "next/link";
import Button from "./components/Button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <p>Hi Welcome to CV/Resume Generator</p>
      <Button>
        <Link href={"/generator"}>
          Generate
        </Link>
      </Button>
    </main>
  );
}
