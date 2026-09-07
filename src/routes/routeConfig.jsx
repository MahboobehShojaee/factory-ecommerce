import { lazy } from "react";

export const lazyPages = {
  Home: lazy(() => import("../pages/Home.jsx")),
  Products: lazy(() => import("../pages/Products.jsx")),
  CategorySpecs: lazy(() => import("../pages/CategorySpecs.jsx")),
  About: lazy(() => import("../pages/About.jsx")),
  Contact: lazy(() => import("../pages/Contact.jsx")),
  ProjectDetails: lazy(() => import("../pages/ProjectDetails.jsx")),
  Cart: lazy(() => import("../pages/Cart.jsx")),
  Blog: lazy(() => import("../pages/Blog.jsx")),
  Article: lazy(() => import("../pages/Article.jsx")),
  NotFound: lazy(() => import("../pages/NotFound.jsx")),
};

export const appRoutes = [
  { path: "/products", page: "Products" },
  { path: "/products/:category/specifications", page: "CategorySpecs" },
  { path: "/about", page: "About" },
  { path: "/contact", page: "Contact" },
  { path: "/cart", page: "Cart" },
  { path: "/projects/:slug", page: "ProjectDetails" },
  { path: "/blog", page: "Blog" },
  { path: "/blog/:slug", page: "Article" },
];
