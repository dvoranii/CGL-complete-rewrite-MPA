import { html, render } from "lit-html";

export default function renderNav() {
  const navContainer = document.getElementById("nav-container");
  const nav = html`
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  `;

  render(nav, navContainer);
}
