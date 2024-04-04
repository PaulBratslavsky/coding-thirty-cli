
import welcome from 'cli-welcome';
import pkgJSON from '../package.json' assert { type: "json" };;


export function cliHeader() {
    console.log(pkgJSON)
    welcome({
        title: pkgJSON.name,
        tagLine: `by ${pkgJSON.author}`,
        version: pkgJSON.version,
        bgColor: `#D800A6`,
        color: `#000000`,
        bold: true,
        clear: true,
    });
} 

