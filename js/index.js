function moveToSelected(element) {

  if (element == "next") {
    var selected = $(".selected").next();
  } else if (element == "prev") {
    var selected = $(".selected").prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass("selected");

  $(prev).removeClass().addClass("prev");
  $(next).removeClass().addClass("next");

  $(nextSecond).removeClass().addClass("nextRightSecond");
  $(prevSecond).removeClass().addClass("prevLeftSecond");

  $(nextSecond).nextAll().removeClass().addClass('hideRight');
  $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

// Eventos teclado
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        moveToSelected('prev');
        break;

        case 39: // right
        moveToSelected('next');
        break;

        default: return;
    }
    e.preventDefault();
});

$('#carousel div').click(function() {
  moveToSelected($(this));
});

$('#prev').click(function() {
  moveToSelected('prev');
});

$('#next').click(function() {
  moveToSelected('next');
});








function getId(id){
  var modal = document.getElementById('myModal');
  var imgId = id.id;
  var vidSrc;
  var img=document.getElementById(imgId);
  var modalImg = document.getElementById("img01");
  var modalVid = document.getElementById("vid01");
  var captionText = document.getElementById("caption");
  modal.style.display = "block";
  console.log(img.tagName);
    if(img.getAttribute('vidsrc')){
      vidSrc = img.getAttribute('vidsrc');
      modalImg.style.display = "none";
      modalVid.style.display = "block";
      modalVid.src = vidSrc;
      modalVid.alt = img.alt;
    
    }
    else{ 
    modalVid.style.display = "none";
    modalImg.style.display = "block";
    modalImg.src = img.src;
    modalImg.alt = img.alt;}
 
  
  captionText.innerHTML = img.alt;  

  var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}


}


