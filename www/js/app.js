$(document).ready(function() {
  document.addEventListener("deviceready", onDeviceReady, false);
});
// cordova.file.dataDirectory
function onDeviceReady() {
  // console.log('ciao');
  // console.log(cordova.file.applicationDirectory);
  window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + "www/prodotti.csv", gotFile, fail);
  // $('#textArea').text('prova');
}
// document.addEventListener("deviceready", function() {
//   alert("123");
// }, true);
// function init() {
// window.resolveLocalFileSystemURL(cordova.file.applicationDirectory, function(f) {
// console.dir(f);
// }, fail);
//This alias is a read-only pointer to the app itself
// window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + "www/index.html", gotFile, fail);
// }
// document.addEventListener("deviceready", init, false);
// function fail(e) {
//   console.log("FileSystem Error");
//   // console.dir(e);
function gotFile(fileEntry) {
  fileEntry.file(function(file) {
    var reader = new FileReader();
    reader.onloadend = function(e) {
      console.log("Text is: " + this.result);
      document.querySelector("#textArea").innerHTML = this.result;
    }
    reader.readAsText(file);
  });
}
