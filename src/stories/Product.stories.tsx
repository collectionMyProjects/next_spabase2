import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';

import { Product } from '@/components/common';

const meta = {
  title: 'Product',
  component: Product,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '13rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Product>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultProduct: Story = {
  args: {
    title: '샘플 제품',
    price: 50_000,
    createdAt: '2022-02-02',
    imageUrl: faker.image.dataUri(),
  },
};

export const SoldoutProduct: Story = {
  args: {
    title: '샘플 제품',
    price: 50_000,
    createdAt: '2021-01-01',
    imageUrl: faker.image.dataUri(),
    isSoldOut: true,
  },
};
