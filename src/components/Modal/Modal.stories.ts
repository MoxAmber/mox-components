import { userEvent, within } from "@storybook/testing-library";
import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { withinShadowRoot } from "test-utils/withinShadowRoot";
import ".";

const meta: Meta = {
  component: "mox-modal",
  render: () => html`
    <button
      type="button"
      @click=${() => document.querySelector("mox-modal")?.showModal()}
    >
      Open Modal
    </button>
    <mox-modal>
      <h1 slot="title">Modal title</h1>
      <p>This is some content</p>
      <div style="background: red;"><h2>And so is this</h2></div>
    </mox-modal>
  `,
};
export default meta;

export const Main: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole("button"));
  },
};

export const ClickOutside: StoryObj = {
  play: async (ctx) => {
    await Main.play!(ctx);
    const component = await withinShadowRoot(ctx.canvasElement, "mox-modal");
    const dialog = component.getByRole("dialog");
    await userEvent.pointer([
      { target: dialog, coords: { x: 0, y: 0 } },
      { target: dialog, keys: "[MouseLeft]" },
    ]);
  },
};
