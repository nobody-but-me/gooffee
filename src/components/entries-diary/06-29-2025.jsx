
import React from 'react'
import { Link } from 'react-router-dom'

import Tree from "../Tree.jsx"
import "../../styles/tree.css"
import "../../styles/app.css"

import _image from "../../assets/diary-images/image.jpg"
import _file from "../../assets/icons/file.webp"

export default function Entry06_29_2025() {
    return (
	<>
	    <Tree 
		_image={_file}
		_title={
		    <h3>
			[06/29/2025][EN] Title.
		    </h3>
		} 
		_text={
		    <>
			<p>
			    One day you are just a kid and in the other you are an adult, sitting down somewhere thinking "I need to fix it".
			</p>
			<p>
			    Our sin was growing up too quickly; childhood was a blessing that we marked was finished so early. I do not think it was
			    possible to avoid, though; there is an essencial stubbornness in the human mind I can't really describe.
			</p>
			<p>
			    When you are alone for so long, you start to notice some weird things happening to you, such as the awful and constant 
			    missing sensation of those things you once thought were annoying or even unbeareable.
			</p>
			<p>
			    Sometimes, when I am cooking the supper and there is some food that will take long to cook, I wait sitting down in front of 
			    the front door with one of my ears lying upon the hard -- but, at the same time, hollow -- surface of the door, just waiting 
			    for some of my neighboors to come. I confess that I childishly expect one of them to just knock my door, so then I can
			    open it and talk to them as if we had some kind of old relationship. Never happen, of course: none of them know about my 
			    existence and, just like me, when they are walking through the corridors, the thing they want the most is just to come home.
			</p>
			<p>
			    
			</p>
		    </>
		}
		/>
	</>
    )
}
