
import React from 'react'
import { Link } from 'react-router-dom'

import Tree from "../Tree.jsx"
import "../../styles/tree.css"
import "../../styles/app.css"

import _image from "../../assets/diary-images/image.jpg"
import _file from "../../assets/icons/file.webp"

export default function Entry06_05_2025() {
    return (
	<>
	    <Tree 
		_image={_file}
		_title={
		    <h3>
			[06/05/2025][EN] Science, journalism and adulthood.
		    </h3>
		} 
		_text={
		    <>
			<p>
			    Yesterday, June 4, I had my last classes with one of the professors of my university.
			    Since I joined university very late, this seems like it was last week that I started
			    all my classes. I didn't expect that the time would fly so quickly -- because, after all,
			    it didn't seem to do it. 
			</p>
			<p>
			    The classes, specifically from this professor, were so good. He's a master explaining what
			    he needs to explain and this made his classes so enjoyable. 
			</p>
			<p>
			    We had a last café without coffee. He explained somethings in the beginning of the meeting, then
			    a picture with all the students, and then everyone started to eat.
			</p>
			<p>
			    Despite being crowded and noisy, the meeting was kinda good. Everyone looked somewhat happy.
			</p>
			<p>
			    At the end, when everyone was already leaving, the professor came to me, with his silly
			    walk that always reminds me of a pastor. He sat next to me and started to say how he wanted
			    me to continue pursuing the course. He said that I'd be a good professional. But then,
			    in an attack of unconsciousness and stupidness, I shared about me with him; I told him that
			    I may not continue with journalism, changing the course in the near future.
			</p>
			<p>
			    He remained quiet, just to ask me, in the follow few seconds, if I hadn't identified myself 
			    as a jornalist. I couldn't give up at this point, so I told him that it was confusing for me
			    since the beginning. He stared at me with a poor look and then said "I'll support you 
			    independent of the course you pursue."
			</p>
			<p>
			    What happened after that was... Weird, to say the least. He compared me to the foreign boy in
			    our class, explaining how he "treated me like a foreigner among everyone there, but not in a 
			    pejorative way". Also told me how sad he felt when he saw me alone in the classes break.
			</p>
			<p>
			    If I am allowed the be dramatic, perhaps I can consider this a disruptive point of my life. 
			    I heard other people comparing me to a foreigner, but for some reason this specific moment was
			    different, as if he knew more about me than anyone else, even though I never though him a single
			    information.
			</p>
			<p>
			    Also, he told me that I showed him how I have potential to be a great intellectual and how 
			    he really believe on it. I asked him what would be better: physics or mathematics. He said
			    that if I choose mathematics, I'll be a great scientist; if I choose physics, I'll develop
			    my intellectual-self. 
			</p>
			<p>
			    I become quiet. He shook his head in a gentle gesture, got up and started to talk to other
			    student.
			</p>
			<p>
			    The adulthood amputates something from you you can't really recover, and you can't do it 
			    because you can't really remember what it was, so you just feel the missing somewhere there
			    inside you.
			</p>
			<p>
			    Journalism is interesting, but science is great. But which field inside science should I 
			    choose? Physics, mathematics or computer science? I thought I'd have solved this problem 
			    a year ago.
			</p>
		        <div className="tree-image-container">
			    <img src={_image} width='90%' />
			</div>
		    </>
		}
		/>
	</>
    )
}
