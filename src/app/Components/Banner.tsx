export default function Banner() {
  return (
    // 1. Usa-se 'flex-wrap' para permitir que os itens quebrem para a próxima linha
    // se não houver espaço suficiente.
    <div id="banner" className="w-full flex items-center flex-wrap">
      <img
        src="/1.jpg"
        alt="banner"
        className="w-full sm:w-1/3 min-w-[120px] h-auto object-cover"
      />
      <img
        src="/2.jpg"
        alt="banner"
        className="w-full sm:w-1/3 min-w-[120px] h-auto object-cover"
      />
      <img
        src="/3.jpg"
        alt="banner"
        className="w-full sm:w-1/3 min-w-[120px] h-auto object-cover"
      />
    </div>
  );
}
