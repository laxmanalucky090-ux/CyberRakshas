<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDpgqNsEm-jTiQEKqwOiYo_rsT45pIYUUQ",
    authDomain: "cyberraksha-f8f27.firebaseapp.com",
    projectId: "cyberraksha-f8f27",
    storageBucket: "cyberraksha-f8f27.firebasestorage.app",
    messagingSenderId: "27158062006",
    appId: "1:27158062006:web:da38644570146c22ffd717",
    measurementId: "G-SCR1ZGG2BE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>