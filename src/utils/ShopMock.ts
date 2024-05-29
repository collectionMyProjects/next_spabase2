import { faker } from '@faker-js/faker';

import { Shop } from '@/types';

export function getMockShopData(defaultValue?: Partial<Shop>) {
  const data: Shop = {
    id: defaultValue?.id ?? faker.string.uuid(),
    name: defaultValue?.name ?? faker.internet.displayName(),
    imageUrl: defaultValue?.imageUrl ?? faker.image.dataUri(),
    introduce: defaultValue?.introduce ?? faker.lorem.sentences(3, '\n'),
    createdAt: defaultValue?.createdAt ?? faker.date.past().toString(),
  };
  return data;
}
