const baseURL = "https://ci-swapi.herokuapp.com/api/";

function getData(type, cb) {
  let xhr = new XMLHttpRequest();
  // let data;

  xhr.open("GET", baseURL + type + "/");
  xhr.send();

  /* function setData(jsonData) {
   data = jsonData;
   console.log(data);
   } */

  xhr.onreadystatechange = function () {
    console.log(this.readyState);
    if (this.readyState == 4 && this.status == 200) {
      /* document.getElementById("data").innerHTML = this.responseText;
       console.log(typeof (JSON.parse(this.responseText)));
       console.log(JSON.parse(this.responseText));
       data = this.responseText;
       console.log(data);
       setData(JSON.parse(this.responseText));
       data = JSON.parse(this.responseText); */
      cb(JSON.parse(this.responseText));
    }
  };
}

function getTableHeaders(obj) {
  let tableHeaders = [];

  Object.keys(obj).forEach(function (key) {
    tableHeaders.push(`<td>${key}</td>`);
  });

  return `<tr>${tableHeaders}</tr>`;
}

function writeToDocument(type) {
  let tableRows = [];
  let el = document.getElementById("data");
  el.innerHTML = "";
  getData(type, function (data) {
    // console.dir(data);
    data = data.results;
    let tableHeaders = getTableHeaders(data[0]);

    data.forEach(function (item) {
      // el.innerHTML += "<p>" + item.name + "</p>";
      let dataRow = [];

      Object.keys(item).forEach(function (key) {
        let rowData = item[key].toString();
        let truncatedData = rowData.substring(0, 15);
        dataRow.push(`<td>${truncatedData}</td>`);
      });
      tableRows.push(`<tr>${dataRow}</tr>`);
    });

    el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`;
  });
}

/* setTimeout(function () {
 console.log(data);
 }, 500);

 function printDataToConsole(data) {
 console.log(data);
 }

 getData(printDataToConsole);

 getData(function (data) {
console.log(data);
}); */
