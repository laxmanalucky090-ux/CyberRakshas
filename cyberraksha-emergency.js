function sendSOS() {
  const time = new Date().toLocaleString();

  // store emergency locally (demo purpose)
  localStorage.setItem("lastSOS", time);

  document.getElementById("status").innerText =
    "🚨 SOS sent successfully at " + time;

  alert("🚨 Emergency SOS triggered! Help will be notified.");
}