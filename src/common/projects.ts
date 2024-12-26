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
  siteUrl: "https://quantumwarp.github.io/fractal-viewer/",
  githubUrl: "https://github.com/QuantumWarp/fractal-viewer",
  image: "/app/fractal-viewer.png",
  darkModeImage: "/app/fractal-viewer-dark.png",
  technologies: ["angular", "nodejs"]
}, {
  name: "Tabletop Assistant",
  description: "For use in tabletop RPGs such as D&D, allows simple stat and item tracking alongside dice rolling.",
  siteUrl: "https://quantumwarp.github.io/tabletop-assistant/",
  githubUrl: "https://github.com/QuantumWarp/tabletop-assistant",
  image: "/app/tabletop-assistant.png",
  darkModeImage: "/app/tabletop-assistant-dark.png",
  technologies: ["react", "redux"]
}, {
  name: "MTG Card Creator",
  description: "Custom MTG cards rendered almost completely with CSS and HTML.",
  siteUrl: "https://quantumwarp.github.io/mtg-card-creator/",
  githubUrl: "https://github.com/QuantumWarp/mtg-card-creator",
  image: "/app/mtg-card-creator.png",
  darkModeImage: "/app/mtg-card-creator-dark.png",
  technologies: ["react"]
}, {
  name: "Stitch Patterns",
  description: "Create and save new knitting patterns. Track knitting progress with the row counter and timer.",
  siteUrl: "https://quantumwarp.github.io/stitch-patterns/",
  githubUrl: "https://github.com/QuantumWarp/stitch-patterns",
  image: "/app/stitch-patterns.png",
  darkModeImage: "/app/stitch-patterns-dark.png",
  technologies: ["vue"]
}, {
  name: "Satisfactory Planner",
  description: "Allows the creation of clear and readable factory plans.",
  siteUrl: "https://quantumwarp.github.io/satisfactory-planner/",
  githubUrl: "https://github.com/QuantumWarp/satisfactory-planner",
  image: "/app/satisfactory-planner.png",
  darkModeImage: "/app/satisfactory-planner-dark.png",
  technologies: ["react", "react-flow"]
}, {
  name: "eBook Library",
  description: "Scan and store ebooks. Initially created for scanning some books of mine that were falling apart.",
  siteUrl: "https://quantumwarp.github.io/ebook-library/",
  githubUrl: "https://github.com/QuantumWarp/ebook-library",
  image: "/app/ebook-library.png",
  darkModeImage: "/app/ebook-library-dark.png",
  technologies: ["react"]
}, {
  name: "Life Counter",
  description: "A simple app for tracking life totals or scores for various games.",
  siteUrl: "https://quantumwarp.github.io/life-counter/",
  githubUrl: "https://github.com/QuantumWarp/life-counter",
  image: "/app/life-counter.png",
  technologies: ["react"]
}, {
  name: "Text Adventure",
  description: "An example of a text based game. Currently just a POC without a complete story.",
  siteUrl: "https://quantumwarp.github.io/text-adventure/",
  githubUrl: "https://github.com/QuantumWarp/text-adventure",
  image: "/app/text-adventure.png",
  technologies: ["react"]
}];