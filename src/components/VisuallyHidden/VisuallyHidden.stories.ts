import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import ".";
import { VisuallyHidden } from "./index.js";

interface CustomArgs extends VisuallyHidden {
  content?: string;
}

const meta = {
  component: "mox-visually-hidden",
  args: {
    content: "This text is only visible in the accessibility tree.",
  },
  render: (args) => html`
    <mox-visually-hidden ?focusable=${args.focusable}>
      <a href="#">${args.content}</a>
    </mox-visually-hidden>
  `,
} satisfies Meta<CustomArgs>;
export default meta;

export const Primary: StoryObj = {};
export const Focusable: StoryObj = { args: { focusable: true } };
