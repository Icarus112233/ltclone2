import React from 'react'
import App from '../App.css'

function SoundcloudButton() {
	return (
		<div>
			<a href="https://soundcloud.com/salmanfuwu/salmanf-diaspora/">
				<button
				class="soundcloudButton"
				>
					<div style={{fontSize: 'calc(1px + 2vmin)'}}>*NEW MIX*</div>
					SOUNDCLOUD
				</button>
			</a>
		</div>
	)
}

export default SoundcloudButton;