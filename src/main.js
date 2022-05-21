import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home";
import Inbox from "./components/Inbox";
import Sent from "./components/Sent";
import Trash from "./components/Trash";
import store from "./store";
import "vue-universal-modal/dist/index.css";
import VueUniversalModal from "vue-universal-modal";

const routes = [
  { path: "/", alias: "/inbox", component: Inbox, name: "inbox" },
  { path: "/sent", component: Sent, name: "sent" },
  { path: "/trash", component: Trash, name: "trash" },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(),
  routes,
});
const app = createApp(Home).use(router);

app.use(store);
app.use(router);
app.mount("#app");
app.use(VueUniversalModal, {
  teleportTarget: "#modals",
});
