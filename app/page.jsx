import Link from "next/link";
import { FaGithub } from "react-icons/fa"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-6 md:p-12 lg:p-24">
      <h1 className="mb-8 text-4xl font-bold text-center md:text-5xl lg:text-6xl">
        Create Your Professional CV/Resume
      </h1>
      <p className="mb-8 text-lg text-center md:text-xl lg:text-2xl">
        Welcome to our CV/Resume Generator! With our easy-to-use tool, you can create a professional and personalized CV or resume in just a few steps. Stand out from the crowd and land your dream job.
      </p>
      <div className="flex flex-col gap-4 md:flex-row">
        <button className='px-3 py-2 text-lg font-semibold transition-colors duration-200 bg-teal-400 rounded hover:bg-teal-500'>
          <Link href="/generator">
            Generate Now
          </Link>
        </button>
        <Link href={'https://github.com/themuuln/resume-generator'} target="_blank" rel="noopener noreferrer">
          <button className='px-3 py-2 text-white text-lg transition-colors duration-200 inline-flex items-center gap-2 rounded hover:bg-[#3f444e] bg-[#2c313d]'>
            <FaGithub />
            GitHub
          </button>
        </Link>
      </div>
    </main>
  );
}
