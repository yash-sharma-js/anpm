const typeCommands = {
  react: "npx create-react-app .",
  angular: "npx @angular/cli new .",
  vite: "npm create vite@latest .",
  npm: "npm init -y"
};

function getTypeCommand(type) {
  return typeCommands[type] || null;
}

module.exports = { getTypeCommand };
