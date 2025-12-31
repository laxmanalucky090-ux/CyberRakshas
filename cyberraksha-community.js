import { db } from "./firebase.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

window.addPost = async function() {
  let text = document.getElementById("postText").value;
  if (text === "") return;

  try {
    await addDoc(collection(db, "communityPosts"), { text: text, timestamp: Date.now() });
    alert("Post added successfully!");
    document.getElementById("postText").value = "";
    displayPosts();
  } catch (e) {
    alert("Error adding post: " + e.message);
  }
}

// Display posts from Firestore
async function displayPosts() {
  const postsDiv = document.getElementById("posts");
  postsDiv.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "communityPosts"));
  querySnapshot.forEach((doc) => {
    let postDiv = document.createElement("div");
    postDiv.className = "card";
    postDiv.innerText = "Anonymous: " + doc.data().text;
    postsDiv.appendChild(postDiv);
  });
}

// Load posts on page load
displayPosts();