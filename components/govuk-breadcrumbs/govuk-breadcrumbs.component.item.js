import { html, LitElement } from 'lit-element';
import componentStyles from './govuk-breadcrumbs.styles';

export class BreadcrumbsItemComponent extends LitElement {
  static get properties() {
    return {
      url: { type: String },
      label: { type: String },
    };
  }

  static get styles() {
    return [componentStyles];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`<li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href=${this.url}>${this.label}</a>
    </li>`;
  }
}

customElements.define('govuk-breadcrumbs-item', BreadcrumbsItemComponent);
