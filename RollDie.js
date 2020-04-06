import React, { Component } from 'react';
import Die from './Die.js';
import './RollDie.css'


class RollDie  extends Component {
    static defaultProps={
        sides:["one","two","three","four","five","six"]
    };
    constructor(props){
        super(props);
            this.state={die1:"one" , die2:"one", rolling: false};
            this.Roll=this.Roll.bind(this);
    }
    Roll(){
        const newDie1=this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];
        const newDie2=this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];
        this.setState({die1: newDie1 , die2: newDie2 , rolling: true});
      
        setTimeout(() => {
            this.setState({rolling:false})
        }, 1000);

    }
	render() {
		return (
            <div className="RollDie">
                <div className="RollDie-container">
                <Die face={this.state.die1} rolling={this.state.rolling} />
                <Die face={this.state.die2} rolling={this.state.rolling} />
                </div>
                
                <button onClick={this.Roll} disabled={this.state.rolling}>
                    {this.state.rolling ? "Rolling..." : "Roll dice!"}
                    </button>
            </div>
        );
			
	}
}

export default RollDie;