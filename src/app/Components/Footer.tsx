import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="main-footer"
      className="flex flex-col items-center justify-around bg-linear-to-r from-[#193725] via-[#2b573d] to-[#193725] w-full text-[#E2B473] md:h-[30vh] border-2 py-4"
    >
      <div
        id="footer-header"
        className="flex flex-col md:flex-row items-center justify-evenly md:w-full gap-6"
      >
        <div className="flex flex-col items-center">
          <img src="./white-header-photo.png" className="h-[70px]" />
          <div className="flex items-center gap-4">
            <Link
              href="https://www.instagram.com/fatima.silva18_/"
              target="_blank"
            >
              <FaInstagram size={25} />
            </Link>
            <FaFacebook size={25} />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="italic tracking-widest text-2xl">Contato</h1>
          <p className="flex items-center gap-2">
            <FaWhatsapp /> (21) 96991-0167
          </p>
        </div>
        <div className="flex flex-col items-center mb-4">
          <h1 className="italic tracking-widest text-2xl">Endereço</h1>
          <p>R. Artur da Costa Silva, 16 - Belford Roxo</p>
        </div>
      </div>
      <hr className="w-[60%] border" />
      <p className="text-center my-4">© 2025 - TODOS OS DIREITOS RESERVADOS.</p>
    </footer>
  );
}
