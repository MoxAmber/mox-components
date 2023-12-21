import { LitElement, css, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";

/**
 * An accessible modal dialog component with click-outside behaviour
 *
 * @tag mox-modal
 *
 * @slot title - A title to display in the Modal header
 * @slot - Modal body content
 *
 * @part dialog - The base dialog element
 * @part close - The close button
 * @part container - The inner container div
 *
 * @fires {Event} close - Fires when the modal is closed
 */
@customElement("mox-modal")
export class Modal extends LitElement {
  /**
   * Inner dialog element
   * @internal
   */
  @query("dialog")
  protected _dialogEl!: HTMLDialogElement;

  /**
   * Whether the modal is open and available for interaction
   */
  @property({ attribute: false })
  open = false;

  /**
   * The return value of the modal, either from Modal.close(returnValue) or
   * submitting <form method='dialog'>
   */
  @property({ attribute: false })
  returnValue = "";

  static styles = css`
    dialog {
      padding: 0px;
    }
    .container {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: 16px;
    }
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
      <dialog
        part="dialog"
        @click=${this._onClickOutside}
        @close=${this._onClose}
      >
        <div class="container" part="container">
          <header>
            <slot name="title"></slot>
            <button
              type="button"
              part="close"
              aria-label="Close"
              @click=${this.close}
            >
              X
            </button>
          </header>
          <slot></slot>
        </div>
      </dialog>
    `;
  }

  /**
   * Show the modal. Everything outside the modal is inert
   */
  showModal() {
    this._dialogEl.showModal();
    this.open = true;
  }

  /**
   * Close the modal, optionally setting the returnValue
   * @param {string} returnValue - The return value to set
   */
  close(returnValue?: string) {
    this._dialogEl.close(returnValue);
  }

  /**
   * Click outside handler.
   * If the event target is the dialog element, the user is clicking
   * on the backdrop, as content within the dialog container will block
   * the click event.
   *
   * @internal
   * @param {MouseEvent} e - A click event
   */
  private _onClickOutside(e: MouseEvent) {
    if (e.target === e.currentTarget) {
      this.close();
    }
  }

  /**
   * Close handler
   *
   * @internal
   * @param {Event} e - Close event
   */
  private async _onClose(e: Event) {
    this.open = false;
    this.returnValue = (e.target as HTMLDialogElement).returnValue;
    await this.updateComplete;
    this.dispatchEvent(
      new Event("close", {
        composed: true,
      }),
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mox-modal": Modal;
  }
}
