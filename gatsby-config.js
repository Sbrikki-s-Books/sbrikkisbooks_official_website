module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    siteUrl: "https://mike-cheek.github.io/sbrikkisbooks",
    title: "Sbrikki's Books",
    titleTemplate: "%s | Sbrikki's Books",
    description:
      "Sbrikki's Books is an apolitical book club for everyone. The main aim is the growth of every member from a cultural point of view. We also drink.",
    url: "https://Mike-cheek.github.io/sbrikkisbooks", // No trailing slash allowed!
    image: "/icon.png", // Path to the image placed in the 'static' folder, in the project's root directory.
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: "./src/assets/",
      },
      __key: "assets",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-plugin-sitemap",
  ],
};
