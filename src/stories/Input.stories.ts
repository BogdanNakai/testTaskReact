import type { Meta, StoryObj } from '@storybook/react-vite';

// import { fn } from 'storybook/test';

import { Input } from './Input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  // args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Input',  
    type: "text",
    placeholder: 'Введи текст',
    clearable: true,
  },
};

export const PrimaryText: Story = {
  args: {
    type: "text",
    label: 'InputText',
    placeholder: 'Text',
    clearable: true,
  },
};
export const PrimaryPassword: Story = {
  args: {
    type: "password",
    label: 'InputPassword',
    placeholder: 'Password',
    clearable: true,
  },
};
export const PrimaryNumber: Story = {
  args: {
    type: "number",
    label: 'InputPassword',
    placeholder: 'Number',
    clearable: true,
  },
};


