import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

/**
 * @tag mox-visually-hidden
 * @summary Visually hide content, while still rendering it in the accessibility tree
 *
 * @slot - Any content intended to be hidden visually
 *
 * @link https://github.com/h5bp/html5-boilerplate/blob/master/dist/css/main.css
 * @link http://snook.ca/archives/html_and_css/hiding-content-for-accessibility
 * @link https://www.drupal.org/node/897638
 */
@customElement("mox-visually-hidden")
export class VisuallyHidden extends LitElement {
  /**
   * @attr focusable - Should contents be focusable?
   */
  @property({ type: Boolean })
  focusable = false;

  static styles = css`
    ::slotted(*) {
      border: 0;
      clip: rect(0, 0, 0, 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    .focusable:active,
    .focusable:focus {
      clip: auto;
      height: auto;
      margin: 0;
      overflow: visible;
      position: static;
      white-space: normal;
      width: auto;
    }
  `;

  render() {
    const classes = {
      focusable: this.focusable,
    };
    return html`<slot class=${classMap(classes)}></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mox-visually-hidden": VisuallyHidden;
  }
}
