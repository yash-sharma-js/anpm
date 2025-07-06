const { execSync } = require("child_process");
const ora = require("ora");
const chalk = require("chalk");
const { getTypeCommand } = require("./utils")

function createProject(name, type, tools = []) {
  console.log(chalk.blue(`🚀 Setting up project in current folder (${process.cwd()})`));

  const initCommand = getTypeCommand(type);

  if (!initCommand) {
    console.error(chalk.red(`❌ Unknown project type: ${type}`));
    process.exit(1);
  }

  const spinner = ora(`Running ${type} setup`).start();
  execSync(initCommand, { stdio: "inherit" });
  spinner.succeed(chalk.green(`${type} project initialized`));

  if (tools.length > 0) {
    const spinner2 = ora(`Installing additional tools: ${tools.join(", ")}`).start();
    execSync(`npm install ${tools.join(" ")}`, { stdio: "inherit" });
    spinner2.succeed(chalk.green("Additional tools installed"));
  }

  console.log(chalk.green(`✅ Project "${name}" ready in ${process.cwd()}`));
}

module.exports = {
  createProject,
};