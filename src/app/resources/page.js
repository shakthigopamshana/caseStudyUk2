import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component

export default function Resources() {
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
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white px-2 py-1 rounded">RESOURCES</h1>
        </div>
        <p className="mt-8 text-lg text-justify text-gray-800 dark:text-gray-200 px-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-4 pb-2">Resource Management</h2>
          Resource management is part and parcel of Construction Production Management and it involves the proper coordination of plant, labour and materials to complete the programme targets. This would be of great significance to the Library Learning Centre project because the site is limited, safeguards must be considered and disturbance to school operations should be minimised.
        </p>
        <div className="w-1/2 h-64 bg-gray-300 flex items-center justify-center">
          <span className="text-gray-500">Photo Placeholder 1</span>
        </div>
        <div className="mt-4 flex flex-rows gap-4">
          <div className="w-full bg-amber-700 p-4 rounded-md">
            <h3 className="text-xl font-semibold mt-4">Plant Management</h3>
            <p className="mt-2 text-lg text-justify text-gray-800 dark:text-gray-200">
              Some of the plant that will be involved in the construction activities includes mobile cranes, telehandlers, MEWPs, compact excavators and dumpers. The criteria to be used in selection will focus on appropriateness to a limited school location, safety performance and productivity. As an example, tele handlers minimize the risks of manual handling, and enhance the efficiency of material distribution. The use of plants will be tracked with the help of daily logs and, when necessary, with GPS-based control to determine the idle time, optimise the hire time and eliminate wasteful spending to uphold lean and sustainable operations.
            </p>
          </div>
          <div className="w-1/2 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500">Photo Placeholder 2</span>
          </div>
        </div>
        <div className="mt-4 flex flex-rows gap-4">
          <div className="w-1/2 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500">Photo Placeholder 2</span>
          </div>
          <div className="w-full bg-amber-700 p-4 rounded-md">
            <h3 className="text-xl font-semibold mt-4">Workforce Planning and Control.</h3>
            <p className="mt-2 text-lg text-justify text-gray-800 dark:text-gray-200">
              It will have workforce of site managers, supervisors and qualified trades like joiners, steel erectors, electricians, plumbers, dry liners, IT installers and external works operatives. The labour planning is necessary so that relevant skills are not overcrowded, but they can be available when needed. The short interval planning and a weekly production meeting will be used to support a labour histogram to synchronise the workforce levels to the programme to coordinate the subcontractors and to review progress and eliminate constraints. This is CPM best practice and helps to achieve stable workflow and productivity (Cartlidge, 2015)
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-rows gap-4">
          <div className="w-full bg-amber-700 p-4 rounded-md">
            <h3 className="text-xl font-semibold mt-4">Digital Resource Management Materials.</h3>
            <p className="mt-2 text-lg text-justify text-gray-800 dark:text-gray-200">
              The materials management will take the form of just-in-time delivery to ease the storage strains, enhance the safety and minimise waste. The materials will be all DfE technical and sustainability standards. It will have a digital dashboard to monitor the deliveries, waste, labour hours, plant utilisation and productivity, to assist in making decisions based on data and enhance performance on the projects.
            </p>
          </div>
          <div className="w-1/2 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500">Photo Placeholder 2</span>
          </div>
        </div>
        <div className="flex w-full gap-5 justify-center">
          <div className="mt-8">
            <iframe
              width="560"
              height="315"
              src="https://youtu.be/duCfQPbHxFY?si=uMCGXhMBY7tDhqKc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full max-w-2xl mx-auto rounded-md"
            ></iframe>
          </div>
          <div className="mt-8">
            <iframe
              width="560"
              height="315"
              src="https://youtu.be/JfyiMsBV0Z4?si=BQHBhyrNai6ETtXr"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full max-w-2xl mx-auto rounded-md"
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
}



