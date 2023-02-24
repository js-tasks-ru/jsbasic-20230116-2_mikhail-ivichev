function toggleText() {
  // ваш код...
  let btnText = document.querySelector(".toggle-text-button");
  let txt = document.getElementById('text') ;
  btnText.addEventListener("click" , function() {
    txt.hidden = !txt.hidden;
  })
}
