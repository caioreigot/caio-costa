import { Icon } from '@iconify/react';

interface SimpleCardProps {
  children: React.ReactNode;
  icon: string;
  className?: string;
  iconColor?: string;
}

export default function SimpleCard(props: SimpleCardProps) {
  return (
    <div className={`hover:brightness-110 w-[200px] relative before:absolute before:top-1 before:left-1 before:w-full before:h-full before:rounded-lg before:bg-blue ${props.className ?? ''}`}>
      <div className={`relative flex flex-row grow justify-center items-center px-8 py-12 bg-blue-1 rounded-lg`}>
        <Icon icon={props.icon} color={props.iconColor} width="32" height="32" className="min-w-[40px] max-w-[40px] w-1/3 min-h-[40px] max-h-[40px]" />
        <h1 className="text-2xl text-center ml-4 w-2/3 select-none">
          {props.children}
        </h1>
      </div>
    </div>
  );
}