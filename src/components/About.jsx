
import React from 'react'
import { Link } from 'react-router-dom'

import default_room_image from "../assets/about-room-image.webp"
import BackHouse from "./BackHouse.jsx"

import "../styles/rooms.css"
import "../styles/app.css"

const DEFAULT_IMAGE_SIZE = 350

function RoomImage({room_image}) {
    return <img src={room_image} height={DEFAULT_IMAGE_SIZE} width={DEFAULT_IMAGE_SIZE} />;
}

function ListLink({text, path, point}) {
    return <li><a target="blank" href={path}>{text}</a>{point}</li>;
}

function RoomContent({title, text}) {
    return (
	<div className="room_content">
	    <h2 className="text_center card">
		A Room About Someone.
	    </h2>
	    <div className="room_content_image">
		<RoomImage room_image={default_room_image} />
	    </div>
	    <p className="text_justify card">
		"Olho a caixa postal. Nada de novo. Volto ao "principal". Também nada
		de novo. Procuro ali pelo algo, mas 'algo' algum existe. Talvez falte
		um quê de fantástico nas conversas do dia-a-dia, digo a mim mesmo 'numa
		mudez impressionante. Levanto. Vou ao banheiro. Lavo as mãos. Seco-as.
		Olho-me no espelho; sinto querer soltar gemido grego, mas grito algum
		desentala da garganta. Volto ao quarto. Nada de novo, repito,
		esquizofrênico. 
		<br />
		<br />
		"Nas mansas perguntas diárias, o que falta é o quê filósofo. Mas o 
		que exatamente seria esse quê? Substantivo? Próprio ou indefinido? 
		Não sei, e talvez nem queira. Certa vez ouvi cientista dizer 
		que sente-se bem com a própria ignorância sobre certas questões 
		sobre certas coisas; achei um absurdo: como pode um cientista 
		satisfazer-se com algo tão pouco, sem-sal, tempero ou caldo com'a 
		ignorância? Hoje tenho a sensação de querer descobrir o porquê, mas 'inda
		d'um jeito tão infantil! Gosto de crer que é daí que vem o ego cientista."
	    </p>
	    <h2 className="text_justify">
		Contact
	    </h2>
	    <div className="text_justify card">
		<ul>
		    <li>Gmail: asgooffeeasme@gmail.com </li>
		    <li></li>
		</ul>
	    </div>
	    <h2 className="text_justify">
		More
	    </h2>
	    <div className="text_justify card">
		Interests:
		<ul>
		    <li>Recreational programming and computer science in general;</li>
		    <li>Physics, biology and mathematics;</li>
		    <li>Literature, writing and drawing;</li>
		    <li>Linguistics;</li>
		</ul>
	    </div>
	    <div className="text_justify card">
		Random facts about me listed by M.:
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
		    <ListLink text="Better video about the construction of the pyramids" path="https://youtu.be/EF3w2Dldg1o?si=aSjqwOodBWYyWTbS" point=";" />
		    <ListLink text="ToaruOS running on a real hardware" path="https://youtu.be/1hz8fYghklw?si=SZ_TtaKAR-YKFIS2" point=";" />
		    <ListLink text="Miranda's personal WebSite" path="https://mirandaisasleep.neocities.org" point=";" />
		    <ListLink text="Voylin's 1st April fool" path="https://www.youtube.com/watch?v=CJEyuMoV9o0" point=";" />
		    <ListLink text="Why Miranda is straight" path="https://mirandaisstraight.neocities.org" point=";" />
		    <ListLink text="Copacabana song" path="https://youtu.be/uLo0i-vCt_Y?si=V4_BpVKLfiy4qS1D" point=";" />
		    <ListLink text="Tsoding F.A.Q." path="https://github.com/tsoding/faq" point=";" />
		    <ListLink text="Russian Blue" path="https://youtu.be/2LiBizgWqMM?si=KeotcyWYyQDEK5TI" point=";" />
		    <ListLink text="Childhood" path="https://youtu.be/ecptG36KKp8?si=Vz4t1t9yAgaBbs7Z" point=";" />
		    <ListLink text="Nevermind" path="https://youtu.be/oRCB7fTpl3Y?si=3ypRh7ML1mRnj2Bk" point=";" />
		    <ListLink text="Blue" path="https://youtu.be/3QYpsCfs-j8?si=4iia2LXE1YNHJ7B5" point="." />
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
	    <div style={{width:'50px'}}></div>
	</div>
    )
}
