export default function Home() {
  return (
    <div className="h-screen flex flex-col gap-6 items-center justify-center bg-linear-to-r from-[#193725] via-[#2b573d] to-[#193725]">
      <h1 className="text-5xl font-bold text-[#E2B473]">Menu de Serviços</h1>
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="absolute w-full h-full border-2 border-[#E2B473] bg-black opacity-70"></div>
          <img
            src="./bemestar.jpg"
            alt="foto"
            className="w-[400px] h-[500px]"
          />
          <h1 className="absolute text-4xl text-[#E2B473] top-18 left-1/2 -translate-x-1/2 font-bold italic">
            Bem-estar
          </h1>
          <ul className="text-[#E2B473] top-54 font-semibold left-24 absolute list-disc text-2xl">
            <li>Reflexologia</li>
            <li>Depilação</li>
            <li>Podologia</li>
          </ul>

          <img
            src="./white-header-photo.png"
            alt="footer-photo"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 h-[75px]"
          />
        </div>
        <div className="relative">
          <div className="absolute w-full h-full border-2 border-[#E2B473] bg-black opacity-70"></div>
          <img
            src="./bemestar.jpg"
            alt="foto"
            className="w-[400px] h-[500px]"
          />
          <h1 className="absolute text-4xl text-[#E2B473] top-18 left-1/2 -translate-x-1/2 font-bold italic">
            Cabelo
          </h1>
          <ul className="text-[#E2B473] top-1/2 -translate-y-1/2 font-semibold left-24 absolute list-disc text-md">
            <li>Corte</li>
            <li>Coloração</li>
            <li>Balayage</li>
            <li>Terapia Capilar</li>
            <li>Tricologia</li>
            <li>Tratamentos</li>
            <li>Escova de Realinhamento</li>
            <li>Extensão Capilar</li>
            <li>Finalizações</li>
            <li>Penteados</li>
          </ul>

          <img
            src="./white-header-photo.png"
            alt="footer-photo"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 h-[75px]"
          />
        </div>
        <div className="relative">
          <div className="absolute w-full h-full border-2 border-[#E2B473] bg-black opacity-70"></div>
          <img
            src="./bemestar.jpg"
            alt="foto"
            className="w-[400px] h-[500px]"
          />
          <h1 className="absolute text-2xl text-[#E2B473] top-18 left-1/2 -translate-x-1/2 font-bold italic w-full text-center">
            Manicure & Pedicure
          </h1>
          <ul className="text-[#E2B473] top-1/2 -translate-y-1/2 font-semibold left-24 absolute list-disc text-md uppercase flex flex-col gap-2">
            <li>Pé e Mão</li>
            <li>Unhas de Fibra</li>
            <li>Esmalte em Gel</li>
            <li>Unhas Artísticas</li>
            <li>Tratamento de Parafina</li>
          </ul>

          <img
            src="./white-header-photo.png"
            alt="footer-photo"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 h-[75px]"
          />
        </div>
        <div className="relative">
          <div className="absolute w-full h-full border-2 border-[#E2B473] bg-black opacity-70"></div>
          <img
            src="./bemestar.jpg"
            alt="foto"
            className="w-[400px] h-[500px]"
          />
          <h1 className="absolute text-2xl text-[#E2B473] top-18 left-1/2 -translate-x-1/2 font-bold italic w-full text-center">
            Estética
          </h1>
          <ul className="text-[#E2B473] top-1/2 -translate-y-1/2 font-semibold left-24 absolute list-disc text-md uppercase flex flex-col gap-2">
            <li>Design de Sobrancelha</li>
            <li>Design de Sobrancelha na pinça</li>
            <li>Esmalte em Gel</li>
            <li>Unhas Artísticas</li>
            <li>Tratamento de Parafina</li>
          </ul>

          <img
            src="./white-header-photo.png"
            alt="footer-photo"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 h-[75px]"
          />
        </div>
      </div>
    </div>
  );
}
