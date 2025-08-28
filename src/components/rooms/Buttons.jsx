
import React from 'react'
import { Link } from 'react-router-dom'

import _default_room_image from "../../assets/button-room-image.webp"
import BackHouse from "../utils/BackHouse.jsx"

import "../../styles/rooms.css"
import "../../styles/app.css"

import _iwillneverbehappy from "../../assets/buttons/iwillneverbehappy.gif"
import _project190        from "../../assets/buttons/project190.gif"
import _abcthehuman       from "../../assets/buttons/abcthehuman.gif"
import _aegi              from "../../assets/buttons/aegi_button.gif"
import _bernardo          from "../../assets/buttons/bernardo.png"
import _cyberstheb        from "../../assets/buttons/cyberstheb.gif"
import _dorival           from "../../assets/buttons/dorival-button.gif"
import _fidomanin         from "../../assets/buttons/fidomanin.png"
import _gildedware        from "../../assets/buttons/gildedware.gif"
import _irony_machine     from "../../assets/buttons/irony-machine.png"
import _jutipia           from "../../assets/buttons/jutipia.png"
import _lazybone          from "../../assets/buttons/lazybone.png"
import _rike              from "../../assets/buttons/rike.gif"
import _vinizone          from "../../assets/buttons/vinizone.png"
import _tevito            from "../../assets/buttons/tevito.gif"
import _me                from "../../assets/buttons/gooffee.gif"
import _wallaceonline     from "../../assets/buttons/wallaceonline.png"
import _nathansplace      from "../../assets/buttons/nathansplace.png"
import _octagon           from "../../assets/buttons/octagon.png"
import _linux             from "../../assets/buttons/linux.gif"
import _slackware         from "../../assets/buttons/slackware.gif"
import _keyboard          from "../../assets/buttons/keyboard.png"


const _DEFAULT_IMAGE_SIZE = 400


function RoomImage({_room_image}) {
    return <img src={_room_image} height={_DEFAULT_IMAGE_SIZE} width={_DEFAULT_IMAGE_SIZE} />;
}

function RoomContent({_title, _text}) {
    
    return (
	<div className="room_content">
	    <h2 className="text_justify card">
		My dear Neighbors.
	    </h2>
	    <div className="room_content_image">
		<RoomImage _room_image={_default_room_image} />
	    </div>
	    <div className="card">
		<Link target="_blank" to="https://iwillneverbehappy.neocities.org">
		    <img src={_iwillneverbehappy} className="website-button" />
		</Link>
		<Link target="_blank" to="https://iwillneverbehappy.neocities.org">
		    <img src={_project190} className="website-button" />
		</Link>
		<Link target="_blank" to="https://fi-do-manin.neocities.org/">
		    <img src={_fidomanin} className="website-button" />
		</Link>
		<Link target="_blank" to="https://lazybones.neocities.org/">
		    <img src={_lazybone} className="website-button" />
		</Link>
		<Link target="_blank" to="https://irony-machine.neocities.org/">
		    <img src={_irony_machine} className="website-button" />
		</Link>
		<Link target="_blank" to="https://dorival.neocities.org/">
		    <img src={_dorival} className="website-button" />
		</Link>
		<Link target="_blank" to="https://jutipia.neocities.org/">
		    <img src={_jutipia} className="website-button" />
		</Link>
		<Link target="_blank" to="https://aegi.neocities.org/">
		    <img src={_aegi} className="website-button" />
		</Link>
		<Link target="_blank" to="https://gildedware.net/">
		    <img src={_gildedware} className="website-button" />
		</Link>
		<Link target="_blank" to="https://abcthehuman.neocities.org/">
		    <img src={_abcthehuman} className="website-button"/>
		</Link>
		<Link target="_blank" to="https://dorival.neocities.org/" className="website-text-button" style={{padding:'21px', paddingBottom:'0px'}}>
		    I-Land
		</Link>
		<Link target="_blank" to="https://vinizinho.net/">
		    <img src={_vinizone} className="website-button" />
		</Link>
		<Link target="_blank" to="https://hnrikaster.neocities.org/">
		    <img src={_rike} className="website-button" />
		</Link>
		<Link target="_blank" to="https://berbardo.com/">
		    <img src={_bernardo} className="website-button" />
		</Link>
		<Link target="_blank" to="https://cyberstheb.neocities.org/">
		    <img src={_cyberstheb} className="website-button"/>
		</Link>
		<Link target="_blank" to="https://magilovescats.neocities.org/" className="website-text-button" style={{padding:'21px', paddingBottom:'0px'}}>
		    Magi's
		</Link>
		<Link target="_blank" to="https://tevito.neocities.org/" className="website-button">
		    <img src={_tevito} className="website-button"/>
		</Link>
		<Link target="_blank" to="https://octagon.neocities.org/">
		    <img src={_octagon} className="website-button" width="88px" height="32px"/>
		</Link>
		<Link target="_blank" to="https://nathanntan.neocities.org/">
		    <img src={_nathansplace} className="website-button"/>
		</Link>
		<Link target="_blank" to="https://wallace-online.neocities.org/">
		    <img src={_wallaceonline} className="website-button"/>
		</Link>
		<p>
		    Here's my website button. If you did link me, do not hesitate to tell me.
		</p>
		<Link target="_blank" to={_me}>
		    <img src={_me} className="website-button" />
		</Link>
		<p>
		    And for those interested in sending me messages: 
		</p>
		<Link target="_blank" to={"https://gooffee.atabook.org/"}>
		    my WebSite's guestbook
		</Link>;
		<p>
		    -- // --
		</p>
		<Link target="_blank" to={"https://en.wikipedia.org/wiki/Linux"}>
		    <img src={_linux}     className="website-button" />
		</Link>
		<Link target="_blank" to={"http://www.slackware.com/info/"}>
		    <img src={_slackware} className="website-button" />
		</Link>
		<Link target="_blank" to={_keyboard}>
		    <img src={_keyboard}  className="website-button" />
		</Link>
	    </div>
	    <BackHouse />
	</div>
    );
}

export default function Buttons() {
    return (
	<div id="room_container">
	    <RoomContent />
	</div>
    )
}
