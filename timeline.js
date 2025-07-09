  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });

  var modal = document.getElementById("am1-info")
  var btn = document.getElementById("modal1")
  btn.onclick = function() {
    modal.style.display = "block";
  }