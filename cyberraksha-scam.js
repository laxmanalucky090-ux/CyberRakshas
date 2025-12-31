function checkScam() {
    let msg = document.getElementById("msg").value.toLowerCase();
    let keywords = ["otp", "urgent", "click", "win", "prize", "password"];
  
    let isScam = keywords.some(k => msg.includes(k));
    document.getElementById("result").innerText =
      isScam ? "⚠️ Suspicious Message" : "✅ Looks Safe";
  }
  