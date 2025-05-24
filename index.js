#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();


program
    .name('anpm')
    .description('A CLI tool for auto installing npm packages')
    .version('1.0.0');

program
  .command('set <set...>')
  .description('Install a set of npm packages')
  .action((set) => {
    // Logic goes here
    set.forEach((pkg) => {
        console.log(`Installing ${pkg}...`);
    });
});

program.parse(process.argv);


// #!/usr/bin/env ts-node
// const { Command } = require('commander');
// const program = new Command();

// program
//   .name('mycli')
//   .description('My awesome CLI')
//   .version('1.0.0');

// program
//   .command('greet <name>')
//   .description('Greet someone')
//   .option('-u, --uppercase', 'Uppercase the greeting')
//   .action((name, options) => {
//     let message = `Hello, ${name}!`;
//     if (options.uppercase) {
//       message = message.toUpperCase();
//     }
//     console.log(message);
//   });

// program.parse(process.argv);


