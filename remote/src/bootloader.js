import Vue from "vue";
import "./index.css";

import App from "./App.vue";

new Vue({
  el: "#app",
  template: "<App/>",
  components: { App }
});

import wrap from "@vue/web-component-wrapper";

import Footer from "./Footer.vue";
import Description from "./Description.vue";
import Navbar from "./Navbar.vue";

window.customElements.define("my-footer", wrap(Vue, Footer));
window.customElements.define("my-description", wrap(Vue, Description));
window.customElements.define("my-navbar", wrap(Vue, Navbar));
