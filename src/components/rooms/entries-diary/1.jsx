
import React from 'react'
import { Link } from 'react-router-dom'

import Tree from "../../utils/Tree.jsx"
import "../../../styles/tree.css"
import "../../../styles/app.css"

import _file from "../../../assets/icons/file.webp"

export default function Entry10_21_2024() {
    return (
	<>
	    <Tree 
		_image={_file}
		_title={
		    <h3>
			[09/19/2024][EN] A False (or not) Diary
		    </h3>
		} 
		_text={
		    <>
			<p>
			    Hello, my dear reader. Welcome to my diary page.
			    Here you'll could find a little about my boring
			    days.
			</p>
			<p>
			    When I was exploring other personal webs and seeing
			    their amazing blogs, I wanted to creat my own.
			</p>
			<p>
			    To give a little context about the name of this page: at
			    the beginning, I was thinking of crazy ideas such as write
			    false stories for this diary and code a whole game for y'all
			    find out which stories are true or false and then earn points
			    with it and... Many more other things that no longer have 
			    sense. I don't know, I just wanted to create different things
			    but, at the same time, fun, you know?
			</p>
			<p>
			    I'm lazy now and I no longer have energy to do that. Maybe in
			    the future, who knows. For now, I'm a little tired of this
			    pathetic struggle of mine for the originality.
			</p>
		    </>
		}
		/>
	</>
    )
}
