import { Text } from '@/components/common';

type AutoCompleteProps = {
  query: string;
  onClose: () => void;
};

const AutoComplete = ({ query, onClose }: AutoCompleteProps) => {
  const keyWords: string[] = [];

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-hidden p-2">
        <div className="mb-2 flex items-center border-b border-gray-300 pb-1">
          <span className="material-symbols-outlined">storefront</span>
          <Text size="sm" className="ml-1">
            상점 검색 {'>'}
          </Text>
          <Text size="sm" color="red" className="mx-1">
            {query}
          </Text>
          <Text size="sm" color="gray">
            상점명으로 검색
          </Text>
        </div>
        {keyWords.length === 0 ? (
          <div className="flex h-full items-center justify-center">
            <Text color="gray" size="sm">
              추천 검색어가 없습니다
            </Text>
          </div>
        ) : (
          <div className="h-full overflow-scroll pb-8">
            {keyWords.map((recent, idx) => (
              <Text size="sm" key={idx} className="my-1 block">
                {recent}
              </Text>
            ))}
          </div>
        )}
      </div>
      <div className="flex h-8 items-center justify-end bg-gray-100 px-2">
        <Text onClick={onClose} className="cursor-pointer">
          닫기
        </Text>
      </div>
    </div>
  );
};

export default AutoComplete;
