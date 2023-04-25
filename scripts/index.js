const copyPara = document.getElementById("copy-para");

(function () {
  const year = new Date().getFullYear();
  copyPara.textContent = `© Copyright ${year} TinDog`;
})();
