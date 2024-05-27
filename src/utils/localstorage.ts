const RECENT_KEYWORDS = 'recent_keywords';

const getArray = (key: string) => {
  try {
    const items = localStorage.getItem(key);
    if (items) {
      return JSON.parse(items);
    }

    return [];
  } catch {
    return [];
  }
};

const setArray = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getRecentKeyWords = () => getArray(RECENT_KEYWORDS);

export const addRecentKeywords = (keyWord: string) => {
  const items = getRecentKeyWords();
  const existItems = items.find((item: string) => item === keyWord);

  if (existItems) {
    const prevItems = items.filter((item: string) => item !== prevItems);
    setArray(RECENT_KEYWORDS, [keyWord, ...prevItems]);
  } else {
    setArray(RECENT_KEYWORDS, [keyWord, ...items]);
  }
};

export const clearRecentKeywords = () => {
  localStorage.removeItem(RECENT_KEYWORDS);
};
