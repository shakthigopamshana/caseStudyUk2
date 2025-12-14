import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component

export default function Financials() {
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
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white px-2 py-1 rounded">FINANCIALS</h1>
        </div>
        <p className="mt-8 text-lg text-justify text-gray-800 dark:text-gray-200 px-4">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-4 pb-2">Financial / Cost / Budget Management.</h2>
          The successful implementation of the proposed Library Learning Centre at Chaucer School requires proper financial and cost management to ensure success. Being a publicly funded project, the spending should not exceed the Department for Education (DfE) funding constraints and meet the necessary quality, safety and sustainability requirements. The principles of Construction Production Management are used to integrate the cost planning, monitoring and control in the project lifecycle.
        </p>
        <div className="mt-4 flex flex-rows gap-4 p-4">
          <div className="flex justify-center p-4">
            <Image
              src="/images/financial-left.png"
              alt="Financial-left"
              width={774}
              height={523}
              className="h-100 object-fill rounded-md"
            />
          </div>
          <div className="w-full bg-amber-700 p-4 rounded-md">
            <h3 className="text-xl font-semibold mt-4">Development of Cost Planning and Budget.</h3>
            <p className="mt-2 text-lg text-justify text-gray-800 dark:text-gray-200">
              The first cost plan has been designed in the light of benchmark data of the similar educational projects, market research and indices published by Building Cost Information Service (BCIS). Benchmarking assists in early-stage budget setting that is realistic due to its reflection of the current market conditions and the recent project performance (RICS, 2021).
            </p>
            <p className="mt-2 text-lg text-justify text-gray-800 dark:text-gray-200">
              The high-level cost plan comprises substructure, superstructure, envelope, internal works (including M&E), external works, preliminaries and a contingency allowance of 510 per cent in order to cover design development and project risk. In a building with a gross internal floor area of 1,500 to 2000 m 2, average costs of construction of facilities in a secondary school amount between 2500 and 3200 pounds per square meter. This shows a total cost of the project of between £4 million to 6 million, which is triangulated with BCIS data, industry reports, and recent local authority education schemes to minimize the chance of underestimation (BCIS, 2024).
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/financial-end.png"
            alt="financial-end"
            width={626}
            height={427}
            className="w-full h-74 object-fill rounded-md"
          />
          <p className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg p-4 text-justify text-gray-900 dark:text-gray-100">
            <h3 className="text-xl font-semibold mt-4">Cost Control, Cash Flow and Risk.</h3>
            The major financial risks are inflation in the construction, volatility of prices of material, unexpected ground conditions and unplanned changes in design. They are controlled using contingency allowances, routine cost reviews and value engineering when needed without affecting performance and safety (Cartlidge, 2015). Cost reporting and cash flow forecasting will be reported monthly so that the expenditure is in line with the funds. Design and Build procurement route offers certainty via price in form of lump sum and aids in efficient financial management during construction.
          </p>
        </div>
      </main>
    </div>
  );
}