const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const ora = require("ora");
const chalk = require("chalk");




function createProject(name, tools) {
  const projectPath = path.resolve(process.cwd(), name);

  if (fs.existsSync(projectPath)) {
    console.error(chalk.red(`❌ Folder "${name}" already exists`));
    process.exit(1);
  }

  console.log(chalk.blue(`📂 Creating folder: ${name}`));
  fs.mkdirSync(projectPath);

  process.chdir(projectPath);

  const spinner = ora("Initializing npm").start();
  execSync("npm init -y", { stdio: "ignore" });
  spinner.succeed("npm initialized");

  const spinner2 = ora(`Installing tools: ${tools.join(", ")}`).start();
  execSync(`npm install ${tools.join(" ")}`, { stdio: "inherit" });
  spinner2.succeed(chalk.green("Tools installed"));

  console.log(chalk.green(`✅ Project "${name}" created successfully!`));
}



module.exports = {
  createProject,
};
