import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      {/* Main Content */}
      <main className="flex-1 items-center justify-center">
        <h1 className="text-4xl font-bold text-center text-black dark:text-white">
          Welcome to the Home Page
        </h1>
        <p className="mt-8 text-lg text-justify text-gray-800 dark:text-gray-200 px-4">
          In this report, a Construction Production Management (CPM) case study has been presented to develop a new Library Learning Centre at Chaucer school in Sheffield. The project consists of the building of a new learning center on the premises of an existing secondary school; it also encompasses a central library area, the general classes and special IT rooms. The plan is part of the larger capital investment programme by the Department of Education (DfE) in the UK to enhance the educational infrastructure to accommodate the growing number of pupils, reforms in the curricular programs and rapid technological development.
          <br /><br />
          Construction Production Management is concerned with successful planning, coordination and control of construction activity so as to deliver projects efficiently, safely on time and on budget. CPM principles are especially crucial in the framework of this project since one has to operate with the limitation of a live school setting where the security of the school, sustainability of the educational and community relationships play the crucial role. This report thus assesses the possibility of applying CPM tools and techniques to the balance between the production efficiency and operational and social responsibility in the active learning environment.
          <br /><br />
          The library learning centre is meant to improve teaching and learning results through the provision of flexible, inclusive and technologies-sourced spaces. The school is to be designed in favor of independent learning, collaborative learning and digital literacy, which is the modern trend in pedagogy suggested by DfE (DfE, 2023). It is planned that the proposed programme will last about 12-14 months, including enabling works, principal construction, commissioning and handover.
        </p>
      </main>
    </div>
  );
}
