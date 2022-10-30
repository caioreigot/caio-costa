import Link from 'next/link';
import generateId from '../scripts/utils/generateId';

// Retorna a lista do sumário
export default function renderSummary(
  postContent: string[],
  textColor: string,
  itemTextSize: string
) {
  const listItems: JSX.Element[] = [];

  const smoothScrollTo = (e: React.MouseEvent<HTMLElement>, elementId: string) => {
    e.preventDefault();

    const topic = document.getElementById(elementId);
    topic?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Itera todas as linhas do conteúdo do post procurando por tópicos
  postContent.forEach((line, index) => {
    if (line.includes('%TOPIC')) {
      const topic = line.replace('%TOPIC', '').trimStart();
      const topicId = generateId(topic);

      listItems.push(
        <li key={index} className="m-1 w-fit text-white">
          <div className={`flex flex-row ${itemTextSize}`}>
            <Link href={`#${topicId}`} onClick={(e) => smoothScrollTo(e, topicId)} className="py-1 transition-all-200 hover:cursor-pointer hover:brightness-75 hover:translate-x-1">
              <span className={textColor}>{listItems.length + 1}: </span>
              {topic}
            </Link>
          </div>
        </li>
      );
    }
  });

  return (
    <ul>
      {listItems}
    </ul>
  );
}