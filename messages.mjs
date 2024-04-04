import chalk from 'chalk';

import { getData } from "./utils/getData.mjs";
import { settings } from "./settings.mjs";


export async function msg(){
  const { url, path, query, token } = settings;

  const data = await getData(url, path, query, token);

  console.log(data);

  const welcome = `Hi, I am ${chalk.yellow("Paul Bratslavsky")}! Welcome to my CV! \n`;

  function links(links) {
    links.forEach((link) => {
      const capitalizedName =
        link.name.charAt(0).toUpperCase() + link.name.slice(1);
      console.log(
        `${chalk.blue.bold(capitalizedName)}: ${chalk.magenta(link.link)}`
      );
    });
    console.log("\n");
  }

  function resume(resume) {
    resume.forEach((item) => {
      console.log(
        `${chalk.yellow.bold(item.title)} | ${chalk.yellow.bold(item.company)}`
      );
      console.log(
        `Date: ${chalk.magenta(item.startDate)} - ${chalk.magenta(
          item.endDate || "Present"
        )} \n`
      );

      // item.Task.forEach((task) => {
      //   const string = task.description;
      //   const split = 56;
      //   console.log(
      //     chalk.yellow("- ") +
      //       chalk.white(string.slice(0, split)) +
      //       "\n" +
      //       "  " +
      //       chalk.white(string.slice(split) + "\n")
      //   );
      // });
    });
  }

  function recentPosts(posts) {
    posts.data.slice(0, 5).forEach((post) => {
      console.log(
        `${chalk.yellow.bold(post.attributes.title)} \n${chalk.magenta(
          "https://codingafterthirty.com/blog/" + post.attributes.slug
        )}`
      );
      console.log(`${chalk.white(post.attributes.description)} \n`);
    });
  }

  return {
    welcome,
    links: () => links(SocialLink),
    resume: () => resume(ResumeItem),
    recentPosts: () => recentPosts(data),
  };
};


