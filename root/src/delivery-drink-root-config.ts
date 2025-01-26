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

registerApplication({
  name: '@delivery-drink/produtos',
  app: () => System.import<LifeCycles>('@delivery-drink/produtos'),
  activeWhen: (location) => location.pathname === "/produtos",
});

start({
  urlRerouteOnly: true,
});
