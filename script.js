
window.onload = () => {
  setTimeout(() => {
    document.getElementById("splash").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 1000);
  document.getElementById("downloadBtn").onclick = () => {
    const url = document.getElementById("urlInput").value;
    alert('This would download: ' + url);
  };
};
    