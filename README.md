# rpi-online
Online/offline detection and write state to firebase

__WARNING__: This script is designed to run on _ARM_ architecture. x64 computer will not able to run this script.

## Set up service account
Follow [instruction from Firebase](https://firebase.google.com/docs/admin/setup) and get the service account information.

Then, save the file to `~/firebase-adminsdk.json`.

## Install dependencies
Install Node.JS first. Follow [instruction from official website](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions).

Node 8 and above is recommended. At least Node 6 (Not guaranteed) is required.

After that, run the following scripts (omit `production` flag if your are running in development environment)
```bash
npm install --production
```


## Execution
__Remember to set Firebase service key first__
```bash
node index.js
```
