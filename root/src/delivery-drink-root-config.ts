import { LifeCycles, registerApplication, start } from "single-spa";

registerApplication({
  name: '@delivery-drink/login',
  app: () => System.import<LifeCycles>('@delivery-drink/login'),
  activeWhen: ['/'],
});

start({
  urlRerouteOnly: true,
});
