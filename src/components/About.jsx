
import React from 'react'
import { Link } from 'react-router-dom'

import _default_room_image from "../assets/about-room-image.webp"
import BackHouse from "./BackHouse.jsx"

import "../styles/rooms.css"
import "../styles/app.css"


const _DEFAULT_IMAGE_SIZE = 400

function ListLink({_text, _path, _point}) {
    return <li><a target="blank" href={_path}>{_text}</a>{_point}</li>;
}

function RoomImage({_room_image}) {
    return <img src={_room_image} height={_DEFAULT_IMAGE_SIZE} width={_DEFAULT_IMAGE_SIZE} />;
}

function RoomContent({_title, _text}) {
    return (
	<div className="room_content">
	    <h1 className="text_right">
		A Room About Someone.
	    </h1>
	    <p className="text_justify card">
		"Olho a caixa postal. Nada de novo. Volto ao "principal". Também nada
		de novo. Procuro ali pelo algo, mas 'algo' algum existe. Talvez falte
		um quê de fantástico nas conversas do dia-a-dia, digo a mim mesmo 'numa
		mudez impressionante. Levanto. Vou ao banheiro. Lavo as mãos. Seco-as.
		Olho-me no espelho; sinto querer soltar gemido grego, mas grito algum
		desentala da garganta. Volto ao quarto. Nada de novo, repito 
		esquizofrênico. 
		<br />
		<br />
		"Nas mansas perguntas diárias, o que falta é o quê filósofo. Mas o 
		que exatamente seria esse quê? Substantivo? Próprio ou indefinido? 
		Não sei, e talvez nem queira saber. Certa vez ouvi cientista dizer 
		que sente-se bem com a própria ignorância sobre certas questões 
		sobre certas coisas; achei um absurdo: como pode um cientista 
		satisfazer-se com algo tão pouco, sem-sal, tempero ou caldo com'a 
		ignorância? [...]"
	    </p>
	    <div className="text_justify italic card">
		<ul>
		    <li>
			"In the mind of those who constantly live with a death sentence,
			the impossible real world is the unique thing to stick around."
		    </li>
		</ul>
	    </div>
	    <h1 className="text_right">
		Contact
	    </h1>
	    <div className="text_justify card">
		<ul>
		    <li>Gmail: asgooffeeasme@gmail.com </li>
		</ul>
	    </div>
	    <h1 className="text_right">
		More
	    </h1>
	    <div className="text_justify card">
		Interests:
		<ul>
		    <li>Linguistics;</li>
		    <li>Recreational programming, Computer Science;</li>
		    <li>Physics, biology, mathematics;</li>
		    <li>Literature, drawing, amateur filmmaking.</li>
		</ul>
	    </div>
	    <div className="text_justify card">
		Random facts about me listed by a special friend:
		<ul>
		    <li>daniel wears ladybug slippers;</li>
		    <li>daniel loves crocodiles;</li>
		    <li>daniel has a passion for philosophy;</li>
		    <li>daniel is learning to play the keyboard (not anymore);</li>
		    <li>daniel is learning Russian.</li>
		</ul>
	    </div>
	    <div className="text_justify card">
		Misc:
		<ul>
		    <ListLink _text="Tsoding Faq" _path="https://github.com/tsoding/faq" _point=";" />
		    <ListLink _text="Voylin's 1st April fool" _path="https://www.youtube.com/watch?v=CJEyuMoV9o0" _point=";" />
		    <ListLink _text="Why Miranda is straight" _path="https://mirandaisstraight.neocities.org" _point=";" />
		    <ListLink _text="Copacabana song" _path="https://youtu.be/uLo0i-vCt_Y?si=V4_BpVKLfiy4qS1D" _point=";" />
		    <ListLink _text="ToaruOS running on a real hardware" _path="https://youtu.be/1hz8fYghklw?si=SZ_TtaKAR-YKFIS2" _point=";" />
		    <ListLink _text="Blue" _path="https://youtu.be/3QYpsCfs-j8?si=4iia2LXE1YNHJ7B5" _point=";" />
		    <ListLink _text="Miranda's personal WebSite" _path="https://mirandaisasleep.neocities.org" _point="." />
		</ul>
	    </div>
	    <BackHouse />
	</div>
    );
}

export default function About() {
    return (
	<div id="room_container">
	    <RoomContent />
	    <div className="room_content_image">
		<RoomImage _room_image={_default_room_image} />
	    </div>
	</div>
    )
}
