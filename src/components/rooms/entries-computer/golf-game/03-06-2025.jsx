
import React from 'react'
import { Link, Route, useNavigate } from 'react-router-dom'

import BackHouse from "../../../utils/BackHouse.jsx"
import "../../../../styles/rooms.css"
import "../../../../styles/tree.css"
import "../../../../styles/app.css"

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

export default function Golf06_03_2025() {
    return (
	<div className="computer_content">
	    <div className="computer_post">
		<h2>Animations and game engine.</h2>
		<p style={{color: 'gray'}}>June, 03, 2025 by Daniel N.</p>
		<br />
		<p className="text_justify">
		    After a long time researching and reading how I could manage to do it, I finally made the animations work. Of course, they're still not perfect and I can see a lot of changes I still want to make -- one example of them is that, for some reason, at least by what I can see watching the animations, when only one frame is played and the animations stops right after it, the frame in question takes longer to finish. For example: when the player arrives on the ground after a jump, he -- the golf guy -- stays longer in the last frame of falling. Also, when you press the button to run and release it right after, the player also takes longer to change the animation. I suppose this happens because of the delay between each frame, but this hypothesis must be tested before any certainty.
		</p>
		<p className="text_justify">
		    The fact is that I am postponing it because, after I made the animations work, I felt like I'm not going to be able to finish the game before the deadline simply because of my inexperience creating engines from scratch. It took me approximately three or four days to make the animations work -- remembering that I am also counting the time I didn't work at the game at all, which perhaps makes this equation a little unfair.
		</p>
		<p className="text_justify">
		    It is too much time waste on something that was supposed to be easy. Imagine when I have to particles, or more complex collisions calculations -- which, by the way, I'm going to do pretty soon since every time I add more than a certain quantity of collision blocks in the scene, the game gets slow and unplayable.
		</p>
		<p className="text_justify">
		    Despite saying it, I'll probably not gave up on it simply because I am too stubborn for that.
		</p>
		<div className="row-center">
		    <video controls id="example_video_1" class="video-js vjs-default-skin" width="640" height="264" src="https://github.com/nobody-but-me/gooffee/raw/refs/heads/master/src/assets/computer-images/golf/golf-video-1.mp4" type='video/mp4' style={{width: '100%'}}/>
		</div>
		<p className="text_center">
		    An video showing how the animations look like in game.
		</p>
		<BackComputerRoom />
	    </div>
	</div>
    );
}
