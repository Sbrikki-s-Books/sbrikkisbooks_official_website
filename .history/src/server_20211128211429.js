import express, { static } from "express";
import { join } from "path";
import { readFileSync } from "fs";
import seo from "./seo"; // note here
const app = new express();

app.use("/static", static(join(__dirname, "build/static")));

app.get("*", (req, res) => {
  let pathname = req.pathname || req.originalUrl;
  let page = seo.find((item) => item.path === pathname);
  if (page) {
    let html = readFileSync(join(__dirname, "build", "index.html"));
    let htmlWithSeo = html
      .toString()
      .replace("__SEO_TITLE__", page.title)
      .replace("__SEO_DESCRIPTION__", page.description);
    return res.send(htmlWithSeo);
  }
  return res.sendFile(join(__dirname, "build", "index.html"));
});

app.listen(3000, () => {
  console.log("listened on 3000");
});