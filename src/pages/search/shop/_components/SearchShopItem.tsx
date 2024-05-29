import { useEffect, useState } from 'react';

import { getShopFollowerCount } from '@/api/Shop/getShopFollowerCount';
import { getShopProductCount } from '@/api/Shop/getShopProductCount';
import { Shop, Spinner } from '@/components/common';

type SearchShopItemProps = {
  name: string;
  id: string;
  profileImageUrl?: string;
};

const SearchShopItem = ({ id, name, profileImageUrl }: SearchShopItemProps) => {
  const [followerCount, setFollowerCount] = useState<number | undefined>();
  const [productCount, setProductCount] = useState<number | undefined>();

  useEffect(() => {
    (async () => {
      const [{ data: followerCount }, { data: productCount }] =
        await Promise.all([getShopFollowerCount(id), getShopProductCount(id)]);

      setFollowerCount(followerCount);
      setProductCount(productCount);
    })();
  }, [id]);

  if (followerCount === undefined || productCount === undefined) {
    return (
      <div className="flex h-28 items-center justify-center border border-gray-300">
        <Spinner size="sm" />
      </div>
    );
  }

  return (
    <div className="border-grey-300 border p-5">
      <Shop
        type="row"
        name={name}
        productCount={followerCount}
        followerCount={productCount}
        profileImageUrl={profileImageUrl}
      />
    </div>
  );
};

export default SearchShopItem;
