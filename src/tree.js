(() => {
    
    var _toggler = document.getElementsByClassName("tree-caret");
    var i;
    
    for (i = 0; i < _toggler.length; i++) {
	_toggler[i].addEventListener("click", function() {
	    this.parentElement.querySelector(".tree-nested").classList.toggle("tree-active");
	    // this.querySelector(".tree-image").classList.toggle("tree-image-active");
	});
    }
    
})();
