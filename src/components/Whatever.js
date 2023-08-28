import React from 'react'
import App from '../App.css'

function Whatever() {
	return (
		<div>
			<iframe 
				width="250"
				height="200"
				align="left"
				style={{position:"relative", left: "100px", bottom:"300px", border:"2px solid white"}}
				allow="autoplay" 
				src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1348607425&color=%23DC00D9&inverse=true&auto_play=false&show_user=true&show_playcount=false"
			>
			</iframe>
		</div>
	)
}

export default Whatever;