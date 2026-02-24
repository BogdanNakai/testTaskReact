import type { Meta, StoryObj } from "@storybook/react-vite";
import { Feedback } from "../components/Feedback/Feedback";

const meta = {
  title: "Example/Feedback",
  component: Feedback,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Feedback>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimarySuccess: Story = {
  args: {
    type: "success",
    message: "Success",
    duration: 5000,
    showCloseButton: true,
  },
};
export const PrimaryError: Story = {
  args: {
    type: "error",
    message: "Error",
    duration: 5000,
    showCloseButton: true,
  },
};
export const PrimaryInfo: Story = {
  args: {
    type: "info",
    message: "Info",
    duration: 5000,
    showCloseButton: true,
  },
};