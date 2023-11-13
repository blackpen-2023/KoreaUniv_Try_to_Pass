let numb = "비어있음";
let name = "비어있음";
let root = "비어있음";
let cls = "비어있음";
let yr = "비어있음";
let mt = "비어있음";
let dy = "비어있음";

function getData() {
  numb = document.getElementById("numb").value;
  name = document.getElementById("name").value;
  root = document.getElementById("root").value;
  cls = document.getElementById("cls").value;
  yr = document.getElementById("yr").value;
  mt = document.getElementById("mt").value;
  dy = document.getElementById("dy").value;
  location.href = "%08kUniv.html";
}

function setAll() {
  document.querySelector("#alllll").innerHTML = `<table id="MM">
    <tr>
      <th>수험번호</th>
      <td id="numb">6746537</td>
    </tr>
    <tr>
      <th>성&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;명</th>
      <td>dwdw</td>
    </tr>
    <tr>
      <th>전&nbsp;&nbsp;형&nbsp;&nbsp;명</th>
      <td>학생부종합</td>
    </tr>
    <tr>
      <th>모집단위</th>
      <td>경영학과</td>
    </tr>
    <tr>
      <th>생년월일</th>
      <td>2005년 4월 4일</td>
    </tr>
    <tr>
      <th>합격여부</th>
      <td id="pass">합격</td>
    </tr>
  </table>`;
}
