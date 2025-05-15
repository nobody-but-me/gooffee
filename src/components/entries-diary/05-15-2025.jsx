
import React from 'react'
import { Link } from 'react-router-dom'

import Tree from "../Tree.jsx"
import "../../styles/tree.css"
import "../../styles/app.css"

import _file from "../../assets/icons/file.webp"

export default function Entry05_15_2025() {
    return (
	<>
	    <Tree 
		_image={_file}
		_title={
		    <h3>
			[05/15/2025][EN] Family, accident, science, journalism and adulthood.
		    </h3>
		} 
		_text={
		    <>
			<p>
			    Our family visited us this weekend. I have to confess that, despite the constant arguments and screamings, 
			    I kinda missed them all. And not only them, but also everything related to them, just like the smell of my
			    mother's cigarretes smoke, the curiosity of my father, my grandmother's complaints and the weirdly 
			    interesting energy of my younger brother. Never seen our house as full of people as in this weekend. 
			</p>
			<p>
			    They bought good food and several useful objects. We ate hamburgers that night.
			</p>
			<p>
			    In the next day, we went to the Zoo. It was interesting to see the reactions from E.. I wish
			    we did it earlier; now J. and I are adults and E. is just an unbearable teenager.
			</p>
			<p>
			    The children learning about the animals there just confirmed to me that the first trauma we can suffer 
			    in life is literacy. "It's hard, I can't do that, I would say while looking with the eyes full of tears 
			    to my parents", would say my "Journalism and its technology relations" professor. I wanted
			    to be the crying kid and think that the biggest problem that can happen to me is being literate.
			</p>
			<p>
			    When the
			</p>
		    </>
		}
		/>
	</>
    )
}
