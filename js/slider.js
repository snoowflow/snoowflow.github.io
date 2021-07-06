var slider = document.getElementById('myRange');
slider.addEventListener("mousemove", function(){
  {
    var x = slider.value;
    var color = 'linear-gradient(to right, #d7b3f4, #8b87c6 '+ x +'%, transparent '+ x +'%, #e8e8e8 50%)'; 
    slider.style.background = color;
  }
})
slider.addEventListener("touchmove", function(){
  {
    var x = slider.value;
    var color = 'linear-gradient(to right, #d7b3f4, #8b87c6 '+ x +'%, transparent '+ x +'%, #e8e8e8 50%)'; 
    slider.style.background = color;
  }
})