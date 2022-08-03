# ikoe

# Starting Setup

## Environment Setup

Before iKOE can start, you need to get everything setup on your computer ﬁrst. If you have already installed Node.js along with Ionic (ionic-cli 4+) and Capacitor, you may skip this step.

First you'll need to install Node.js on your machine. Ionic requires Node.js in order to run properly and even need it to install some packages that the project needs later. Make sure the latest version
of Node.js and npm are installed. See Environment Setup for details. Install the Ionic CLI globally with npm:

After installing Node.js, you may now proceed with downloading Ionic and Capacitor packages, by opening the terminal and calling the following npm command:

```
$ npm install @capacitor/cli @capacitor/core
```

Depending on your operating system (Linux or Mac) you might have to add sudo before the npm install.

If you run into trouble installing Ionic, please update your Node.js to the latest version and try the following commands:

```
npm uninstall -g ionic
npm cache clean
```
Before attempting to install Ionic and Capacitor again.

# Setting Up iKOE

Now that you have installed Ionic and Capacitor, it's time to start a conﬁgure and run iKOE.
 
Unzip iKOE on your projects folder, Open the terminal accessing your unzipped starter, and call the following command:

```
// sample folder...
cd ~/Projects/Ionic/iKOE/

$ npm install
```
This will install all the plugins and dependencies that is required by the app. Although all the packages are already installed, there are still some speciﬁc package and app conﬁgurations that you need to manually set - to hook the app to your own app.

Now, follow these bellow steps to run:

1.	Run ```$ npm install capacitor-resources -g``` (optional) to generate all platforms icons and splash.

2.	Run ```$ ionic serve -l```, it will automatically generate a local www build and open this in your browser.

2.1	Run ```ionic serve -l -p *PORT Number*``` for multiple Ionic projects at same time, Ex: $ ionic serve -l -p 8210

If you would like to check which version and packages are installed or any dependencies issue that is denying running, tip the command:

```
$ ionic doctor check
```

Ionic doctor will check anything wrong with your package’s version and anything else more.

Although all the required packages of the app are already installed by calling npm install, there are still some speciﬁc packages (capacitor plugins) you need to set by adding platform and preparing it - to hook the app to your own app.

## For mobile app build for Android or iOS using Capacitor, follow these Steps:

Make sure that you have installed Android Studio in your machine and downloaded the required SDK in the Android Studio. After that, refer to the documentation below for the building process.

Capacitor Setup

- https://ionicframework.com/docs/cli/commands/capacitor-build

## For build PWA, follow these Steps:

Run ```ionic build --prod```, to generate and optimize all resources (Angular/PWA and Service Worker) for Web Apps. Test localhost your build running: ```ng serve```.
To simulate as a localhost server! install globally running: ```npm i -g http-server``` and then, inside the www folder run: ```$ http-server```.
 
# Deploying

## PWA (Firebase)

Firebase hosting provides many beneﬁts for Progressive Web Apps, including fast response times thanks to CDN's, HTTPS enabled by default, and support for HTTP2 push.
First, install the Firebase CLI:

```
$ npm install -g firebase-tools
```

NOTE: before ﬁrebase init, backup! the ﬁrebase.json contained at this iKOE project folder, after the init command has been executed, replace the ﬁrebase.json created by the backup.

With the Firebase CLI installed run ```firebase init``` in the project. This will set generate a ﬁrebase.json conﬁg ﬁle and conﬁgure the app for deployment.

ﬁrebase init will present a few question, including one about redirecting URLs to /index.html. Make sure to choose yes for this option, but no to overwriting your index.html. This will ensure that routing, hard reload, and deep linking work in the app.

The app can now be deployed by running

```
$ firebase deploy
```

After this completes the app will be live.

Publishing to app store

- https://beta.ionicframework.com/docs/publishing/app-store

Android Play Store

- https://beta.ionicframework.com/docs/publishing/play-store

Electron Desktop App

- https://beta.ionicframework.com/docs/publishing/desktop-app

## Ionic Docs

Ionic 4 Components

- https://beta.ionicframework.com/docs/components
 
Native APIs

- https://beta.ionicframework.com/docs/native

API Reference

- https://beta.ionicframework.com/docs/api
