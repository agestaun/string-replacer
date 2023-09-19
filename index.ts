import * as fs from "fs";
import * as path from "path";
import {transformKey, flattenFiles, replaceKeyEverywhere} from "./ReplacerUtils";

const srcProjectPath = '/path/to/project'; // Replace to use your path.
const translationsPath = srcProjectPath.concat('/translations'); // Concats the translations' directory.
const i18BaseNameFile = 'en/en.json';
const fullPath = path.resolve(translationsPath.concat('/', i18BaseNameFile));

// 1. Flatten all the translation files.
flattenFiles(translationsPath);

const object = JSON.parse(fs.readFileSync(fullPath, 'utf8'));

console.log('👁 ', Object.keys(object).length, 'keys found in', fullPath);
console.log('🏁 There we go!');

for (const key in object) {
    const formattedKey = transformKey(key);

    if (key !== formattedKey) {
        console.log('🔑', `"${key}"`, ' ---> ', `"${formattedKey}"`);

        // 2. Replace the keys in the translations files.
        const keyWithQuotes = `"${key}"`;
        const formattedKeyWithQuotes = `"${formattedKey}"`;
        replaceKeyEverywhere(keyWithQuotes, formattedKeyWithQuotes, translationsPath, true);

        // 3. Replace the keys in the rest of the places.
        const i18Key = `'${key}'`;
        const i18FormattedKey = `'${formattedKey}'`;
        replaceKeyEverywhere(i18Key, i18FormattedKey, srcProjectPath, true);
    }
};

console.log('✅ Done');
