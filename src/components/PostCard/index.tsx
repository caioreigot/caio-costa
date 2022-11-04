import getKeywordColors from '../../scripts/utils/getKeywordColors';

interface PostCardProps {
  className?: string;
  keyword: string;
  title: string;
  children: React.ReactNode;
}

export default function PostCard(props: PostCardProps) {
  const [borderColor, keywordColor] = getKeywordColors(props.keyword);

  return (
    <div className={`border-t-2 ${borderColor} p-7 h-80 w-full shadow-card overflow-hidden select-none hover:cursor-pointer hover:backdrop-brightness-110 active:backdrop-brightness-125 ${props.className ?? ''}`}>
      <div className="overflow-hidden h-full w-full">
        <h2 className={`${keywordColor} my-4 tracking-widest`}>
          {props.keyword}
        </h2>
        <h1 className="text-3xl tc:text-2xl">
          {props.title}
        </h1>
        <p className="mt-5 text-base tc:text-xs text-[#b9bbce]">
          {props.children}
        </p>
      </div>
    </div>
  );
}