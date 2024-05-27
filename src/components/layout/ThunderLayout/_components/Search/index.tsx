import classNames from 'classnames';
import { useState } from 'react';

import AutoComplete from './AutoComplete';
import Recent from './Recent';

import { addRecentKeywords } from '@/utils/localstorage';

export default function Search() {
  const [search, setSearch] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <div className="w-96 border-2 border-red-500 px-4 py-2">
        <form
          className="flex justify-between"
          onSubmit={(e) => {
            e.preventDefault();
            // 최근 검색어 추가
            addRecentKeywords(search);
            setSearch('');
          }}
        >
          <input
            className="w-full text-sm font-light outline-0"
            type="text"
            placeholder="상품명, 상점명 입력"
            value={search}
            onFocus={() => setIsFocused(true)}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="flex items-center justify-center">
            <span className="material-symbols-outlined">search</span>
          </button>
        </form>
      </div>
      <div
        className={classNames(
          'absolute w-full bg-white border border-grey-300 mt-2 h-96',
          { hidden: !isFocused },
        )}
      >
        {search ? (
          <AutoComplete query={search} onClose={() => setIsFocused(false)} />
        ) : (
          <Recent onClose={() => setIsFocused(false)} />
        )}
      </div>
    </div>
  );
}
