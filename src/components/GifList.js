import React from 'react'

const GifList = (props) => {
	const gifs = props.displayGifs.map(url => {
		return <li key={url}><img src={url}/></li>
	})
	return (
		<ul> 
			{gifs}
		</ul>
	)
}

export default GifList