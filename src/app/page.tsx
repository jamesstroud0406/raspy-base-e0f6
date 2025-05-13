import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-white text-center">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-800">Bury Lodge Farm & Services Limited</h1>
        <p className="text-lg italic text-gray-600 mt-2">Previously Bondlands Limited</p>
        <p className="text-md mt-4">Please contact James Stroud on 07908 123452</p>
      </div>
    </main>
  );
}