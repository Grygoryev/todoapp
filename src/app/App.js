import React, { Component } from 'react';
import '../scss/main.scss';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
                {name: 'Cart', text: 'Etwas kekwas sekwas pekwas', id: 1, active: false},
                {name: 'Spoon', text: 'Esto Espresso Cofesto Milen', id: 2, active: false},
                {name: 'Flower', text: 'Awesome Advanture', id: 3, active: false}, 
                {name: 'Stadium', text: 'Real pEkan goes right to be the rightest', id: 4, active: true}
            ]
        }
    }
    
    render() {
       return (
            <div className="app">
                <header className="header box">
                    <h1 className="header__title">Main</h1>
                </header>
                <main className="main box">
                    <section className="content">
                        <h2 className="content__title">{this.state.tabs.name}</h2>
                        <img src={this.state.tabs.img} alt="" className="content__photo"/>
                        <p className="content__text">{this.state.tabs.text}</p>
                    </section>
                </main>
            </div>
       )
    }
}
