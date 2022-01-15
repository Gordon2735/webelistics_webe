4

<!--* Test which version you are running with cmd -->

babel -V

If it is not verion 7 or higher

npm uninstall babel-cli -g
npm uninstall babel-core -g

And

npm install @babel/cli -g
npm install @babel/core -g

If you are using Jest run

<!--* npm install babel-core@7.0.0-bridge.0 --save-dev -->

    Uninstall and reinstall @babel/node solves the problem if you do node development.
