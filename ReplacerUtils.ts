import * as fs from "fs";
const glob = require("glob");
const flatten = require('flat');

const replace = require("replace");

/**
 * RECURSIVE.
 * Replaces the key with the replacement in the received path.
 * @param key
 * @param replacement
 * @param path
 * @param recursive
 */
export const replaceKeyEverywhere = (key: string, replacement: string, path: string, recursive = false) => {
    replace({
        regex: key,
        replacement,
        paths: [path],
        recursive,
        silent: false,
    });
}

/**
 * Makes sure that the key uses the desired format. Change these statements to change the format.
 * @param key The key to format.
 */
export const transformKey = (key: string): string => {
    let newKey = key.replace('COMMON_', '');
    newKey = newKey.replace(/([a-z])([A-Z])/g, '$1_$2');
    newKey = newKey.toLowerCase();
    return newKey;
}

/**
 * Flattens all the translation jsons.
 */
export const flattenFiles = (path: string) => {
    glob(path + "/**/*.json", { absolute: true }, (error: object | null, filePaths: string[]) => {
        filePaths.forEach((filePath) => {
            const jsonObject = JSON.parse(fs.readFileSync(filePath, 'utf8'));
            const flattenJsonObject = flatten(jsonObject);
            fs.writeFileSync(filePath, JSON.stringify(flattenJsonObject, null, 2));
        })
    })
}
