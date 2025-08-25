// Переключение скриншотов
const tabs = document.querySelectorAll(".tab-btn");
const screenshot = document.getElementById("screenshot");

if (tabs.length > 0) {
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const num = tab.dataset.tab;
      screenshot.style.opacity = 0;
      setTimeout(() => {
        screenshot.src = `${num}.png`;
        screenshot.style.opacity = 1;
      }, 300);
    });
  });
}

// Копировать IP
function copyIP() {
  const ip = document.getElementById("server-ip").innerText;
  navigator.clipboard.writeText(ip);
  alert("IP скопирован: " + ip);
}
