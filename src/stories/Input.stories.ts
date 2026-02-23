import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '../components/Input/Input';

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryText: Story = {
  args: {
    type: "text",
    placeholder: 'Text',
    clearable: true,
  },
};
export const PrimaryPassword: Story = {
  args: {
    type: "password",
    placeholder: 'Password',
    clearable: true,
  },
};
export const PrimaryNumber: Story = {
  args: {
    type: "number",
    placeholder: 'Number',
    clearable: true,
  },
};


