// Sooiler Tag
let spoil = document.getElementsByClassName("spoiler");

for (let i = 0; i < spoil.length; i++) {
  spoil[i].onclick = function () {
    if (this.classList.contains("spoiler")) {
      this.style.color = "--spoilerBGColor";
      this.style.backgroundColor = "--spoiled";
      this.classList.remove("spoiler");
      this.classList.add("spoiled");
    } else if (this.classList.contains("spoiled")) {
      this.style.color = "";
      this.style.backgroundColor = "";
      this.classList.remove("spoiled");
      this.classList.add("spoiler");
    }
  };
}

  // Scroll-button
document.getElementById("scrollTop").onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.getElementById("scrollBottom").onclick = () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
};
