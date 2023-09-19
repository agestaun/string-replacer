# String Replacer

Small project to format the translations strings using https://github.com/ALMaclaine/replace.

### How to run it?

Run the following command line.
>npm run

### What does it do?
It replaces any string key to use lowercase, separate the strings by underscore and remove "COMMON" prefix. Here's an example:
>BEFORE: COMMON_helloWorld: "Hello Wordl!"

>AFTER: hello_word: "Hello Wordl!"

⚠️ It will change the keys everywhere, not just in translation files but also wherever they are used in the project. Make sure there are no errors before applying the changes to production.

#### Author
Adrian Garcia
