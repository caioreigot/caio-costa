import Image from 'next/image';

interface LoadingBoxProps {
  leave: boolean
}

export default function LoadingBox(props: LoadingBoxProps) {
  return (
    <div className={`flex flex-row items-center absolute left-0 bottom-0 z-50 m-8 py-2 px-6 rounded bg-blue-1 text-orange-2 ${props.leave && 'quick-exit-animation'}`}>
      <Image alt='Loading' src='/loading.svg' className="w-12 h-12 -translate-x-2" />
      <p className={`font-semibold select-none ${!props.leave && 'animate-pulse'}`}>
        Carregando
      </p>
    </div>
  );
}   