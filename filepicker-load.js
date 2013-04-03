// Call Filepicker to load
// pass callback functions to run after the script tag has loaded
//
// loadFilepicker(functionfunction(){
//   filepicker.setKey("YOUR_API_KEY_HERE");
// }, function(error){
//   if(typeof console != undefined) {
//     console.log(error);
//   }
// });

var loadFilepicker;

loadFilepicker = function(successCallback, failureCallback) {
  var head, script;
  
  //Generate a script tag
  script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = '//api.filepicker.io/v1/filepicker.js';
  script.onload = successCallback;
  script.onerror = failureCallback;

  //Load the script tag
  head = document.getElementsByTagName('head')[0];
  return head.appendChild(script);
};
