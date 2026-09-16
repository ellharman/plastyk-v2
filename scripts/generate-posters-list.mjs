// scripts/generate-posters-manifest.mjs
import fs from "fs";
import path from "path";

const postersDir = path.join(process.cwd(), "public", "img", "posters");
const outFile = path.join(process.cwd(), "public", "data", "posters.json");

const files = fs.readdirSync(postersDir).sort((a, b) => {
  return parseInt(a, 10) - parseInt(b, 10);
});

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(files, null, 2));
console.log(`Wrote ${files.length} posters to ${outFile}`);