import { AxeBuilder } from "@axe-core/playwright";
import { getStoryContext, type TestRunnerConfig } from "@storybook/test-runner";

const testConfig: TestRunnerConfig = {
  async postRender(page, ctx) {
    const storyContext = await getStoryContext(page, ctx);
    const tagName = storyContext.component as string;

    // Accessibility testing with axe-core
    const results = await new AxeBuilder({ page }).include(tagName).analyze();
    expect(results.violations).toEqual([]);

    // Snapshot testing
    const customElement = page.locator(tagName);
    const shadowRootContent = await customElement?.evaluate(
      (node) => node.shadowRoot?.innerHTML,
    );
    expect(shadowRootContent).toMatchSnapshot("shadow DOM");
  },
};

export default testConfig;
