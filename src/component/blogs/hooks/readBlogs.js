import preval from "preval.macro";

// eslint-disable-next-line no-unused-vars
const path = "/Users/prashantbedi/websites/prashantb/src/markdown"

const components = preval`
const fs = require("fs");
const files = fs.readdirSync("/Users/prashantbedi/websites/prashantb/src/markdown");
module.exports = files`;

const contentOfComponents = preval`
const fs = require("fs");
const files = fs.readdirSync("/Users/prashantbedi/websites/prashantb/src/markdown");
const content = files.map(filename => {
  const fs = require("fs");
  const url = '/Users/prashantbedi/websites/prashantb/src/markdown'+'/'+filename;
  return fs.readFileSync(url).toString();
})
module.exports = content`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const readFileNames = () => {
        return components
    }

    const fileContent = (index) => {
        let content = contentOfComponents[index]
        let split = content.split("----------");
        return {
            "Title": split[0],
            "Date": split[1],
            "Image": split[2],
            "Genre": split[3],
            "Body": split[4]
        }
    }

    return {
        readFileNames: readFileNames,
        fileContent: fileContent,
    }
}