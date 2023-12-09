document.addEventListener("DOMContentLoaded", function () {
  var edittext = document.getElementById("edittext");
  var edittext1 = document.getElementById("edittext1");
  var slider = document.getElementById("size-min");
  var slider1 = document.getElementById("size-min1");

  slider.disabled = true;
  slider1.disabled = true;


  edittext.addEventListener("input", function () {
    slider.disabled = edittext.innerText.trim() === "";
  });

  edittext1.addEventListener("input", function () {
    slider1.disabled = edittext1.innerText.trim() === ""
  });


});