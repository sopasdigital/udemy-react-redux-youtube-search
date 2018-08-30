//  Import 'React' from 'react' &
//  use destructuring to get React.Component
//  from 'react' and create a variable 'Component'
//  that we can use for the class declaration
import React, { Component } from 'react';

//  Functional component
//  Create an input field
// const SearchBar = () => {
//   return <input />
// }

//  Class-based component
// class SearchBar extends React.Component {
//   //  Must always have a render method
//   render() {
//     //  Return JSX
//     return <input />;
//   }
// }

//  Class-based component
class SearchBar extends Component {
  //  Create a constructor
  constructor(props) {
    //  Call parent method via 'super'
    super(props);

    //  Initialise 'state' by creating an
    //  object and assigning it to
    //  'this.state'. We have a property
    //  in this object called 'term'
    //  This format is only used WITHIN
    //  a constructor
    this.state = { term: '' };
  }

  //  Must always have a render method
  render() {
    //  Return JSX and attach an event handler
    //  to our input
    // return <input onChange={this.onInputChange} />;

    //  Condensed version of having an event handler
    //  declaration
    //  use onChange to change this component's state
    
    return (
      <div className="search-bar">
        {
        //  Controlled component
        //  This has it's value controlled by it's state
        }
        <input
          value={this.state.term} 
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  //  Create an event handler
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
