import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components/common';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: '버튼임',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultText: Story = {
  args: {
    size: 'md',
    color: 'black',
    outline: false,
    isLoading: false,
    fullWidth: false,
  },
};
