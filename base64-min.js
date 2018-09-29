var iframe = document.getElementById('site');
function resizeIframe(value) { iframe.style.width = value; updateOutput(); }
function loadURL() { iframe.setAttribute('src', document.getElementById('urlInput').value); document.getElementById('urlInput').blur(); updateOutput(); }
function updateOutput() { document.getElementById('output').innerHTML = iframe.offsetWidth + ' x ' + iframe.offsetHeight; }
function readURL(input) {
if (input && input[0]) {
var reader = new FileReader();
reader.onload = function (e) {
$("#result .base64").val( e.target.result )
$("#result").slideDown();
}
reader.readAsDataURL(input[0]);
}
}
var I = document.getElementById("I");
var B = document.getElementById("B");
var O = document.getElementById("O");
B.addEventListener("click", function() {
var Output = minifyCSS(I.value);
O.value = Output;
}, false);
function HTMLcompressor(){
 var allHTML = document.getElementById("oldCode").value;
 var headHTML = "";
 var removeThis = "";
 var headstatus = document.getElementById("headstatus").checked;
 if(headstatus != true){
  //Compress all the things!
  allHTML = allHTML.replace(/(\r\n|\n|\r|\t)/gm,"");
  allHTML = allHTML.replace(/\s+/g," ");
 }else{
  //Don't compress the head
  allHTML = allHTML.replace(new RegExp("</HEAD","gi"),'</head');
  allHTML = allHTML.replace(new RegExp("</head ","gi"),'</head');
  
  var bodySplit = "</head>"; 
  var i = allHTML.indexOf(bodySplit) != -1;
  if(i == true){
   var bodySplit = "</head>"; 
   tempo = allHTML.split(new RegExp(bodySplit,'i'));
   headHTML = tempo[0];
   allHTML = tempo[1];
  }else{
   bodySplit = ""; 
  }
  allHTML = allHTML.replace(/(\r\n|\n|\r|\t)/gm,"");
  allHTML = allHTML.replace(/\s+/g," ");
  allHTML = headHTML + bodySplit + '\n' + allHTML;
 }
 document.getElementById("newCode").value = allHTML;
}