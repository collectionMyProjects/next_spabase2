import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';

import { ShopProfileImage } from '@/components/common';

const meta = {
  title: 'ShopProfileImage',
  component: ShopProfileImage,
  tags: ['autodocs'],
} satisfies Meta<typeof ShopProfileImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultShopProfileImage: Story = {};

export const HaveProfileImage: Story = {
  args: {
    imageUrl: faker.image.avatar(),
  },
};
