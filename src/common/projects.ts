import { githubProfileUrl, githubSitePrefix } from "./constants";

export type Project = {
  name: string;
  description: string;
  siteUrl?: string;
  githubUrl?: string;
  image: string;
  darkModeImage?: string;
  technologies: string[];
}

export const projects: Project[] = [{
  name: "Fractal Viewer",
  description: "A fractal generator showcasing these complex mathematical structures, allowing zoom and image export.",
  siteUrl: githubSitePrefix + "/fractal-viewer/",
  githubUrl: githubProfileUrl + "/fractal-viewer",
  image: "./app/fractal-viewer.png",
  darkModeImage: "./app/fractal-viewer-dark.png",
  technologies: ["angular", "nodejs"]
}, {
  name: "Tabletop Assistant",
  description: "For use in tabletop RPGs such as D&D, allows simple stat and item tracking alongside dice rolling.",
  siteUrl: githubSitePrefix + "/tabletop-assistant/",
  githubUrl: githubProfileUrl + "/tabletop-assistant",
  image: "./app/tabletop-assistant.png",
  darkModeImage: "./app/tabletop-assistant-dark.png",
  technologies: ["react", "redux"]
}, {
  name: "MTG Card Creator",
  description: "Custom MTG cards rendered almost completely with CSS and HTML.",
  siteUrl: githubSitePrefix + "/mtg-card-creator/",
  githubUrl: githubProfileUrl + "/mtg-card-creator",
  image: "./app/mtg-card-creator.png",
  darkModeImage: "./app/mtg-card-creator-dark.png",
  technologies: ["react"]
}, {
  name: "Stitch Patterns",
  description: "Create and save new knitting patterns. Track knitting progress with the row counter and timer.",
  siteUrl: githubSitePrefix + "/stitch-patterns/",
  githubUrl: githubProfileUrl + "/stitch-patterns",
  image: "./app/stitch-patterns.png",
  darkModeImage: "./app/stitch-patterns-dark.png",
  technologies: ["vue"]
}, {
  name: "Satisfactory Planner",
  description: "Allows the creation of clear and readable factory plans.",
  siteUrl: githubSitePrefix + "/satisfactory-planner/",
  githubUrl: githubProfileUrl + "/satisfactory-planner",
  image: "./app/satisfactory-planner.png",
  darkModeImage: "./app/satisfactory-planner-dark.png",
  technologies: ["react", "react-flow"]
}, {
  name: "eBook Library",
  description: "Scan and store ebooks. Initially created for scanning some books of mine that were falling apart.",
  siteUrl: githubSitePrefix + "/ebook-library/",
  githubUrl: githubProfileUrl + "/ebook-library",
  image: "./app/ebook-library.png",
  darkModeImage: "./app/ebook-library-dark.png",
  technologies: ["react"]
}, {
  name: "Life Counter",
  description: "A simple app for tracking life totals or scores for various games.",
  siteUrl: githubSitePrefix + "/life-counter/",
  githubUrl: githubProfileUrl + "/life-counter",
  image: "./app/life-counter.png",
  technologies: ["react"]
}, {
  name: "Text Adventure",
  description: "An example of a text based game. Currently just a POC without a complete story.",
  siteUrl: githubSitePrefix + "/text-adventure/",
  githubUrl: githubProfileUrl + "/text-adventure",
  image: "./app/text-adventure.png",
  technologies: ["react"]
}];