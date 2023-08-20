import React from 'react'
import App from '../App.css'

function Contact() {
	return (
		<div>
				<button
				class="contactButton"
				onClick={() => window.location = 'mailto:sfmusicandbooking@gmail.com'}
				>
					✉️
				</button>
		</div>
	)
}

export default Contact;