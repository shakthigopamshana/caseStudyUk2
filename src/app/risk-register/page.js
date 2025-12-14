import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component

export default function RiskRegister() {
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
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white px-2 py-1 rounded">RISK REGISTER</h1>
        </div>
        <div className="w-1/2 h-64 bg-gray-300 flex items-center justify-center">
          <span className="text-gray-500">Photo Placeholder 1</span>
        </div>
        <div className="p-4">
          <div className="w-full bg-amber-700 p-4 rounded-md">
            <h3 className="text-xl font-semibold mt-4">Risk Definition:</h3>
            <p className="mt-2 text-lg text-justify text-gray-800 dark:text-gray-200">
              &quot;An uncertain event or circumstance that, if it occurs, will affect the outcome of a programme/project.&quot;
            </p>
            <h3 className="text-xl font-semibold mt-4">
              What is a Risk Register ?</h3>
            <p className="mt-2 text-lg text-justify text-gray-800 dark:text-gray-200">
              &quot;A risk register is a risk management tool generally adopted as a central repository for all risks and threats identified. For each threat or risk identified, information in relation to each risk is included, such as a description of the risk, risk consequences, impact rating. risk owner.&quot;
            </p>
            <p className="mt-2 text-lg text-justify text-gray-800 dark:text-gray-200">
              Risk Categories, Risk analysis, Risk Probability, Risk Response
            </p>
          </div>
          <div className="w-full p-4 rounded-md">
            <h3 className="text-xl font-semibold mt-4">Why would you impliment a Risk Register on your project ?</h3>
            <p className="mt-2 text-lg text-justify text-gray-800 dark:text-gray-200">
              By identifying and organising risks into a Risk Register it can help:
            </p>
            <p className="mt-2 text-lg text-justify text-gray-800 dark:text-gray-200">
              - Project Managers
            </p>
            <p className="mt-2 text-lg text-justify text-gray-800 dark:text-gray-200">
              - Quantity Surveyors
            </p>
            <p className="mt-2 text-lg text-justify text-gray-800 dark:text-gray-200">
              - And other construction professionals to stay on top of potential issues that could derail the desired outcomes of a project
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
