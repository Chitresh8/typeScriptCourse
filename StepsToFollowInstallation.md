To Install Typescript:- npm i -g typescript (or) yarn global add typescript (or)  npx tsc --version (or) npm i -g tsc

//To compile the TypeScript file to JavaScript use: tsc filename.ts or npx tsc filename.ts

Installed version :- tsc -v 5.4.4

//For watch mode use: tsc -w(watches for changes in files and re-compiles as needed). Use this tsc --watch index (filename)  

For ts.config file => tsc --init command

//before it's having var id=5; In ts config file, changed "es6" and run the command tsc then it will change to let variable

//out Dir:'./dist' and rootDir:'./src' needs to keep in tsconfig.json file

//Then create folders of dist and src and  delete index.js file

let name = "John";
console.log(`Hello ${name}`); // Outputs Hello John 

function greet(person) {
    console.log("Hello, " + person);
}
greet("Tom"); // Outputs Hello, Tom

const arr = [10, 20, 30];
for (let item of arr) {
    console.log(item * 2);
} // Outputs 20,  40, 60    

COMMON COMMANDS

  tsc
  Compiles the current project (tsconfig.json in the working directory.)

  tsc app.ts util.ts
  Ignoring tsconfig.json, compiles the specified files with default compiler options.

  tsc -b
  Build a composite project in the working directory.

  tsc --init
  Creates a tsconfig.json with the recommended settings in the working directory.

  tsc -p ./path/to/tsconfig.json
  Compiles the TypeScript project located at the specified path.

  tsc --help --all
  An expanded version of this information, showing all possible compiler options

  tsc --noEmit
  tsc --target esnext
  Compiles the current project, with additional settings.

COMMAND LINE FLAGS

     --help, -h  Print this message.

    --watch, -w  Watch input files.

          --all  Show all compiler options.

  --version, -v  Print the compiler's version.

         --init  Initializes a TypeScript project and creates a tsconfig.json file.

  --project, -p  Compile the project given the path to its configuration file, or to a folder with a 'tsconfig.json'.

    --build, -b  Build one or more projects and their dependencies, if out of date

   --showConfig  Print the final configuration instead of building.

COMMON COMPILER OPTIONS

               --pretty  Enable color and formatting in TypeScript's output to make compiler errors easier to read.
                  type:  boolean
               default:  true

      --declaration, -d  Generate .d.ts files from TypeScript and JavaScript files in your project.
                  type:  boolean
               default:  `false`, unless `composite` is set

       --declarationMap  Create sourcemaps for d.ts files.
                  type:  boolean
               default:  false

  --emitDeclarationOnly  Only output d.ts files and not JavaScript files.
                  type:  boolean
               default:  false

            --sourceMap  Create source map files for emitted JavaScript files.
                  type:  boolean
               default:  false

           --target, -t  Set the JavaScript language version for emitted JavaScript and include compatible library declarations.
                one of:  es5, es6/es2015, es2016, es2017, es2018, es2019, es2020, es2021, es2022, esnext
               default:  es5

           --module, -m  Specify what module code is generated.
                one of:  none, commonjs, amd, umd, system, es6/es2015, es2020, es2022, esnext, node16, nodenext, preserve
               default:  undefined

                  --lib  Specify a set of bundled library declaration files that describe the target runtime environment.
           one or more:  es5, es6/es2015, es7/es2016, es2017, es2018, es2019, es2020, es2021, es2022, es2023, esnext, dom, dom.iterable, d                         om.asynciterable, webworker, webworker.importscripts, webworker.iterable, webworker.asynciterable, scripthost, es                         2015.core, es2015.collection, es2015.generator, es2015.iterable, es2015.promise, es2015.proxy, es2015.reflect, es                         2015.symbol, es2015.symbol.wellknown, es2016.array.include, es2016.intl, es2017.date, es2017.object, es2017.share                         dmemory, es2017.string, es2017.intl, es2017.typedarrays, es2018.asyncgenerator, es2018.asynciterable/esnext.async                         iterable, es2018.intl, es2018.promise, es2018.regexp, es2019.array, es2019.object, es2019.string, es2019.symbol/e                         snext.symbol, es2019.intl, es2020.bigint/esnext.bigint, es2020.date, es2020.promise, es2020.sharedmemory, es2020.                         string, es2020.symbol.wellknown, es2020.intl, es2020.number, es2021.promise, es2021.string, es2021.weakref/esnext                         .weakref, es2021.intl, es2022.array, es2022.error, es2022.intl, es2022.object, es2022.sharedmemory, es2022.string                         /esnext.string, es2022.regexp, es2023.array/esnext.array, es2023.collection, esnext.collection, esnext.intl, esne                         xt.disposable, esnext.promise, esnext.decorators, esnext.object, decorators, decorators.legacy
               default:  undefined

              --allowJs  Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files.    
                  type:  boolean
               default:  false

              --checkJs  Enable error reporting in type-checked JavaScript files.
                  type:  boolean
               default:  false

                  --jsx  Specify what JSX code is generated.
                one of:  preserve, react, react-native, react-jsx, react-jsxdev
               default:  undefined

              --outFile  Specify a file that bundles all outputs into one JavaScript file. If 'declaration' is true, also designates a fil                         e that bundles all .d.ts output.

               --outDir  Specify an output folder for all emitted files.

       --removeComments  Disable emitting comments.
                  type:  boolean
               default:  false

               --noEmit  Disable emitting files from a compilation.
                  type:  boolean
               default:  false

               --strict  Enable all strict type-checking options.
                  type:  boolean
               default:  false

                --types  Specify type package names to be included without being referenced in a source file.

      --esModuleInterop  Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImp                         orts' for type compatibility.
                  type:  boolean
               default:  false

You can learn about all of the compiler options at https://aka.ms/tsc



React Typescript from Basics to Advanced ......
Academind,Codevolution & Traversy Media
Install Node JS and check version => node -v
Install Typescript => npm install -g typescript
Check Typescript version => tsc -v
To create a file => Ex: main.ts
Command to check console => Ex: tsc main.ts , it creates js file and give command 'node main.js'
If we need to change => tsc main --watch and change the data in main.ts, it automatically changes in main .js file