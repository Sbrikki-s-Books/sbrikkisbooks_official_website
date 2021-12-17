
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-jsx": preferDefault(require("/home/mike/Developing/sbrikkisbooks_official_website/src/pages/404.jsx")),
  "component---src-pages-home-jsx": preferDefault(require("/home/mike/Developing/sbrikkisbooks_official_website/src/pages/home.jsx")),
  "component---src-pages-index-js": preferDefault(require("/home/mike/Developing/sbrikkisbooks_official_website/src/pages/index.js")),
  "component---src-pages-king-jsx": preferDefault(require("/home/mike/Developing/sbrikkisbooks_official_website/src/pages/king.jsx")),
  "component---src-pages-spotify-jsx": preferDefault(require("/home/mike/Developing/sbrikkisbooks_official_website/src/pages/spotify.jsx")),
  "component---src-pages-stats-jsx": preferDefault(require("/home/mike/Developing/sbrikkisbooks_official_website/src/pages/stats.jsx"))
}

