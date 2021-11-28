import preval from "preval.macro";

const path = "/Users/prashantbedi/websites/prashantb/src/markdown"

const components = preval`
const fs = require("fs");
const files = fs.readdirSync("${path}");
module.exports = files
`;

const blogDate = preval`
var dates = []
const fs = require("fs");
const files = fs.readdirSync("/Users/prashantbedi/websites/prashantb/src/markdown");
for (let i = 0; i < files.length; i++) {
    dates.push(fs.statSync("${path}"+'/'+files[i]).birthtime)
}
module.exports = dates`;

const contentOfComponents = preval`
const fs = require("fs");
const files = fs.readdirSync("${path}");
const content = files.map(filename => {
  const fs = require("fs");
  const url = '${path}'+'/'+filename;
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
            "Date": blogDate[index],
            "Image": split[1],
            "Genre": split[2],
            "Body": split[3]
        }
    }

    return {
        readFileNames: readFileNames,
        fileContent: fileContent,
    }
}