import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, "../data");

function loadJson(filename) {
  const filePath = path.join(dataDir, filename);
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

let cache = null;

function getCache() {
  if (!cache) {
    cache = {
      projects: loadJson("projects.json"),
      stats: loadJson("stats.json"),
      navigation: loadJson("navigation.json"),
    };
  }
  return cache;
}

export function getProjects() {
  return getCache().projects;
}

export function getProjectBySlug(slug) {
  return getCache().projects.find((p) => p.slug === slug) || null;
}

export function getStats(lang = "en") {
  const stats = getCache().stats;
  return stats[lang] || stats.en;
}

export function getNavigation() {
  return getCache().navigation;
}

export function reloadContentCache() {
  cache = null;
  return getCache();
}
