import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import Link from 'next/link';
import setupNavBarAnimation from '../../scripts/utils/setupNavBarAnimation';

export default function NavBar() {
  let navBarHtmlElement: HTMLDivElement | null;
  let nameHtmlElement: HTMLDivElement | null;
  let cursorHtmlElement: HTMLDivElement | null;

  useEffect(() => {
    if (!cursorHtmlElement || !nameHtmlElement || !navBarHtmlElement) return;
    
    const name = nameHtmlElement.innerText;
    const nameWidth = nameHtmlElement.clientWidth;  
    nameHtmlElement.innerText = '';
    
    setupNavBarAnimation(
      navBarHtmlElement,
      nameHtmlElement,
      cursorHtmlElement,
      name,
      nameWidth
    );
  });

  return (
    <div ref={el => el && (navBarHtmlElement = el)} className="sticky top-0 w-full h-14 bg-blue-1 px-16 md:px-24 z-50 text-orange-3 flex flex-row items-center justify-between rounded-br-lg border-b">
      <div ref={c => cursorHtmlElement = c} className="type-cursor-animation absolute w-[4px] h-2/4 sm:h-2/3 bg-white rounded"></div>
      <h1 ref={c => nameHtmlElement = c} className="text-xl sm:text-2xl font-semibold select-none">
        Caio Costa
      </h1>
      <div className="h-full flex flex-row items-center space-x-8">
        <Link href="/posts" className="hidden sm:block text-lg font-semibold hover:cursor-pointer select-none hover:brightness-110">
          Posts
        </Link>
        <div className="hidden sm:block h-3/5 w-[2px] bg-orange-3"></div>
        <a href="https://github.com/caioreigot/" target="_blank" rel="noreferrer"><Icon className="hover:cursor-pointer hover:brightness-110" icon="line-md:github-loop" width="28" height="28" /></a>
        <a href="https://linkedin.com/in/caioreigot/" target="_blank" rel="noreferrer"><Icon className="hover:cursor-pointer hover:brightness-110" icon="line-md:linkedin" width="28" height="28" /></a>
      </div>
    </div>
  );
}