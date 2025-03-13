
import React from 'react'

import '../styles/tree.css'

function _span_clicked(_image) {
    const _toggler = document.getElementsByClassName("tree-caret");
    for (let i = 0; i < _toggler.length; i++) {
	_toggler[i].addEventListener("click", function() {
	    this.parentElement.querySelector(".tree-nested").classList.toggle("tree-active");
	    if (_image === "/src/assets/icons/book.webp") {
		this.querySelector(".tree-image").classList.toggle("book-active");
	    }
	    else if (_image === "/src/assets/icons/file.webp") {
		this.querySelector(".tree-image").classList.toggle("file-active");
	    }
	    else if (_image === "/src/assets/icons/folder.webp") {
		this.querySelector(".tree-image").classList.toggle("folder-active");
	    }
	});
    }
}

export default function Tree({_title, _text, _image}) {
    return (
	<ul id="tree-ul">
	    <li>
		<span className="tree-caret" onClick={() => {_span_clicked(_image)}}>
		    <div className="tree-image-container">
			<img src={_image} className="tree-image" />
		    </div>
		    {_title}
		</span>
		<ul className="tree-nested">
		    <li>
			{_text}
		    </li>
		</ul>
	    </li>
	</ul>
    );
}
