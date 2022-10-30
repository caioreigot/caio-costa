interface SkillMeterProps {
  children: React.ReactNode;
  meterWidth: string;
  barColor: string;
  className?: string;
}

export default function SkillMeterCard(props: SkillMeterProps) {
  return (
    <div className={`relative w-home-clamp before:absolute before:top-1 before:left-1 before:w-full before:h-full before:rounded-lg before:bg-blue ${props.className ?? ''}`}>
      <div className="relative flex flex-col px-10 md:px-20 py-12 justify-center items-start bg-blue-1 rounded-lg">
        <h1 className="text-2xl">
          {props.children}
        </h1>
        {/* Fundo escuro onde a barra preenchida ficará encima */}
        <div className="relative w-full h-2 mt-6 rounded-sm bg-blue-2">
          {/* Container de até onde a barra preenchida irá */}
          <div className={`relative top-0 h-full rounded-sm ${props.meterWidth}`}>
            {/* Mais uma div para possibilitar animar o width indo de 0% a 100% de props.meterWidth */}
            <div className={`fill-animation h-full w-full rounded-sm ${props.barColor}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}