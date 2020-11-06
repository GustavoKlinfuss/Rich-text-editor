// //clicking the 'test' element will not deselect text.
// var test = document.getElementById("bold");
// test.onmousedown = function(e){
//   e = e || window.event;
//   e.preventDefault();
// }
init = function () {
  initFrame();
}

initFrame = function() {
  editorFrame.document.designMode = 'on';
} 

editText = function (commandName) {
  editorFrame.document.execCommand(commandName, false, null);
}

changeFontName = function (fontName) {
  editorFrame.document.execCommand('fontName', false, fontName);
}

changeFontSize = function (fontSize) {
  editorFrame.document.execCommand('fontSize', false, fontSize);
}

init();
