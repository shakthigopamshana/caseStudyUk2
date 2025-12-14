import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component

export default function Report() {
    return (
        <div className="flex flex-rows min-h-screen items-center justify-center font-sans dark:bg-black">
            <main className="flex-1 items-center justify-center bg-black  p-4">
                <div className="relative">
                    <Image
                        src="/images/Sheffield_Hallam_University_logo.svg.png"
                        alt="Logo"
                        width={128}
                        height={128}
                        className="w-full h-100 object-fill rounded-md"
                    />
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white px-2 py-1 rounded">REPORT</h1>
                </div>
                <div className="mt-4 flex gap-4">
                    <div className="w-1/2 h-64 bg-gray-300 flex items-center justify-center">
                        <span className="text-gray-500">Photo Placeholder 1</span>
                    </div>
                    <div className="w-1/2 h-64 bg-gray-300 flex items-center justify-center">
                        <span className="text-gray-500">Photo Placeholder 2</span>
                    </div>
                </div>
            </main>
        </div>
    );
}



