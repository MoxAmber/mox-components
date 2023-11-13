import { LitElement, css, html } from "lit";
import { customElement, query } from "lit/decorators.js";

/**
 * @tag mox-modal
 * @summary An accessible modal dialog component with click-outside behaviour
 *
 * @slot title - A title to display in the Modal header
 * @slot - Modal body content
 *
 * @part dialog - the containing dialog element
 * @part close - the close button
 *
 */
@customElement("mox-modal")
export class Modal extends LitElement {
  /**
   * @internal
   */
  @query("dialog")
  protected _dialogEl!: HTMLDialogElement;

  static styles = css`
    header {
      display: grid;
      grid-template-columns: 1fr min-content;
      gap: 1em;
      align-items: center;
    }
    button {
      min-width: 24px;
      min-height: 24px;
      grid-column: 2;
    }
  `;

  render() {
    return html`
      <dialog part="dialog" @click=${(e: MouseEvent) => this._clickOutside(e)}>
        <header>
          <slot name="title"></slot>
          <button
            type="button"
            part="close"
            aria-label="Close"
            autofocus
            @click=${() => this.close()}
          >
            X
          </button>
        </header>
        <slot></slot>
      </dialog>
    `;
  }

  showModal() {
    this._dialogEl.showModal();
  }

  close(returnValue?: string) {
    this._dialogEl.close(returnValue);
  }

  private _clickOutside(e: MouseEvent) {
    if (e.target === this._dialogEl) {
      this.close();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mox-modal": Modal;
  }
}
