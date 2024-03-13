import { program } from "commander";
import chalk from "chalk";
import init from "./commands/init.js";

program
        .command('init')
        .description('Initialise the MERN stack folder')
        .action(init)

program.parse()