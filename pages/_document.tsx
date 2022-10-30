import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className='h-full flex flex-row justify-center bg-blue-2 text-white text-xs md:text-sm lg:text-base'>
      <Head />
      <body className='font-monospace flex flex-col overflow-y-auto custom-vertical-scrollbar h-full w-full max-w-[1800px]'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}