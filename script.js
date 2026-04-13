function showMessage() {
    document.getElementById("message").innerText = "🎉 Button Clicked! CI/CD is working!";
}

// Live clock
function updateTime() {
    const now = new Date();
    document.getElementById("time").innerText = now.toLocaleTimeString();
}

setInterval(updateTime, 1000);
