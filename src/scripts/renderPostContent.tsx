import JsonConverter from './JsonConverter';

export default function renderPostContent(
  postContent: string[],
  textColor: string
) {
  const jsonConverter = new JsonConverter(postContent, textColor);

  // Retorna os elementos JSX para serem renderizados
  return jsonConverter.getJsxElements();
}