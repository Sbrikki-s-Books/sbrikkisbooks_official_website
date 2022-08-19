require('dotenv').config();

module.exports = {
  pathPrefix: '/sbrikkisbooks',
  siteMetadata: {
    siteUrl: 'https://sbrikkisbooks.ga',
    title: "Sbrikki's Books",
    titleTemplate: "%s | Sbrikki's Books",
    description:
      "Sbrikki's Books is an apolitical book club for everyone. The main aim is the growth of every member from a cultural point of view. We also drink.",
    url: 'https://sbrikkisbooks.ga', // No trailing slash allowed!
    image: '/icon.png', // Path to the image placed in the 'static' folder, in the project's root directory.
    defaultImage: '/icon.png',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/icon.png',
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: './src/assets/',
      },
      __key: 'assets',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Merriweather`,
          //`source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        sitemap: 'https://www.sbrikkisbooks.ga/sitemap/sitemap-0.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-realfavicongenerator`,
      options: {
        apiKey: '3ad03ec8f11cfc2e1d930c3fcf838b0072e4dfa5',
        masterPicture: 'src/assets/icon.png',
        appName: "Sbrikki's Books - Book Club",
        startUrl: '/',
        themeColor: '#3d0c0c',
        display: 'standalone',
        defaultBackgroundColor: '#cacaca',
        //defaultMargin: '10%',
        compression: 3,
        scalingAlgorithm: 'Lanczos',
        ios: {
          enabled: true,
          onlyDefaultIcons: false,
          legacyIcons: true,
          precomposedIcons: true,
        },
        windows: {
          enabled: true,
          silhouette: true,
        },
        android: {
          enabled: true,
          legacyIcons: true,
          lowResIcons: true,
        },
        safariPinnedTab: {
          enabled: true,
          threshold: 60,
          silhouette: true,
        },
        openGraph: {
          enabled: true,
          ratio: 'square',
        },
        transformGeneratedManifest: (manifest) => {
          manifest.scope = '/';
          if (manifest.icons) {
            manifest.icons = manifest.icons.map((icon) => {
              return {
                ...icon,
                purpose: 'maskable',
              };
            });
          }

          return manifest;
        },
      },
    },
  ],
};
