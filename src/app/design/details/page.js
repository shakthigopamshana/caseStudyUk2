import Link from "next/link";

export default function Design() {
    return (
        <div className="flex min-h-screen items-center justify-center font-sans dark:bg-black">
            <main className="flex-1 items-center justify-center bg-black  p-4">
                <h1 className="text-4xl font-bold text-center text-black dark:text-white">
                    Design and Planning Factors.
                </h1>
                <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-200 mt-4">
                    Philosophy of Design and Instructional Needs.
                </h2>
                <p className="mt-8 text-lg text-justify text-gray-800 dark:text-gray-200 px-4">
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
                            Part B (Fire Safety): method of escape, compartmentation, fire detection and alarm system;
                            Part L (Energy Efficiency): insulation, airtightness and low-carbon heating systems;
                            Part M (Accessibility): accessibility and facilities of user with disabilities.
                            The design will also include fire safety, and in consultation with Building Control and the Fire Authority, the design will be based on compliance as opposed to superficial implementation.
                        </p>
                    </div>
                    <div className="w-1/2 bg-gray-300 flex items-center justify-center">
                        <span className="text-gray-500">Photo Placeholder 2</span>
                    </div>
                </div>
            </main>
        </div>
    );
}