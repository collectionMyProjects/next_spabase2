import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from '@/components/common';

const meta = {
  title: 'Spinner',
  component: Spinner,
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultText: Story = {
  args: {
    size: 'md',
  },
};
