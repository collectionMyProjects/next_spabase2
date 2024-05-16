import type { Meta, StoryObj } from '@storybook/react';

import Text from './Text';

const meta = {
  title: 'Example/Button',
  component: Text,
  tags: ['autodocs'],
  args: {
    children: 'Hello, World!',
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultText: Story = {
  args: {
    size: 'md',
    color: 'black',
    weight: 'normal',
  },
};

export const SizedText: Story = {
  args: { size: '4xl' },
};

export const ColoredText: Story = {
  args: { color: 'red' },
};

export const WeightedText: Story = {
  args: { weight: 'bold' },
};
