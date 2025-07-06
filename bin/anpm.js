#!/usr/bin/env node

const { Command } = require("commander");
const { setPreset, saveConfig, getPreset, loadConfig, removePreset } = require("../lib/config");
const { createProject } = require("../lib/installer");
const chalk = require("chalk");

const program = new Command();

program
  .name("anpm")
  .description("CLI to setup projects with your preferred stack/libraries")
  .version("1.0.0");

program
  .command("set")
  .requiredOption("--name <name>", "Preset name")
  .requiredOption("--type <type>", "Project type (npm/react/angular/vite)")
  .option("-t, --tools <tools...>", "Tools to install")
  .description("Save a preset")
  .action((options) => {
    const config = loadConfig();
    config[options.name] = {
      type: options.type,
      tools: options.tools || []
    };
    saveConfig(config);
    console.log(chalk.green(`✅ Preset "${options.name}" saved with type: ${options.type} and tools: ${options.tools?.join(", ") || "none"}`));
  });


program
  .argument("<preset>", "Preset name to use")
  .description("Create a project using a saved preset")
  .action((preset) => {
    const presetConfig = getPreset(preset);
    if (!presetConfig) {
      console.error(chalk.red(`❌ Preset "${preset}" not found`));
      process.exit(1);
    }

    const { type, tools } = presetConfig;

    console.log(`🚀 Creating project with preset "${preset}" of type "${type}" and tools: ${tools.join(", ") || "none"}`);
    createProject(preset, type, tools);
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
      const preset = config[key];
      console.log(
        chalk.green(`• ${key}: `) +
        chalk.blue(`type: ${preset.type} `) +
        chalk.white(`tools: ${preset.tools.join(", ") || "none"}`)
      );
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
