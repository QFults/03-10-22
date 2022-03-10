// const chalk = require('chalk')

// console.log(chalk.blue('Hello World!'))
// console.log(chalk.bgYellow(chalk.red('WOW')))

const inquirer = require('inquirer')

inquirer.prompt([
  {
    type: 'input',
    name: 'username',
    message: 'What is your username'
  },
  {
    type: 'list',
    name: 'game',
    message: 'Which game is best game?',
    choices: ['Elden Ring', 'Red Dead Redemption 2', 'Power Wash Simulator', 'Witcher 3', 'Halo 3']
  }
])
  .then(answers => {
    console.log(answers)
  })
  .catch(err => console.log(err))
