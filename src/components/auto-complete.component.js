import React from 'react';

import './auto-complete.css'

export default class AutoComplete extends React.Component {
    constructor(props) {
        super(props)

        //array to hold autocomplete suggestions

        this.state = {
            suggestions: [],
            text: '',
        };
    }

    onTextChanged = (e) => {
        const { items } = this.props
        const value = e.target.value
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i')
            suggestions = items.sort().filter(v => regex.test(v))
        }
        this.setState(() => ({ suggestions, text: value }))
    }

    //make selection populate search box
    suggestionChosen(value) {
        this.setState({
            text: value,
            suggestions: []
        })
    }

    renderSuggestions() {
        const { suggestions } = this.state;
        if (!suggestions) {
            return null;
        }
        return (
            <ul>
                {suggestions.map((item) => <li onClick={() => this.suggestionChosen(item)}>{item}</li>)}
            </ul>
        )
    }
    //within ul, we map over each element in array and output an li element for that item
    render() {
        const { text } = this.state
        return (
            <div className='textbox'>
                <input value={text} onChange={this.onTextChanged} type='text' />
                {this.renderSuggestions()}
            </div>
        )
    }
}