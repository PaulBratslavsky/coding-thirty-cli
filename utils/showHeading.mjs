import chalk from 'chalk';

export function showHeading(bio, color = 'green') {
    console.log(chalk[color].bold(`${bio}`) + '\n');
}

export default showHeading;