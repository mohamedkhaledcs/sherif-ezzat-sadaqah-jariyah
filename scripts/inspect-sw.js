const fs = require("fs");
const s = fs.readFileSync("public/sw.js", "utf8");
const urls = [...s.matchAll(/url:"([^"]+)"/g)].map((m) => m[1]);
const interesting = urls.filter((u) =>
  /png|woff|manifest|bg-site|icon|\.css|\.js$|\/$/.test(u),
);
console.log(interesting.join("\n"));
console.log("TOTAL", urls.length);
