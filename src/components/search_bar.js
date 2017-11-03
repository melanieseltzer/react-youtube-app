// Import react and pull off the component property as a variable called Component
import React, { Component } from 'react';

// Class component that extends React.Component for additional functionality
// Class components have state
class SearchBar extends Component {
  // Initialize state
  // Constructor called automatically when new instance of the class is created
  constructor(props) {
    // Call the parent method
    super (props);

    // Create a new object, assign it to this.state
    // This is only time we use this.state = ...
    this.state = { term: '' };
  }

  // Class component always needs a render method
  render() {
    // Pass the event handler to the element for monitoring
    // Always manipulate state with this.setState
    return (
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}

export default SearchBar;
