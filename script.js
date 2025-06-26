const player = document.getElementById("player");
const user = player.querySelectorAll("img");
const docCom = document.getElementById("komputer");
const info = document.getElementById("info");
const input = document.getElementById("input");
const output = document.getElementById("output");

function pilihanCom() {
  const com = Math.random();
  if (com < 0.33) return "gajah";
  if (com < 0.66) return "orang";
  return "semut";
}

function hasil(pemain, computer) {
  if (pemain == computer) return "seri";
  if (pemain == "gajah") return computer == "orang" ? "menang" : "kalah";
  if (pemain == "orang") return computer == "gajah" ? "kalah" : "menang";
  if (pemain == "semut") return computer == "orang" ? "kalah" : "menang";
}

function putar() {
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  let interval = setInterval(() => {
    docCom.innerHTML = `<img src="./src/img/${gambar[i++]}.png" class="m-2 w-32 rotate-180" ></img>`;
    if (i == gambar.length) i = 0;
  }, 30);
  setTimeout(() => {
    clearInterval(interval);
  }, 500);
}

function disable(x) {
  x.disabled = true;
}

for (let i = 0; i < user.length; i++) {
  user[i].addEventListener("click", () => {
    const pilUser = user[i].getAttribute("alt");
    const komputer = pilihanCom();
    const hasilAkhir = hasil(pilUser, komputer);
    input.innerHTML = `${pilUser}`;
    info.innerHTML = "LOADING...";
    output.innerHTML = "KOMPUTER MEMILIH...";
    putar();
    setTimeout(() => {
      if (komputer == "gajah") {
        docCom.innerHTML =
          '<img src="./src/img/gajah.png" class="m-2 w-32 rotate-180" ></img>';
      }
      if (komputer == "orang") {
        docCom.innerHTML =
          '<img src="./src/img/orang.png" class="m-2 w-32 rotate-180" ></img>';
      }
      if (komputer == "semut") {
        docCom.innerHTML =
          '<img src="./src/img/semut.png" class="m-2 w-32 rotate-180" ></img>';
      }
      info.innerHTML = hasilAkhir;
      output.innerHTML = komputer;
    }, 500);
  });
}
