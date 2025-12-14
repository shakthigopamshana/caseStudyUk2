import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component

export default function PersonalInfo() {
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
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white px-2 py-1 rounded">PERSONAL INFO</h1>
                </div>
                <div className="flex justify-center p-4">
                    <Image
                        src="/images/info-center.png"
                        alt="info-center"
                        width={700}
                        height={394}
                        className="w-full h-150 object-fill rounded-md"
                    />
                </div>
                <div className="w-full bg-amber-700 p-4 rounded-md">
                    <p className="mt-2 text-lg text-justify flex flex-rows gap-4 text-gray-800 dark:text-gray-200">
                        <h3 className="text-xl font-semibold">Name of the Student: </h3>
                        Shakthi Gopamshana
                    </p>
                    <p className="mt-2 text-lg text-justify flex flex-rows gap-4 text-gray-800 dark:text-gray-200">
                        <h3 className="text-xl font-semibold">Module Name: </h3>
                        Applied Construction Production Management
                    </p>
                    <p className="mt-2 text-lg text-justify flex flex-rows gap-4 text-gray-800 dark:text-gray-200">
                        <h3 className="text-xl font-semibold">Instructor’s Name: </h3>
                        Dr David O Stephen
                    </p>
                    <p className="mt-2 text-lg text-justify flex flex-rows gap-4 text-gray-800 dark:text-gray-200">
                        <h3 className="text-xl font-semibold">Title of Project: </h3>
                        Construction Production Management Case Study: Library Learning  Centre for Chaucer School Sheffield
                    </p>
                </div>
            </main>
        </div>
    );
}

// Name of the Student: Shakthi Gopamshana
// Module Name:Applied Construction Production Management
// Instructor’s Name:Dr David O Stephen
// Title of Project: Construction Production Management Case Study: Library Learning  Centre for Chaucer School Sheffield