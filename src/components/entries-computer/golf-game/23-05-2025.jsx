
import React from 'react'
import { Link, Route, useNavigate } from 'react-router-dom'

import BackHouse from "../../BackHouse.jsx"
import "../../../styles/rooms.css"
import "../../../styles/tree.css"
import "../../../styles/app.css"

import Image23_05_2025 from "../../../assets/computer-images/golf/golf-screenshot-23-05-2025.png"

function BackComputerRoom() {
    return (
	<>
	    <div className="back_link">
		<p className="text_left">
		    [
		</p>
		<p className="text_center">
		    <Link to="/computer"> Back to The Old Computer Room </Link>
		</p>
		<p className="text_right">
		    ]
		</p>
	    </div>
	</>
    )
}

export default function Golf23_05_2025() {
    return (
	<div className="computer_content">
	    <div className="computer_post">
		<h2>The challenge.</h2>
		<p style={{color: 'gray'}}>May, 23, 2025 by Daniel N.</p>
		<br />
		<p className="text_justify">
		    All the idea for this game came when I saw my brother watching a game about Mario Golf Super Rush.
		    At that moment, the idea of a platformer game -- of course inspired by the Mario side-scroller games --
		    focused on golf came up to me and I knew it could be at least funny.
		</p>
		<p className="text_justify">
		    As always, I was not very confident about the idea yet, so I didn't instantly start this until the my friend
		    M., who really wanted to play some of my games, challenged me to take this idea out of the mind, proposing even
		    a deadline for July, 03. Of course I couldn't be the coward and gave up on it.
		</p>
		<p className="text_justify">
		    The game engine for the game is being written from scratch with OpenGL and C++. I thought about using easier
		    alternatives since I don't have the longest time in the earth for this project, but I felt like I wouldn't 
		    really learn anything from this experience if I didn't stick out to OpenGL. If everything goes well, I'm going
		    to be able to publish this game on steam -- also part of the challenge. The repository of the game can be found 
		    here: <Link target="_blank" to={"https://github.com/nobody-but-me/Golf-game"}>https://github.com/nobody-but-me/Golf-game</Link>
			  </p>
		<p className="text_justify">
		    The engine seems to be walking with great strides -- much more than I  primarily thought, to be very honest. It already supports
		    transparent .png image files, a very raw, not very efficient and not even precise, but functional collision detection and resolution,
		    ImGui library implementation, simple input detection, reading of external shader files, reading of images for level building and more.
		    These are very simple features, but I already feel happy with them since I don't think I went this far with any other game engine
		    I've written before. 
		</p>
		<div className="row-center">
		    <img src={Image23_05_2025} width='90%' rel="23/05/2025" />
		</div>
		<p className="text_center">
		    An example how the game looks like right now.
		</p>
		<p className="text_justify">
		    The next step now is add animations to the sprite of the little golf guy. 
		</p>
		<BackComputerRoom />
	    </div>
	</div>
    );
}
