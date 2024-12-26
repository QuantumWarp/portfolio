export type HistoryEntry = {
  name: string;
  date: string;
  image: string;
  technologies: string[];
}

export const history: HistoryEntry[] = [{
  name: "The Accountancy Partnership",
  date: "Nov 2023",
  image: "./company/tap.webp",
  technologies: ["react", "python", "graphql", "postgres"]
}, {
  name: "Webeo",
  date: "April 2019",
  image: "./company/webeo.png",
  technologies: ["vue", "nodejs", "docker"]
}, {
  name: "Serenity Holidays",
  date: "July 2017",
  image: "./company/serenity-holidays.png",
  technologies: ["c-sharp", "dotnet", "mysql"]
}, {
  name: "Nxtera",
  date: "July 2017",
  image: "./company/nxtera.jpg",
  technologies: ["c-sharp", "dotnet"]
}, {
  name: "Sony",
  date: "2014",
  image: "./company/sony.png",
  technologies: ["java", "linux"]
}, {
  name: "Barclays",
  date: "2013",
  image: "./company/barclays.png",
  technologies: ["c-sharp", "dotnet"]
}, {
  name: "Training at FDM Group",
  date: "2013",
  image: "./company/fdm.png",
  technologies: ["java", "oracle"]
}];
