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
		info: "All OK",
	 timeOut: 9000,
  },
};
export const PrimaryError: Story = {
  args: {
    type: "error",
    info: "Error",
    timeOut: 5000,
  },
};
export const PrimaryInfo: Story = {
  args: {
    type: "info",
    info: "Info",
    timeOut: 5000,
  },
};
