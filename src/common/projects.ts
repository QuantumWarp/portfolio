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
  description: "View, zoom and export images of fractals in this client-side application.",
  siteUrl: "https://quantumwarp.github.io/fractal-viewer/",
  githubUrl: "https://github.com/QuantumWarp/fractal-viewer",
  image: "/app/fractal-viewer.png",
  darkModeImage: "/app/fractal-viewer-dark.png",
  technologies: ["angular", "nodejs"]
}, {
  name: "Stitch Patterns",
  description: "Create and save new knitting patterns. Track knitting progress with the row counter and timer.",
  siteUrl: "https://quantumwarp.github.io/stitch-patterns/",
  githubUrl: "https://github.com/QuantumWarp/stitch-patterns",
  image: "/app/stitch-patterns.png",
  darkModeImage: "/app/stitch-patterns-dark.png",
  technologies: ["vue"]
}, {
  name: "MTG Card Creator",
  description: "",
  siteUrl: "https://quantumwarp.github.io/mtg-card-creator/",
  githubUrl: "https://github.com/QuantumWarp/mtg-card-creator",
  image: "/app/mtg-card-creator.png",
  darkModeImage: "/app/mtg-card-creator-dark.png",
  technologies: ["react"]
}, {
  name: "eBook Library",
  description: "",
  siteUrl: "https://quantumwarp.github.io/ebook-library/",
  githubUrl: "https://github.com/QuantumWarp/ebook-library",
  image: "/app/ebook-library.png",
  darkModeImage: "/app/ebook-library-dark.png",
  technologies: ["react"]
}, {
  name: "Satisfactory Planner",
  description: "",
  siteUrl: "https://quantumwarp.github.io/satisfactory-planner/",
  githubUrl: "https://github.com/QuantumWarp/satisfactory-planner",
  image: "/app/satisfactory-planner.png",
  darkModeImage: "/app/satisfactory-planner-dark.png",
  technologies: ["react", "react-flow"]
}, {
  name: "Tabletop Assistant",
  description: "",
  siteUrl: "https://quantumwarp.github.io/tabletop-assistant/",
  githubUrl: "https://github.com/QuantumWarp/tabletop-assistant",
  image: "/app/tabletop-assistant.png",
  darkModeImage: "/app/tabletop-assistant-dark.png",
  technologies: ["react", "redux"]
}, {
  name: "Life Counter",
  description: "",
  siteUrl: "https://quantumwarp.github.io/life-counter/",
  githubUrl: "https://github.com/QuantumWarp/life-counter",
  image: "/app/life-counter.png",
  technologies: ["react"]
}, {
  name: "Text Adventure",
  description: "",
  siteUrl: "https://quantumwarp.github.io/text-adventure/",
  githubUrl: "https://github.com/QuantumWarp/text-adventure",
  image: "/app/text-adventure.png",
  technologies: ["react"]
}];