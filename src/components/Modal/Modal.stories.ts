import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import ".";

const meta: Meta = {
  component: "mox-modal",
};
export default meta;

export const Primary: StoryObj = {
  render: () => html`
    <button
      type="button"
      @click=${() => document.querySelector("mox-modal")?.showModal()}
    >
      Open Modal
    </button>
    <mox-modal>
      <h1 slot="title">Modal title</h1>
      <p slot="body">And this is some content</p>
    </mox-modal>
  `,
};
