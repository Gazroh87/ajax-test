let xhr = new XMLHttpRequest();
let data;

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
xhr.send();

// function setData(jsonData) {
   // data = jsonData;
   // console.log(data);
// }

xhr.onreadystatechange = function () {
   // console.log(this.readyState);
  if (this.readyState == 4 && this.status == 200) {
    // document.getElementById("data").innerHTML = this.responseText;
    // console.log(typeof (JSON.parse(this.responseText)));
    // console.log(JSON.parse(this.responseText));
    // data = this.responseText;
    // console.log(data);
    // setData(JSON.parse(this.responseText));
    data = JSON.parse(this.responseText);
  }
};

setTimeout(function() {
    console.log(data);
}, 500);