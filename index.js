const path = require('path')
const admin = require('firebase-admin')

const FB_UID = 'worker-rpi'
const FB_DATABASE_URL = 'https://jsse-2017.firebaseio.com'
const STATUS_PATH = '/status'
const FIREBASE_CREDENTIAL_PATH = path.join(process.env.HOME, 'firebase-adminsdk.json')

console.log('Initializing Firebase admin')
const serviceAccount = require(FIREBASE_CREDENTIAL_PATH)
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: FB_DATABASE_URL,
  databaseAuthVariableOverride: {
    uid: FB_UID
  }
})

console.log('Initialization completed')

const database = admin.database()

const connectedRef = database.ref('.info/connected')
const statusRef = database.ref(STATUS_PATH)

connectedRef.on('value', snap => {
  if (snap.val()) {
    console.log('Server went online. Setting status to online')
    statusRef.set('online')
  } else {
    statusRef.onDisconnect().set('offline')
  }
})
