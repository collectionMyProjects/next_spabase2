import { throttle } from 'lodash';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';

import { getSearchProducts } from '@/api/Product/getSearchProducts';
import { Text } from '@/components/common';
import { useOutSideClick } from '@/hooks';
import { addRecentKeywords } from '@/utils/localstorage';

type AutoCompleteProps = {
  query: string;
  handleClose: () => void;
};

const AutoComplete = ({ query, handleClose }: AutoCompleteProps) => {
  const [keyWords, setKeywords] = useState<string[]>([]);

  const handleSearch = useMemo(
    () =>
      throttle(async (query: string) => {
        console.log('query', query);
        if (!query) {
          setKeywords([]);
          return;
        }
        const { data } = await getSearchProducts({
          query,
          fromPage: 0,
          toPage: 2,
        });
        setKeywords(data.map(({ title }) => title));
      }, 500),
    [],
  );

  useEffect(() => {
    handleSearch(query);
  }, [query]);

  const closeRef = useRef(null);

  useOutSideClick(closeRef, handleClose);

  return (
    <div className="flex h-full flex-col" ref={closeRef}>
      <div className="flex-1 overflow-hidden p-2">
        <div className="mb-2 flex cursor-pointer items-center border-b border-gray-300 pb-1">
          <Link
            className="flex"
            href={`/search/shop?query=${encodeURIComponent(query)}`}
            prefetch={false}
          >
            <span className="material-symbols-outlined shrink-0">
              storefront
            </span>
            <Text size="sm" className="ml-1 shrink-0">
              상점 검색 {'>'}
            </Text>
            <Text size="sm" color="red" className="mx-1 truncate">
              {query}
            </Text>
            <Text size="sm" color="gray" className="shrink-0">
              상점명으로 검색
            </Text>
          </Link>
        </div>
        {keyWords.length === 0 ? (
          <div className="flex h-full items-center justify-center">
            <Text color="gray" size="sm">
              추천 검색어가 없습니다
            </Text>
          </div>
        ) : (
          <div className="h-full overflow-scroll pb-8">
            {keyWords.map((keyword) => (
              <div key={keyword}>
                <Link
                  href={`/search?query=${encodeURIComponent(keyword)}`}
                  prefetch={false}
                >
                  <Text size="sm">{keyword}</Text>
                </Link>
                <a
                  onClick={() => {
                    addRecentKeywords(keyword);
                    handleClose();
                  }}
                  className="my-1 block cursor-pointer truncate"
                >
                  <Text size="sm">{keyword}</Text>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex h-8 items-center justify-end bg-gray-100 px-2">
        <Text size="sm" onClick={handleClose} className="cursor-pointer">
          닫기
        </Text>
      </div>
    </div>
  );
};

export default AutoComplete;
