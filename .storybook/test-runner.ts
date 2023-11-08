import type { TestRunnerConfig } from "@storybook/test-runner";
import { checkA11y, injectAxe } from "axe-playwright";

const a11yConfig: TestRunnerConfig = {
  async preRender(page) {
    await injectAxe(page);
  },
  async postRender(page) {
    // Accessibility testing with axe-playwright
    await checkA11y(page, "#storybook-root", {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });
    // Snapshot testing
    const elementHandler = await page.$("#storybook-root");
    const innerHTML = await elementHandler?.innerHTML();
    expect(innerHTML).toMatchSnapshot();
  },
};

export default a11yConfig;
