
import React from 'react'
import { Link } from 'react-router-dom'

import Tree from "../Tree.jsx"
import "../../styles/tree.css"
import "../../styles/app.css"

import _file from "../../assets/icons/file.webp"

export default function Entry12_23_2024() {
    const _pretender = "https://www.youtube.com/watch?v=12zAD0y_vT0";
    return (
	<>
	    <Tree 
		_image={_file}
		_title={
		    <h3>
			[12/23/2024][EN] Post title
		    </h3>
		} 
		_text={
		    <>
			<p>
			    When I was a kid, I used to look at the christmas tree
			    through the ajar door at the nights. And, on this specific
			    christmas-eve midnight, while I was gazing at that flashing
			    and blinking lights, I wondered why, not knowing exactly
			    what. The monolith doors then seemed even scarier and I
			    just wished to get cramp in one of my legs or lose one of
			    my baby-teeth again. The clouds, the warm sand below my
			    feet, full of grains between the toes, the seashells
			    scattered along the shore, and the few strands of hair on
			    the top of the head of the old ones had, indeed, something
			    to tell me, but I just didn't hear them. So, because of
			    my sacred innocence, I ended up burning my entire body in
			    that sun, in a city that, despite being my hometown, I do
			    not know anything about -- such as an impersonal strange's 
			    house. Thus, I grew old, just to see the skies get grayer
			    and more opaque.
			</p>
			<p>
			    Today I walked to the front door; its glass were not as
			    smirch as they're use to be. Even the night were not 
			    very smirch: although its grayish colour, the sky looked
			    way clearer than usual. <em>Perhaps I could be a writer of
			    countless Molly Bloom's monologues,</em> I thought. The
			    automatic answer was no, 'cause not even among the greatest
			    schizophrenics I would really feel part of something. <em>
			    Indeed</em>, I went through one more thought, <em>neither
			    those clouds, nor the biology projects walking on the street
			    , nor this floor nor this ceiling, nor this agonizing song
			    playing right now, nor those websites, computers, the internet,
			    the programming languages, nor any other fucking shit related to
			    it: none of them have full stop periods, commas, semicolons
			    or dashes.</em>
			</p>
			<p>
			    <em>It reminds me of Molly Bloom's monologue.</em>
			</p>
		        <p>
			    Christmas reminds me of oranges -- the colour and the fruit --,
			    quiet and strange nights, mango trees, beaches, salty juices and
			    cakes made out of sponges. There's nothing prettier than this.
			    The teachers; the broken clocks which dressed up in time machines;
			    the unintentional and unnecessary poetic nightmares about points
			    and giant geometries I can't understand to this day. Even the 
			    ugly drawings. I started missing those things so much that
			    today the way I found to revive such innocence is to try 
			    forgetting how to breathe, just so that, in the few seconds of life
			    I have left, I have to relearn how to pull the air into my 
			    lungs once again.
			</p>
		        <p>
			    Since that old woman commented about the way I talk -- "his
			    talk's weird, ins't it? I don't know, sounds different, like
			    a foreigner", "no, it's how Dany talks" --, I knew something
			    I am neither able to put into words -- perhaps what the clouds
			    didn't tell me -- nor into projects.
			</p>
			<p>
			    "Am I a scientist or an artist?"
			</p>
			<p>
			    "Why not both?"
			</p>
			<p>
			    "Because for each one I'd have to dedicate a considerable amount
			    of time to get good at."
			</p>
			<p>
			    "I don't think so. Why are you separating them?"
			</p>
			<p>
			    "I don't know. I do need to be the better at them, y'know?
			    I do need.", so that was the moment I realized I just started,
			    somehow and somewhen, to be a <Link target="_blank" to={_pretender}>pretender</Link>
			</p>
			<p>
			    The fact is that I wished to update more this WebSite with cool and interesting
			    projects, but it takes a long time to do and I can't do anything when I'm too
			    focused on "important life stuff".
			</p>
		    </>
		}
		/>
	</>
    )
}
