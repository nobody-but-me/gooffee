
import React from 'react'
import { Link } from 'react-router-dom'

import Tree from "../Tree.jsx"
import "../../styles/tree.css"
import "../../styles/app.css"

import _default_room_image from "../../assets/writing-room-image.webp"
import _book from "../../assets/icons/book.webp"

export default function Pires() {
    return (
	<>
	    <Tree 
		_image={_book}
		_title={
		    <h3>
			[09/19/2024][EN, PT-BR] Cadê o pires? 
		    </h3>
		} 
		_text={
		    <>
			<p>
			    The text below, dated from May 21st, 2024, is an unfinished project to learn more about elisions. Despite some people told me to finish it, I am not going to. The metaphors are good and I loved the text style, but it became extremly confusing and meaningless as the text was being written.
			</p>
			<p>
			    Even though, if you are interesting on how it would end: the central character -- an old woman with Alzheimer's) would forget about everything she thought during the story.
			</p>
			<p>
			    Fun-fact: everyone I showed this text to did not understand it, except my grammar teacher, who smiled and laughed little laughs.
			</p>
			<br />
			<p>
			    -- --
			</p>
			<br />
			<p>
			    O café pingou’m pouco de si sobre a mesinha de’star quando o peguei. Eu’spiei dentro da xícara’marela qu’agora’braçava minhas mãos, talvez na tentativa de entender por que dividira tanto de si com tantos outros. Então ouvi o piano d’eternidade tocand’entre pare’des’egundos — ou foram’inutos? —, e’ntão percebi não se lembrar se havia recordado d’alg[u]’esquecid’ou esquecido d’alg[u]’irrecordável. E à luz desse pensament’entristeci-me quase como se viss’uma memória perdid’um passado não mais existente que se confunde co’existente no meio d’inexistente, assim como se faz uma paisagem através d’uma port’enodoada.
			</p>
			<p>
			    Manejei a cabeça para observar’o fogo matand’a si mesmo na lareira já enfeitada para o natal. Tinham meias de diversas cores ali, além, claro, dos presentes mais simples de tamanho simplório e d’um crucifixo com o corpo de cristo. Quanta barrocagem!, pensei enquanto sorria ao gozo da palavra que tinha acabado de criar. Logo, sem perceber, havia levado-me ao barroco nas pernas da mesa à frente, também sem sentido algum em suas antíteses e contradições, assim como seus detalhes ostentadamente desnecessários, especiais e belos da forma mais banal de serem; barrocagem inútil apenas para confundir pessoas não pertencentes a tudo isso! Quanta estupidez jogada como dados em letras sem acepção alguma.
			</p>
			<p>
			    Aquele professor gostava de arte barroca, não? Qual era mesmo seu nome? El’era mesmo um professor? Provavelmente, recordei-me rangend’o típico sorris’amarelado brasileiro. Er’exótico da maneira mais natural possível de ser. Até seu jeito de andar er’exótico, sempre batend’involuntariamente com os dedos dos pés involuntários em móveis traidores. Coaxei rindo dos muitos relógios que tinha. Oh, eram tantos!, de tantas cores diferentes!
			</p>
		    </>
		}
		/>
	</>
    )
}
