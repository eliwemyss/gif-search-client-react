import React from 'react';


class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = { term: '' }
    }


    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    }

    render() {
        return (
            <div className="search-form">
            	<form onSubmit={event => event.preventDefault()}>
                	<input 
                		onChange={event => this.onInputChange(event.target.value)}
						placeholder="Search for gifs..."
                		 />

                </form>
            </div>
        );
    }
}

export default SearchBar