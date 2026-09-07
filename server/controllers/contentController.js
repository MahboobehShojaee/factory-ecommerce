import {
  getProjects,
  getProjectBySlug,
  getStats,
  getNavigation,
} from "../services/contentDataService.js";

export function listProjects(req, res) {
  const { category } = req.query;
  let projects = getProjects();
  if (category) {
    projects = projects.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase(),
    );
  }
  res.json({ data: projects, total: projects.length });
}

export function getProject(req, res) {
  const project = getProjectBySlug(req.params.slug);
  if (!project) {
    return res.status(404).json({ error: "Project not found" });
  }
  res.json({ data: project });
}

export function getHomepageStats(req, res) {
  const lang = req.query.lang === "fa" ? "fa" : "en";
  res.json({ data: getStats(lang) });
}

export function getNavConfig(req, res) {
  res.json({ data: getNavigation() });
}
