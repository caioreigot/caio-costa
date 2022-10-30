import keywords from '../../keywords.json';

/**
 * @param {string} keyword A palavra chave do assunto do post (precisa ser
 * igual à que está escrita em "config/keywords.json")
 * @returns Retorna um array de 3 posições com as seguintes informações:
 * - Índice 0 haverá a classe que dará cor à borda do topo;
 * - Índice 1 haverá a classe que dará cor ao "text";
 * - Índice 2 haverá a classe que dará cor ao "background".
 */
export default function getKeywordColors(keyword?: string): string[] {
  const keywordData = (keywords.data as any)[keyword as any];
  return keywordData ? Object.values(keywordData) : [];
}
