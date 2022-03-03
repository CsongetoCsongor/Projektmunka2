function showImg(id) {
    var canvas = document.getElementById("canvas");
    canvas.classList.add("d-block");
    
    var img = document.getElementById('canvas-img');
    img.src = document.getElementById(id).src;

    var title = document.getElementById(id).title;
    var showTitle = document.getElementById('img-title')
    showTitle.innerText = title;
  }

  function closeCanvas() {
    document.getElementById('canvas').classList.remove('d-block');
  }