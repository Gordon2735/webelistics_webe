<!--todo :::::::::::::::::::::::::::::::::::::::::::::::::  -->
<!--  -->
<!--*               Webelistics_webe          -->

<!--!  2022_01_029      21:45:00     January 9, 2022  -->
<!--  -->
<!--  -->

<!--* AGENDA:  -->
<!--*   1.  Webelistics main website/eCommerce  -->
<!--*   2.  Organize/Create Folders System  -->
<!--*   3.  Create File System -->
<!--*   4.  Create Server & Node configuration  -->
<!--*   5.  Build and install Components  -->
<!--*   6.  Research & implement eCommerce/Framework  -->
<!--*   7.  COM w/Trello/Site_Checklists  -->
<!--*   8.  Research HOOT characteristics  -->
<!--*   9.  Install Gulp & Implement JEST TDD & Testing  -->
<!--*   10. Maintain an "IN_PROGRESS" 'Lighthouse Report' -->

<!--todo ::::::::::::::::::::::::::::::::::::::::::::::::  -->

ref: keeping these installs as single-line instructions for documentational purposes.

<!--?  NPM  INSTALLS  -->
<!--?   1. npm init  -->
<!--?   2. npm install --global gulp-cli  -->
<!--?   3. npm install --save-dev gulp   -->
<!--?   4. npm i express  -->
<!--?   5. npm i @babel/core @babel/preset-env babel-jest @babel/register @babel/cli  -->
<!--? npm install babel-core@7.0.0-bridge.0 --save-dev  -->
<!--? @babel/node  --> //see helps in resources babel_upgrade.md

<!--?   6. npm i jest  -->
<!--?   7. npm i open  -->
<!--?   8. npm install nodemon --save-dev  -->
<!--?   9. npm install serve-favicon --save  -->
<!--?   10. npm install path  -->
<!--?   11. npm i date-fns  -->
<!--?   12. npm i uuid  -->
<!--?   13. npm i mongoose --save  -->
<!--?   14. npm i express-handlebars  -->
<!--?   16. npm i morgan -D  -->
<!--?   17. npm i cors  -->
<!--?   18. npm i dotenv  -->
<!--?   19. npm i body-parser  -->
<!--?   20. npm i prettier -g  -->
<!--?   21. npm install -g eslint  -->
<!--?   22. npm i -g eslint-config-prettier  -->
<!--?   23. npm install --save-dev eslint-plugin-html  -->
<!--?   24. npm install gulp-jest jest  -->
<!--?   25. npm i -G gulp-cli  -->
<!--?   26. npm i gulp-babel -D  -->
<!--?   27. npm i -D gulp-load-plugins     -->
<!--?   28. npm update -g npm  -->
<!--~   27. npm rm gulp  -->
<!--~   26. npm rm gulp-cli gulp-jest gulp-babel             gulp-load-plugins  -->

<!--@ Decided to use NPM SCRIPTS. It can handle the transpiling of ES6 Modules through Babel without a bunch of configuration hassle and Module-Common JS-AMD-ES5 head butting!! I can systematically run application TESTING and Executing multiple scripts sliently or loudly; reference scripts from files, create logs and pass arguments along with referencing environment variables, applying Naming conventions. I was considering ROLLUP, but i'm going to see how far I can ROLL with NPM SCRIPTS which can also direct UGLIFICATION and MINIFICATION!! WOW!!!! All this without adding more baggage to my "ALREADY" HuGe DEPENDANCIES allocations! -->
<!--! npm rm --global gulp  -->

<!--! FYI -- Gulp-Babel-Jest-ES6_Modules -- FYI  -->
<!--! We don't support node's mjs implementation because it requires a complete re-architecture of the project. We are looking into it, but I wouldn't expect it to arrive soon.As for using esm, the last line tells you how to fix it. remove "type": "module" from C:\Node\package.json   -->

<!--! Error [ERR_REQUIRE_ESM]: Must use import to load ES Module: /path/to/node_modules/gulp-imagemin/index.js require() of ES modules is not supported. require() of /path/to/node_modules/gulp-imagemin/index.js from /path/to/node_modules/gulp-load-plugins/index.js is an ES module file as it is a .js file whose nearest parent package.json contains "type": module" which defines all .js files in that package scope as ES odules. Instead rename /path/to/node_modules/gulp-imagemin/index.js to end in .cjs, change the requiring code to use import(), or remove "type": "module" from /path/to/node_modules/gulp-imagemin/package.json.  -->
