import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.personAddedHandler} />
                {this.props.personsState.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        personsState: state.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        personAddedHandler: () => dispatch({type: 'ADD_PERSON'}),
        personDeletedHandler: (personId) => dispatch({type: 'REMOVE_PERSON', personId: personId})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);