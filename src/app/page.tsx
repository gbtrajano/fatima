import Banner from "@/app/Components/Banner";
import Services from "./Components/Services";

export default function Home() {
  return (
    <div>
      <h1
        className="text-[#cb996c] text-xl md:text-4xl absolute top-3/5 left-1/2 -translate-x-1/2 font-bold w-full text-center"
        id="hero-phrase"
      >
        Desfrute de uma experiência de beleza única.
      </h1>
      <img src="/main.jpg" alt="banner" className="h-[80vh] md:w-full" />
      <Services />
      <Banner />
    </div>
  );
}
