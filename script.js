console.log("objects");
$.getJSON("https://api.ipify.org?format=json", function (data) {
  let a = data.ip;
  const ip = document.getElementById("ip");
  ip.innerText = a;
  localStorage.setItem("ipAdress", a);
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

  // let lat;
  // let long;
  // let city;
  // let region;
  // let org;
  // let pincode;
  // let timezone;
  // function renderdata(data) {
  //   lat = data.latitude;
  //   long = data.longitude;
  //   org = data.org;
  //   city = data.city;
  //   region = data.region;
  //   pincode = data.postal;
  //   timezone = data.timezone;
  //   console.log(lat);
  //   console.log(long);
  //   console.log(org);
  //   console.log(city);
  //   console.log(region);
  //   console.log(pincode);
  //   console.log(timezone);
  // }
  setTimeout(() => {
    window.location.href = "postal.html";
  }, 3000);
});
