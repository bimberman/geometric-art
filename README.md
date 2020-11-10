# Om

## Description
A full stack Node.js and React shopping cart app

## Live:
[om.benimberman.com](https://om.benimberman.com)

## Technologies used:
![HTML5](https://icongr.am/devicon/html5-original-wordmark.svg?size=128&color=currentColor) 
![CSS3](https://icongr.am/devicon/css3-original-wordmark.svg?size=128&color=currentColor) 
![JS](https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor) 
![React](https://icongr.am/devicon/react-original-wordmark.svg?size=128&color=currentColor) 
![PostgreSQL](https://icongr.am/devicon/postgresql-original-wordmark.svg?size=128&color=currentColor) 
![NPM](https://icongr.am/devicon/npm-original-wordmark.svg?size=128&color=currentColor) 
![Node.js](https://icongr.am/devicon/nodejs-original-wordmark.svg?size=128&color=currentColor) 
![Express.js](https://icongr.am/devicon/express-original-wordmark.svg?size=128&color=currentColor) 
![Bootstrap](https://icongr.am/devicon/bootstrap-plain-wordmark.svg?size=128&color=563d7c)
![AWS](https://icongr.am/devicon/amazonwebservices-original-wordmark.svg?size=128&color=563d7c)

## Main Features:
* User can view a catalog of items for sale
* User can view the details of an item
* User can add an item to their cart
* User can view their cart summary
* User can place an order

## Demo:
![Live demo](https://raw.githubusercontent.com/bimberman/om/master/live-demo.gif)

## Instructions:
1. Navigate to the desired parent folder using a CLI, clone the repo, and navigate to the folder
```
cd YOUR-DESIRED-PARENT-FOLDER-PATH
git clone https://github.com/bimberman/om.git
cd om
```
2. Make a copy of the .env.example file, name the new file .env, and edit the file
    1. Edit the .env file as appropriate for your setup (for examaple if port 3000 is used by another program, then use a different port) 
    2. Change the user to dev and password to lfz
```
PORT=3001
DEV_SERVER_PORT=3000
DATABASE_URL=postgres://user:pass@localhost/om
SESSION_SECRET=secret
SESSION_EXPIRY=28800000
```
3. Install all of the dependencies
```
npm install
```
4. Rebuild the project 
```
npm run build
```
5. Verify the postgresql service is running
    1. Please note that if the postgresql service is not running, then change **STATUS** with **START** in the following command
```
sudo service postgresql status
```
6. Start the server
```
npm run dev
```
7. Open a web browser at localhost port 3000
```
http://localhost:3000/
```
