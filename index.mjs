#!/usr/bin/env node
import { cliHeader } from "./utils/cliHeader.mjs";
import { showHeading } from "./utils/showHeading.mjs";
import { msg } from "./messages.mjs";
import { addSpace } from "./utils/addSpace.mjs";

async function start() {
  const messages = await msg();

  cliHeader();
  showHeading(messages.welcome, "green");
  addSpace();
  showHeading("===================================================", "green");
  showHeading("RECENT POSTS:", "green");
  messages.recentPosts();
  showHeading("===================================================", "green");

  addSpace();
}

start();
