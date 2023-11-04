console.log("objects");
$.getJSON("https://api.ipify.org?format=json", function (data) {
  let a = data.ip;
  const ip = document.getElementById("ip");
  ip.innerText = a;
  // localStorage.setItem("ipAdress", a);
});

const right2 = document.getElementsByClassName("right2")[0];
right2.addEventListener("click", () => {
  console.log("next page");
  const ipAdress = localStorage.getItem("ipAdress");
  console.log(ipAdress);

  async function fetchIPinfo() {
    const response = await fetch(`https://ipapi.co/${ipAdress}/json/`);
    const data = await response.json();

    // console.log(data);
    localStorage.setItem("data", JSON.stringify(data));
    // renderdata(data);
  }
  fetchIPinfo();
  setTimeout(() => {
    window.location.href = "postal.html";
  }, 3000);
});
