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
    console.log(configPath);
  const config = loadConfig();
  return config[name] || null;
}

function removePreset(name) {
  const config = loadConfig();
  if (!config[name]) {
    console.error(`❌ Preset "${name}" does not exist`);
    process.exit(1);
  }
  delete config[name];
  saveConfig(config);
}


module.exports = {
  setPreset,
  getPreset,
  loadConfig,
  removePreset
};
