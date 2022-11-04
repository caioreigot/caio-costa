import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="overflow-x-auto w-full h-screen flex items-center justify-center">
      <div className="relative w-full flex flex-col justify-center items-center pt-8">
        <h1 className="go-up text-8xl sm:text-9xl font-black text-red text-center text-shadow-md">
          404
        </h1>
        <div className="absolute translate-y-16 opacity-0 show-in-500ms flex flex-col w-404-clamp">
          <h2 className="text-yellow font-semibold text-lg sm:text-xl text-center">
            Página não encontrada
          </h2>
          <Link href="/" className="w-full px-4 py-4 mt-4 flex flex-row items-center justify-center space-x-4 hover:cursor-pointer border border-orange-3 rounded font-semibold hover:bg-orange-3 active:brightness-110 text-center">
            <Icon className="min-w-[18px] min-h-[18px]" icon="clarity:home-line" color="white" width="24" height="24" />
            <p className="text-sm sm:text-base">Ir para página principal</p>
          </Link>
        </div>
      </div>
    </div>
  );
}