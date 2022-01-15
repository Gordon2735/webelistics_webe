import lighthouse from "lighthouse";
import chromeLauncher from "chrome-launcher";
import { argv } from "yargs";
import url from "url";

const PORT = 7000;
const HOST = `http://127.0.0.1:${PORT}/`;

const launchChromeLighthouse = (url) => {
  chromeLauncher.launch().then((chrome) => {
    const options = {
      port: chrome.port,
    };
    return lighthouse(url, options).then(error, (results) => {
      chrome.kill().then(() => results.report);
      console.log(`Lighthouse results:  ${results.report}`);
      console.error(`Error: ${error}`);
    });
  });
  if (argv.url) {
    launchChromeLighthouse(argv.url).then((results) => {
      console.log(results);
    });
  } else {
    throw new Error("Please provide a URL to audit");
  }
};

launchChromeLighthouse(HOST).then((results) => {
  console.log(results);
});

argv.url; // https://www.google.co.uk
