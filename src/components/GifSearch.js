import React from 'react'

class GifSearch extends React.Component {
	constructor() {
		super()
		this.state = {
			searchTerm: ''
		}
		this.handleClick = this.handleClick.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleClick() {
		this.props.searchGif(this.state.searchTerm)
	}

	handleChange(event) {
		this.setState({searchTerm: event.target.value})
	}

	render() {
		return (
			<div> 
				<input onChange={this.handleChange} type='text' value={this.state.searchTerm} />
				<input onClick={this.handleClick} type='submit'/>
			</div>
		)
	}
}

export default GifSearch