
import React from 'react'
import { Link } from 'react-router-dom'

import Tree from "../Tree.jsx"
import "../../styles/tree.css"
import "../../styles/app.css"

import _file from "../../assets/icons/file.webp"

export default function Entry03_26_2025() {
    return (
	<>
	    <Tree 
		_image={_file}
		_title={
		    <h3>
			[03/26/2025][EN] Programming and university.
		    </h3>
		} 
		_text={
		    <>
			<p>
			    I just noticed that I can't write about myself.
			</p>
		    </>
		}
		/>
	</>
    )
}
