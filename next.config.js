/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["links.papareact.com"],
  },

  env: {
    mapbox_key:
      "pk.eyJ1IjoicmF0aGVzaGFuMDMiLCJhIjoiY2wxcDFwNGo5MDF3dDNrbnlybnI5d29qMCJ9.eDRKnF5S4CjUGdQBl8ndcQ",
  },
};
