import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center">
        <h1 className="text-4xl font-bold text-center text-black dark:text-white">
          Welcome to the Home Page
        </h1>
      </main>
    </div>
  );
}
