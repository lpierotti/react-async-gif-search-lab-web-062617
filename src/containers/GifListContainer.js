import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component {

	constructor() {
		super()
		this.state = {
			gifs: []
		}
		this.fetchGifs = this.fetchGifs.bind(this)
	}

	fetchGifs(searchTerm) {
		fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=64db678ec9b14166b11841c927a4f28f`)
			.then(resp => resp.json())
			.then(json => this.setState({gifs: [json.data[0].images.fixed_height.url, json.data[1].images.fixed_height.url, json.data[2].images.fixed_height.url]}))
	}

	render() {
		return (
			<div>
				<GifSearch searchGif={this.fetchGifs}/>
				<GifList displayGifs={this.state.gifs}/>
			</div>
		)
	}
}


export default GifListContainer