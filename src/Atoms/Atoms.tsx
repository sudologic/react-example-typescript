import logo from '../logo.svg';
import './Atoms.css';
import Menu from '../Menu/Menu';
import React, { Component } from 'react';

class Atoms extends Component {
    state = {
        atoms: 1
    }

    addAtoms = () => {
        this.setState( {atoms: this.state.atoms + 1})
    }

    subtractAtoms = () => {
        if (this.state.atoms > 0) {
            this.setState( {atoms: this.state.atoms - 1})
        }
    }

    render() {
        return (
            <div className="App">
            <div id="Menu">
            <Menu addAtoms={this.addAtoms} subtractAtoms={this.subtractAtoms} />
        </div>
        <header className="App-header">
        <Atom atoms={this.state.atoms} />
        </header>
        </div>
    )
    }
}

export default Atoms;

function Atom(props: { atoms: number; }) {
    let x = [];
    for (let i = 0; i < props.atoms; i++) {
        x.push(<img src={logo} className="App-logo" alt="logo" />);
    }
    return (
        <div>
            {x}
        </div>
    );
}