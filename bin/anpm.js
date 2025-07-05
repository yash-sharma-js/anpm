#!/usr/bin/env node

const { Command } = require("commander");
const { setPreset, getPreset } = require("../lib/config");
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
    console.log(`✅ Preset "${options.name}" saved with tools: ${options.tools.join(", ")}`);
  });


program
  .argument("<preset>", "Preset name to use")
  .description("Create a project using a saved preset")
  .action((preset) => {
    const tools = getPreset(preset);
    if (!tools) {
      console.error(`❌ Preset "${preset}" not found`);
      process.exit(1);
    }
    console.log(`🚀 Creating project with preset "${preset}": ${tools.join(", ")}`);
    // TODO: call installer here
});


program.parse(process.argv);
