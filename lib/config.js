const fs = require("fs");
const os = require("os");
const path = require("path");

const configPath = path.join(os.homedir(), ".anpm-config.json");

function loadConfig() {
  if (!fs.existsSync(configPath)) {
    return {};
  }
  const raw = fs.readFileSync(configPath, "utf-8");
  return JSON.parse(raw);
}

function saveConfig(config) {
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2), "utf-8");
}

function setPreset(name, tools) {
  const config = loadConfig();
  config[name] = tools;
  saveConfig(config);
}

function getPreset(name) {
  const config = loadConfig();
  return config[name] || null;
}

module.exports = {
  setPreset,
  getPreset,
  loadConfig,
};
