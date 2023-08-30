const ignoredRoutePatterns = [
  "**/.*",
  "**/components/**",
  "**/integration/*.test.*",
];

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  //Our convention is to not consider anything under the routes/**/components to be a route.
  ignoredRouteFiles: ignoredRoutePatterns,
  serverDependenciesToBundle: [/^marked.*/],
  tailwind: true,
  serverModuleFormat: "cjs",
};
