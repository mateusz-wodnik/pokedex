# Pokemon list

## Description
Pokemon listing app, serving pokemon items from fake API from JSON file. <br> 
It uses json-server in dev mode to serve data on port :3001. <br>
Pokemon list is divided pages that displays only 16 items at once. 
Your'e able to navigate through pages using navigation that is placed on top and bottom of list.
Navigation will expand and show specific pages links during each page change.<br>
Page changing is debounced, so quick, multiple clicks on previous or next button will cause change through multiple pages without fetching them from server.<br>
Server is returning only list items, without information about all records number, which cause that only one page will be displayed in navigation at the beggining. 

## Dependencies
To run dev or production version you need browser with enabled JavaScript.

## Build setup
This app was developed using:
* CRA
* React
* Redux
* ES6
* Bootstrap v4
* SASS (original syntax)
* HTML5
* json-server (https://www.npmjs.com/package/json-server)

```bash
# To install dependencies, just go to the root folder and run
npm i

# To run dev version run
npm run start

# To build production version run
npm run build

# To run production version run
npm run build
npm run production
```
