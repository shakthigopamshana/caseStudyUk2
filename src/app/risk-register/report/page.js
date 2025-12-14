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
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white px-2 py-1 rounded">Design and Planning Factors.</h1>
                </div>
                <p className="mt-8 text-lg text-justify text-gray-800 dark:text-gray-200 px-4">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-4 pb-2">Philosophy of Design and Instructional Needs.</h2>
                    Designing of the Library Learning Centre is guided by the DfE Output Specifications, local planning policy and pertinent British Standards. The general design philosophy focuses on the accessibility, flexibility, sustainability and integration with the existing school fabric. This design will help to make sure that the building satisfies the existing educational requirements and at the same time it can be modified when pedagogical and technological changes occur in the future (DfE, 2023).
                </p>
                <div className="mt-8 bg-amber-700 p-4 rounded-md">
                    <p className="text-lg text-justify text-gray-800 dark:text-gray-200">
                        The design of the structures is based around a two-storey library, and this serves as the social and academic core of the building. These four general purpose classrooms and two IT suites are enclosed by a central learning corridor around this core. This arrangement enhances good circulation, passive supervision and effective flow between spaces, which are very important in a learning institution.
                    </p>
                    <h3 className="text-xl font-semibold mt-4">Natural Light and Environmental Quality.</h3>
                    <p className="mt-2 text-lg text-justify text-gray-800 dark:text-gray-200">
                        The maximisation of natural daylight is one of the design motivators. High day light factors are realised through clerestory windows, big south facing windows and sensitive positioning of teaching areas to ensure glare is minimised. Studies indicate that the benefits of providing good daylight are increased focus and wellbeing among students and decreased energy needs (DfE, 2022).
                    </p>
                    <p className="mt-4 text-lg text-justify text-gray-800 dark:text-gray-200">
                        The new building is also linked securely to the old school by an internal connection through which staff and students can transfer between the two facilities without the risk of being exposed to the unfavourable weather or any other external threats. External circulation routes are in accordance with Part M of building regulations making sure that all users can access them.
                    </p>
                </div>
                <div className="mt-4 flex gap-4">
                    <div className="w-1/2 h-64 bg-gray-300 flex items-center justify-center">
                        <span className="text-gray-500">Photo Placeholder 1</span>
                    </div>
                    <div className="w-1/2 h-64 bg-gray-300 flex items-center justify-center">
                        <span className="text-gray-500">Photo Placeholder 2</span>
                    </div>
                </div>
                <div className="mt-4 flex flex-rows gap-4">
                    <div className="w-full bg-amber-700 p-4 rounded-md">
                        <h3 className="text-xl font-semibold mt-4">Construction Regulations and Fire Strategy.</h3>
                        <p className="mt-2 text-lg text-justify text-gray-800 dark:text-gray-200">
                            The design will be in accordance with the Building Regulations 2010 and specific focus on:
                        </p>
                        <p className="mt-2 text-lg text-justify text-gray-800 dark:text-gray-200">
                            Part B (Fire Safety): method of escape, compartmentation, fire detection and alarm system;
                        </p>
                        <p className="mt-2 text-lg text-justify text-gray-800 dark:text-gray-200">
                            Part L (Energy Efficiency): insulation, airtightness and low-carbon heating systems;
                        </p>
                        <p className="mt-2 text-lg text-justify text-gray-800 dark:text-gray-200">
                            Part M (Accessibility): accessibility and facilities of user with disabilities.
                        </p>
                        <p className="mt-2 text-lg text-justify text-gray-800 dark:text-gray-200">
                            The design will also include fire safety, and in consultation with Building Control and the Fire Authority, the design will be based on compliance as opposed to superficial implementation.
                        </p>
                    </div>
                    <div className="w-1/2 bg-gray-300 flex items-center justify-center">
                        <span className="text-gray-500">Photo Placeholder 2</span>
                    </div>
                </div>
                <div className="mt-4 p-4 rounded-md">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-4">Planning and Regulatory Compliance.</h2>
                    <p className="mt-4 text-lg text-justify text-gray-800 dark:text-gray-200">
                        The whole planning permission of the project will be necessitated by the Local Planning Authority. The most important ones are building massing, visual impact, transport implications and ecological effects. Ecological survey, tree assessment, flood risk analysis and a drainage strategy are all expected to be supported documentation.
                        Surface water management would be based on the principles of Sustainable Urban Drainage Systems (SuDS) and will include permeable paving and attenuation controls per the CIRIA SuDS Manual (CIRIA, 2015). These reduce the risk of floods as well as improve the environmental performance.
                    </p>
                </div>
                <div className="mt-4 flex flex-rows gap-4">
                    <div className="w-1/2 bg-gray-300 flex items-center justify-center">
                        <span className="text-gray-500">Photo Placeholder 2</span>
                    </div>
                    <div className="w-full bg-amber-700 p-4 rounded-md">
                        <h3 className="text-xl font-semibold mt-4">Sustainability Strategy</h3>
                        <p className="mt-2 text-lg text-justify text-gray-800 dark:text-gray-200">
                            The project is to be rated at BREEAM “Very Good” which represents DfE sustainability goals.Major activities such as installation of air source heat pump(ASHP), high - performance insulation, triple - glazed windows and roof - mounted photovoltaic panels, make a crucial contribution.These solutions save a lot of carbon emissions in operations and reduce the high running expenses in the long - term.
                            Timber and low - carbon concrete alternatives will be the preferred choice of materials, where possible.The strategies to minimise waste, including off - site prefabrication, segregation of materials and just -in -time delivery also minimise the environmental effects(Netscher, 2014).
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}



