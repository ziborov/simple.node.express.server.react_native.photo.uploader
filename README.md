# simple.node.express.server.react_native.photo.uploader

This example lets:
1) Create simple Node.js + Express server;
2) Take photo by React Native application;
3) Upload photo from React Native application to Node.js + Express server;


*******************************************************************************
\node_express_server\ - Node.js + Express server

View:
test_node_express.gif

Run:
npm install
node app.js

Test:
http://localhost:3000/about in Browser
http://localhost:3000/contact in Browser
http://localhost:3000/register in Browser
http://localhost:3000/ in Browser - upload file to \node_express_server\upload\

*******************************************************************************
\react_native_photo_uploader\ - React Native application (photo taking and uploading)

View:
test_react_native_photo_uploader.gif
test_react_native_photo_uploader_on_Android.mp4

Change 
\react_native_photo_uploader\App.js
const BASE_PATH = 'http://192.168.1.104:3000'; //change to correct localhost

Run:
npm install
npx react-native run-android







