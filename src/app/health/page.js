import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component

export default function Health() {
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
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white px-2 py-1 rounded">HEALTH AND SAFETY ISSUES</h1>
        </div>
        <p className="mt-8 text-lg text-justify text-gray-800 dark:text-gray-200 px-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-4 pb-2">Health and Safety Issues</h2>
          The management of safety and health is the centre of success in implementation of this project, especially with presence of children and youthful population. The whole undertakings will be accomplished based on the Construction (Design and Management) Regulations 2015 (CDM 2015).
        </p>
        <div className="w-full h-100 bg-gray-300 flex items-center justify-center">
          <span className="text-gray-500">Photo Placeholder 2</span>
        </div>
        <div className="w-full bg-amber-700 p-4 rounded-md">
          <h3 className="text-xl font-semibold mt-4">Risk Identification and Control.</h3>
          <p className="mt-2 text-lg text-justify text-gray-800 dark:text-gray-200">
            Risks such as working at height, mobile plant operations, manual handling, noise, dust and interface between construction activities and school operations are also the key risks. A thorough Construction Phase Plan will cover these hazards with an associated set of control measures which includes scaffold edge protection, dust suppression, temporary acoustic barriers and mechanical lifting equipment.
          </p>
          <p className="mt-2 text-lg text-justify text-gray-800 dark:text-gray-200">
            Proactive safety culture and site-specific risks awareness will be maintained through daily briefings and regular toolbox talks to make sure that workers are aware of the particular risks and the changing conditions that may occur on the site.
          </p>
        </div>
      </main>
    </div>
  );
}