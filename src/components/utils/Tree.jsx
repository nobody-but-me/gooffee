
import React from 'react'

import '../../styles/tree.css'

function _span_clicked(_image) {
    const _togglers = document.getElementsByClassName("tree-caret");
    const _toggler_image_changer = (_element) => {
	const _image_element = _element.querySelector(".tree-image");
	switch(_image) {
	    case "/src/assets/icons/book.webp":
	        _image_element.classList.toggle("book-active");
	        break;
	    case "/src/assets/icons/file.webp":
	        _image_element.classList.toggle("file-active");
	        break;
	    case "src/assets/icons/folder.webp":
	        _image_element.classList.toggle("folder-active");
	        break;
	    default:
	        console.log("[FAILED] Image path could not be recognized :: ", _image);
	        break;
	}
    };
    for (let i = 0; i < _togglers.length; i++) {
	_togglers[i].addEventListener("click", function() {
	    this.parentElement.querySelector(".tree-nested").classList.toggle("tree-active");
	    _toggler_image_changer(this);
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
