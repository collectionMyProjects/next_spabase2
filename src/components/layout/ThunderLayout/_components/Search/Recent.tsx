import { useEffect, useRef, useState } from 'react';

import { Text } from '@/components/common';
import { useOutSideClick } from '@/hooks';
import { clearRecentKeywords, getRecentKeyWords } from '@/utils/localstorage';

type RecentProps = {
  onClose: () => void;
};

const Recent = ({ onClose }: RecentProps) => {
  const [recents, setRecents] = useState([]);

  useEffect(() => {
    const recents = getRecentKeyWords();

    setRecents(recents);
  }, []);

  const closeRef = useRef(null);
  useOutSideClick(closeRef, onClose);

  return (
    <div className="flex h-full flex-col" ref={closeRef}>
      <div className="flex-1 overflow-hidden p-2">
        <div className="mb-2 border-b border-red-500 pb-1">
          <Text size="sm" color="red" weight="bold">
            최근 검색어
          </Text>
        </div>
        {recents.length === 0 ? (
          <div className="flex h-full items-center justify-center">
            <Text color="gray" size="sm">
              최근 검색어가 없습니다
            </Text>
          </div>
        ) : (
          <div className="h-full overflow-scroll pb-8">
            {recents.map((recent, idx) => (
              <Text size="sm" key={idx} className="my-1 block truncate">
                {recent}
              </Text>
            ))}
          </div>
        )}
      </div>
      <div className="flex h-8 items-center justify-between bg-gray-100 px-2">
        <Text
          size="sm"
          className="cursor-pointer"
          onClick={clearRecentKeywords}
        >
          검색어 전체삭제
        </Text>
        <Text size="sm" onClick={onClose} className="cursor-pointer">
          닫기
        </Text>
      </div>
    </div>
  );
};

export default Recent;
