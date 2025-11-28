export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-linear-to-r from-[#193725] via-[#2b573d] to-[#193725] w-full">
      <div className="flex items-center flex-col justify-between w-full mt-24">
        <h1 className="text-[#E2B473] text-4xl tracking-widest font-bold">
          Artistas
        </h1>
        <p className="text-[#E2B473] font-semibold text-center md:text-xl">
          R. Artur da Costa Silva, 16 - Belford Roxo
        </p>
      </div>
      <div className="flex mt-6 items-center justify-center" id="card">
        <div className="relative">
          <div className="absolute bg-black w-full h-full opacity-60 border-2 border-[#E2B473]"></div>
          <img src="/fatima.jpg" alt="#" className="h-[40vh]" />
          <h1 className="absolute bottom-24 left-4 text-[#E2B473] font-bold text-2xl">
            Fátima Silva
          </h1>
        </div>
      </div>
    </div>
  );
}
