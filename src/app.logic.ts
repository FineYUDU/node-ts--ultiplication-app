import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

const { b:base, l:limit, s:show } = yarg;

let outputMessage:string = '';

const headerMessage:string = `
==============================
        Tabla del ${base}
==============================\n
`;

for (let i = 1; i <= limit; i++) {
    outputMessage += `${ base } x ${ i } = ${ base * i }\n`;
}

outputMessage = show ? outputMessage = headerMessage + outputMessage : outputMessage = '';
if(show) {
    console.log(outputMessage);
}

const outputPath = `ouputs`;

fs.mkdirSync( outputPath, { recursive: true });
fs.writeFileSync(`${ outputPath }/tabla-${ base }.txt`, outputMessage);
console.log('File created!');