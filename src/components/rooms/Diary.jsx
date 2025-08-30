
import React from 'react'
import { Link } from 'react-router-dom'

import BackHouse       from "../utils/BackHouse.jsx"
import Tree from "../utils/Tree.jsx";

import default_room_image from "../../assets/diary-room-image.webp"
import _file from "../../assets/icons/file.webp"

import "../../styles/showdown.css"
import "../../styles/rooms.css"
import "../../styles/tree.css"
import "../../styles/app.css"

// Entries
import Entry1 from "./entries-diary/1.md?raw";
import Entry2 from "./entries-diary/2.md?raw";
import Entry3 from "./entries-diary/3.md?raw";
import Entry4 from "./entries-diary/4.md?raw";


const DEFAULT_IMAGE_SIZE = 400;

function RoomImage({room_image}) {
    return <img src={room_image} height={DEFAULT_IMAGE_SIZE} width={DEFAULT_IMAGE_SIZE} />;
}

function simple_sanitizer(html) {
    // TODO: It's not very necessary for now, but, in the future, it would be interesting to build a more robust sanitizer.
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    
    const allowed_tags = ['h1', 'h2', 'h3', 'a', 'p', 'span', 'ul', 'li', 'img'];
    
    function clean_nodes(node) {
	if (node.nodeType === Node.ELEMENT_NODE) {
	    if (!allowed_tags.includes(node.tagName.toLowerCase())) {
		node.remove();
		return;
	    }
	}
	const children = Array.from(node.childNodes);
	children.forEach(clean_nodes);
    }
    clean_nodes(tmp);
    return tmp.innerHTML;
}

function RoomContent({ title,  text}) {
    const converter = new showdown.Converter({strikethrough: true, emoji: true, tasklist: true});
    let document;
    
    // TODO: find a better way of doing the follow.
    let entry1 = converter.makeHtml(Entry1);
    document = simple_sanitizer(entry1);
    let entry2 = converter.makeHtml(Entry2);
    // alert(entry2);
    document = simple_sanitizer(entry2);
    let entry3 = converter.makeHtml(Entry3);
    document = simple_sanitizer(entry3);
    let entry4 = converter.makeHtml(Entry4);
    document = simple_sanitizer(entry4);
    
    return (
	<div className="room_content">
	    <h2 className="text_center card">
		Diary/Blog.
	    </h2>
	    <div className="room_content_image">
		<RoomImage  room_image={ default_room_image } />
	    </div>
	    <p className="text_left">
		Here you are going to find all of my blog posts.
	    </p>
	    <div className="summary">
		<div className="ball purple_ball"></div>
		<p>
		    Most recent
		</p>
	    </div>
	    <div className="text_justify card most-recent-purple">
		<Tree 
		    _image={_file} 
		    _title="Science, journalism and adulthood"
		    _text={
			<div className="showdowncontainer">
			  <span dangerouslySetInnerHTML={{__html: entry4}} />
			</div>
		    }
		/>
	    </div>
	    <div className="text_justify card">
		<Tree 
		    _image={_file} 
		    _title="Young and Foolish"
		    _text={
			<div className="showdowncontainer">
			  <span dangerouslySetInnerHTML={{__html: entry3}} />
			</div>
		    }
		/>
	    </div>
	    <div className="text_justify card">
		{/*<Entry2 />*/}
		<Tree 
		    _image={_file} 
		    _title="Post title"
		    _text={
			<div className="showdowncontainer">
			  <span dangerouslySetInnerHTML={{__html: entry2}} />
			</div>
		    }
		/>
	    </div>
	    <div className="text_justify card">
		{/*<Entry1 />*/}
		<Tree 
		    _image={_file} 
		    _title="A False(or not) Diary"
		    _text={
			<div className="showdowncontainer">
			  <span dangerouslySetInnerHTML={{__html: entry1}} />
			</div>
		    }
		/>
	    </div>
	    <BackHouse />
	</div>
    );
}

export default function Writing() {
    return (
	<div id="room_container">
	    <RoomContent />
	</div>
    )
}
