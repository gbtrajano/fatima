import Link from "next/link";

export default function Services() {
  return (
    <section
      className="bg-linear-to-r from-[#193725] via-[#2b573d] to-[#193725] h-[50vh] flex items-center justify-center"
      id="services-section"
    >
      <div className="flex items-center gap-4">
        <Link href="/work">
          <div className="relative hover:cursor-pointer">
            <div className="absolute h-full w-full bg-black opacity-75 border-2 border-[#E2B473]"></div>
            <img src="./services.jpg" alt="" className="w-[300px] h-[350px]" />
            <h1 className="tracking-widest absolute top-24 left-1/2 -translate-x-1/2 text-[#E2B473] font-bold text-2xl uppercase">
              Serviços
            </h1>
          </div>
        </Link>
        <Link href="./espaco">
          <div className="relative hover:cursor-pointer">
            <div className="absolute h-full w-full bg-black opacity-75 border-2 border-[#E2B473]"></div>
            <img src="./place.jpg" alt="" className="w-[300px] h-[350px]" />
            <h1 className="tracking-widest absolute top-24 left-1/2 -translate-x-1/2 text-[#E2B473] font-bold text-2xl uppercase">
              Espaço
            </h1>
          </div>
        </Link>
        <Link href="/artistas">
          <div className="relative hover:cursor-pointer">
            <div className="absolute h-full w-full bg-black opacity-75 border-2 border-[#E2B473]"></div>
            <img src="./hair-cut.jpg" alt="" className="w-[300px] h-[350px]" />
            <h1 className="tracking-widest absolute top-24 left-1/2 -translate-x-1/2 text-[#E2B473] font-bold text-2xl uppercase">
              Artistas
            </h1>
          </div>
        </Link>
        <Link href="/parceiros">
          <div className="relative hover:cursor-pointer">
            <div className="absolute h-full w-full bg-black opacity-75 border-2 border-[#E2B473]"></div>
            <img src="./products.jpg" alt="" className="w-[300px] h-[350px]" />
            <h1 className="tracking-widest absolute top-24 left-1/2 -translate-x-1/2 text-[#E2B473] font-bold text-2xl uppercase">
              Parceiros
            </h1>
          </div>
        </Link>
      </div>
    </section>
  );
}
