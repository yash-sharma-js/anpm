#!/usr/bin/env node

const { Command } = require("commander");
const { setPreset, getPreset, loadConfig, removePreset } = require("../lib/config");
const { createProject } = require("../lib/installer");
const chalk = require("chalk");

const program = new Command();

program
  .name("anpm")
  .description("CLI to setup projects with your preferred stack/libraries")
  .version("1.0.0");

program
  .command("set")
  .description("Save a preset with tools")
  .requiredOption("--name <name>", "Preset name")
  .requiredOption("-t, --tools <tools...>", "List of tools to install")
  .action((options) => {
    setPreset(options.name, options.tools);
    console.log(chalk.green(`✅ Preset "${options.name}" saved with tools: ${options.tools.join(", ")}`));
  });


program
  .argument("<preset>", "Preset name to use")
  .description("Create a project using a saved preset")
  .action((preset) => {
    const tools = getPreset(preset);
    if (!tools) {
      console.error(chalk.red(`❌ Preset "${preset}" not found`));
      process.exit(1);
    }
    console.log(`🚀 Creating project with preset "${preset}": ${tools.join(", ")}`);
    createProject(preset, tools);
  });

  program
  .command("list")
  .description("List all saved presets")
  .action(() => {
    const config = loadConfig();
    const keys = Object.keys(config);
    if (keys.length === 0) {
      console.log(chalk.yellow("⚠️  No presets saved yet."));
      return;
    }
    console.log(chalk.cyan("📄 Saved presets:"));
    keys.forEach((key) => {
      console.log(chalk.green(`• ${key}: `) + chalk.white(config[key].join(", ")));
    });
  });

program
  .command("remove <name>")
  .description("Remove a saved preset")
  .action((name) => {
    removePreset(name);
    console.log(chalk.green(`✅ Preset "${name}" removed successfully`));
  });


program.parse(process.argv);
