import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component

export default function Gallery() {
  return (
    <div className="flex flex-rows min-h-screen items-center justify-center font-sans dark:bg-black">
      <main className="flex-1 items-center justify-center bg-black  p-4">
        <div className="relative">
          <Image
            src="/images/main-pic.jpg"
            alt="Logo"
            width={865}
            height={520}
            className="w-full h-100 object-fill rounded-md"
          />
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white px-2 py-1 rounded">GALLERY</h1>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-3">
          <Image
            src="/images/1.jpg"
            alt="Logo"
            width={555}
            height={555}
            className="w-full h-100 object-fill rounded-md"
          />
          <Image
            src="/images/2.jpg"
            alt="Logo"
            width={1200}
            height={802}
            className="w-full h-100 object-fill rounded-md"
          /><Image
            src="/images/3.jpg"
            alt="Logo"
            width={1280}
            height={720}
            className="w-full h-100 object-fill rounded-md"
          /><Image
            src="/images/4.jpg"
            alt="Logo"
            width={1200}
            height={901}
            className="w-full h-100 object-fill rounded-md"
          /><Image
            src="/images/5.jpeg"
            alt="Logo"
            width={1200}
            height={898}
            className="w-full h-100 object-fill rounded-md"
          /><Image
            src="/images/6.jpg"
            alt="Logo"
            width={500}
            height={329}
            className="w-full h-100 object-fill rounded-md"
          />
        </div>
      </main>
    </div>
  );
}