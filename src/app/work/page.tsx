export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-6 items-center justify-center bg-linear-to-r from-[#193725] via-[#2b573d] to-[#193725]">
      <h1 className="md:text-5xl text-2xl font-bold text-[#E2B473] mt-20">
        Menu de Serviços
      </h1>
      <div className="flex items-center flex-col md:flex-row gap-4">
        <div className="relative">
          <div className="absolute w-full h-full border-2 border-[#E2B473] bg-black opacity-70"></div>
          <img
            src="./bemestar.jpg"
            alt="foto"
            className="w-[250px] h-[300px] md:w-[400px] md:h-[500px]"
          />
          <h1 className="absolute text-2xl md:text-4xl text-[#E2B473] top-8 md:top-18 left-1/2 -translate-x-1/2 font-bold italic">
            Cabelo
          </h1>
          <ul className="text-[#E2B473] top-1/2 -translate-y-1/2 font-semibold left-8 md:left-24 absolute list-disc text-md">
            <li>Corte</li>
            <li>Terapia Capilar</li>
            <li>Tratamentos</li>
            <li>Escova de Realinhamento</li>
            <li>Progressivas</li>
          </ul>

          <img
            src="./white-header-photo.png"
            alt="footer-photo"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 h-[30px] md:h-[75px]"
          />
        </div>
        <div className="relative mb-20">
          <div className="absolute w-full h-full border-2 border-[#E2B473] bg-black opacity-70"></div>
          <img
            src="./manicure.jpg"
            alt="foto"
            className="w-[250px] h-[300px] md:w-[400px] md:h-[500px]"
          />
          <h1 className="absolute text-xl md:text-2xl text-[#E2B473] top-8 md:top-18 left-1/2 -translate-x-1/2 font-bold italic w-full text-center">
            Manicure & Pedicure
          </h1>
          <ul className="text-[#E2B473] top-1/2 -translate-y-1/2 font-semibold left-8 md:left-24 absolute list-disc text-md uppercase flex flex-col gap-2">
            <li>Pé e Mão</li>
            <li>Alongamento de Unhas</li>
            <li>Banho de Gel</li>
          </ul>

          <img
            src="./white-header-photo.png"
            alt="footer-photo"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 h-[30px] md:h-[75px]"
          />
        </div>
      </div>
    </div>
  );
}
