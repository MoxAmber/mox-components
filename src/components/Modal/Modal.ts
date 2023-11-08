import { LitElement, css, html } from "lit";
import { customElement, query } from "lit/decorators.js";

@customElement("mox-modal")
export class Modal extends LitElement {
  @query("dialog")
  private _dialogEl!: HTMLDialogElement;

  static styles = css`
    dialog {
      padding: 0;
      min-width: 400px;
    }
    .container {
      box-sizing: border-box;
      width: 100%;
      padding: 1em;
    }
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    button {
      /* https://www.w3.org/TR/WCAG22/#target-size-minimum */
      min-width: 24px;
      min-height: 24px;
    }
  `;

  render() {
    return html`
      <dialog @click=${(e: MouseEvent) => this._clickOutside(e)}>
        <div class="container">
          <header>
            <slot name="title"></slot>
            <button @click=${() => this.close()}>X</button>
          </header>
          <slot></slot>
        </div>
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
