const copyPara = document.getElementById("copy-para");

function dynamicYear() {
  const year = new Date().getFullYear();
  copyPara.textContent = `© Copyright ${year} TinDog`;
}

dynamicYear();
