Notification.requestPermission().then((perm) => {
  if (perm === "granted") {
    console.log("Notification permission granted.");
  } else {
    console.log("Unable to get permission to notify.");
  }
});
// Divider
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
setInterval(nameChange, 10000);
