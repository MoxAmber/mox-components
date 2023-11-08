import { expect } from "@storybook/jest";
import { waitFor, within } from "@storybook/testing-library";

/* https://github.com/storybookjs/testing-library/issues/24#issuecomment-1593709872 */
export async function withinShadowRoot(element: HTMLElement, selector: string) {
  const webc = element.querySelector(selector);

  if (!webc?.shadowRoot) {
    return within(element);
  }

  await waitFor(
    () => {
      const shadowRootFirstEl = webc?.shadowRoot
        ?.firstElementChild as HTMLElement;
      return expect(shadowRootFirstEl).toContainElement(shadowRootFirstEl);
    },
    { timeout: 1000 },
  );

  // force type HTMLElement to ignore the type checking of the "within" function
  return within(webc.shadowRoot as unknown as HTMLElement);
}
