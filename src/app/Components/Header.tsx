import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute p-4 flex items-center w-full justify-center gap-4 text-[#cb996c]">
      <img src="./white-header-photo.png" className="h-[50px]" />
      <nav className="flex gap-4 items-center italic text-2xl font-semibold">
        <Link href="/" prefetch>
          Início
        </Link>
        <Link href="/work" prefetch>
          Serviços
        </Link>
        <Link href="/contato" prefetch>
          Contato
        </Link>
        <Link href="https://www.instagram.com/fatima.silva18_/" target="_blank">
          <FaInstagram size={25} />
        </Link>
      </nav>
    </header>
  );
}
