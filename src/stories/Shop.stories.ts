import type { Meta, StoryObj } from '@storybook/react';

import { Shop } from '@/components/common';

const meta = {
  title: 'Shop',
  component: Shop,
  tags: ['autodocs'],
} satisfies Meta<typeof Shop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultShop: Story = {
  args: {
    name: '상점',
    productCount: 5,
    followerCount: 0,
    type: 'row',
  },
};

export const ColumnShop: Story = {
  args: {
    name: '상점',
    productCount: 5,
    followerCount: 0,
    type: 'column',
  },
};
