# String Replacer

Util to format the translations strings using https://github.com/ALMaclaine/replace

### How to run it?

Run the following command line.
>npx ts-node index.ts

### What does it do?
It replaces any string to use lowercase and separate the strings by underscore. Here's an example:
>BEFORE: myStringMessage

>AFTER: my_string_message

⚠️ It will change everywhere, not only in the translation files. Make sure that there is no any error before applying the changes to production. 

#### Author
Adrian Garcia
