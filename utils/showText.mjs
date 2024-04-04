import chalk from 'chalk';

export function showText(bio, color = 'green') {
    console.log(chalk[color](`${bio}`));
}