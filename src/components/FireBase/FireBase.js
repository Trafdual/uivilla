import { initializeApp } from 'firebase/app'
import { getAuth, RecaptchaVerifier } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCzjRiLlSuJDvfTEMKBe2bQElk0GtakwRo",
  authDomain: "test-otp-8da59.firebaseapp.com",
  projectId: "test-otp-8da59",
  storageBucket: "test-otp-8da59.firebasestorage.app",
  messagingSenderId: "157846363137",
  appId: "1:157846363137:web:3679b243dba861442db400",
  measurementId: "G-2L660H2T7Y"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
// auth.settings.appVerificationDisabledForTesting = true

export { auth, RecaptchaVerifier }
