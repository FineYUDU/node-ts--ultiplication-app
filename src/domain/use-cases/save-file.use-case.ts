import fs from 'fs';


export interface SaveFileCase {
    execute:( options: Options ) => boolean;
};

export interface Options {
    fileContent :string;
    fileDestination?:string;
    fileName?   :string;
}

export class SaveFile implements SaveFileCase {


    constructor() {}

    execute({
        fileContent,
        fileDestination = 'ouputs',
        fileName = 'table'
    }: Options):boolean {

        try {
            fs.mkdirSync( fileDestination, { recursive: true });
            fs.writeFileSync(`${ fileDestination }/${ fileName }.txt`,fileContent);
            return true;

        } catch (error) {
            console.error(error);
            return false;

        }

    };

}