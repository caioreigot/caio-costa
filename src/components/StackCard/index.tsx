import { Icon } from '@iconify/react';

interface StackCardProps {
  children: React.ReactNode;
  className?: string;
  title: string;
  titleColor: string;
  icon: string;
}

export default function StackCard(props: StackCardProps) {
  return (
    <div className={`enter-animation w-home-clamp relative before:absolute before:top-1 before:left-1 before:w-full before:h-full before:rounded-lg ${props.className ?? ''}`}>
      <div className="relative flex flex-col px-10 md:px-20 py-12 justify-center items-center bg-blue-1 rounded-lg">
        <div className="flex flex-row w-full items-center justify-start mb-4">
          <Icon icon={props.icon} width="128" height="128" className="mr-6" />
          <h1 className={`text-3xl w-full ${props.titleColor}`}>
            {props.title}
          </h1>
        </div>
        <p className="text-left text-lg">
          {props.children}
        </p>
      </div>
    </div>
  );
}