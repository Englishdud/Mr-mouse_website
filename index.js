nameArray = [
  '<h1 class="text-center">Welcome. <br /> Mrmouse</h1>',
  '<h1 class="text-center">Hello. <br /> Mrmouse</h1>',
  '<h1 class="text-center">Cheezy. <br /> Mrmouse</h1>',
];
id = 1;
function nameChange() {
  document.getElementById("titleDiv").innerHTML = nameArray[id];
  if (id == 3) {
    id = 0;
    document.getElementById("titleDiv").innerHTML = nameArray[id];
  }
  id += 1;
}
