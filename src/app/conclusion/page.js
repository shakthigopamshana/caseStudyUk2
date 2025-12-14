import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component

export default function Conclusion() {
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
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white px-2 py-1 rounded">CONCLUSION</h1>
                </div>
                <div className="w-full bg-amber-700 p-4 rounded-md">
                    <p className="mt-2 text-lg text-justify text-gray-800 dark:text-gray-200">
                        The case study indicates that the principles of Construction Production Management have been effectively and comprehensively applied in the delivery of a new Library Learning Centre under the existing conditions of a live school in Chaucer School.The multidisciplinary approach of CPM can be observed by the incorporation of site logistics, design development, health and safety management, cost planning and resource coordination.
                    </p>
                    <p className="mt-2 text-lg text-justify text-gray-800 dark:text-gray-200">
                        One of the main findings of this analysis which can be concluded is that effective project implementation is pegged upon a match between the technical construction needs and the operational needs of the school.Access arrangements, work sequencing and activity segregation should be carefully planned so that the construction progress will not have a negative impact on teaching and learning.Communication is also one of the disciplines highlighted in the project since constant and open communication between the contractor, school leadership, the Department for Education and the community in general is required to retain the trust and to encourage the proactive approach to the problem.
                    </p>
                    <p className="mt-2 text-lg text-justify text-gray-800 dark:text-gray-200">
                        The concept of sustainability is heavily portrayed in the project.The low - carbon materials used, the energy - efficient building systems and sound waste management practices is an indication that there is an increasing expectation that educational construction projects may play a part in achieving environmental goals.Short - interval programming, resource tracking and site logistics planning, among other CPM tools, have a crucial role to play in this context both in meeting the objective of environmental and production efficiency.
                    </p>
                    <p className="mt-2 text-lg text-justify text-gray-800 dark:text-gray-200">
                        Generally, the case study has resulted in the improved knowledge of the multifaceted interaction between design, planning and construction delivery within the context of a real - life study surrounding an educational institution.It supports the importance of CPM to solve practical difficulties of construction professionals and emphasises the significance of analytical, organisational and communication skills to provide successful future projects.
                    </p>
                </div>
            </main>
        </div>
    );
}
