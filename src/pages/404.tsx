import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col justify-center items-center pt-8 mx-4">
        <h1 className="text-5xl font-black text-red text-center text-shadow-md">
          404
        </h1>
        <h2 className="text-2xl text-yellow text-center mt-4">
          Página não encontrada
        </h2>
        <Link href="/posts" className="w-full px-4 py-4 mt-4 hover:cursor-pointer border border-orange-3 rounded font-semibold hover:bg-orange-3 active:brightness-110 text-center">
          Ver lista de postagens
        </Link>
      </div>
    </div>
  );
}