import { LifeCycles, registerApplication, start } from "single-spa";

registerApplication({
  name: '@delivery-drink/login',
  app: () => System.import<LifeCycles>('@delivery-drink/login'),
  activeWhen: (location) => location.pathname === "/login",
});

registerApplication({
  name: '@delivery-drink/eventos',
  app: () => System.import<LifeCycles>('@delivery-drink/eventos'),
  activeWhen: (location) => location.pathname === "/eventos",
});

start({
  urlRerouteOnly: true,
});
