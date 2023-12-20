import React, { Component } from 'react'
import './burger.css'
class Burger extends Component {
    state = {
        lettuce: 0,
        tomato: 0,
        cheese: 0,
        meat:0
    }

    addRemoveIngredients = (action,ingredient) => {
        let { lettuce, tomato, cheese, meat } = this.state;
        let stateValue;
        switch (ingredient) {
            case 'lettuce': {
                stateValue = lettuce;
                break;
            }
            case 'tomato': {
                stateValue = tomato;
                break;
            }
            case 'cheese': {
                stateValue = cheese;
                break;
            }
            case 'meat': {
                stateValue = meat;
                break;
            }
            default: break;
        }

        if (action === 'add') {
            stateValue = stateValue+1
        } else {
            stateValue = stateValue-1
        }

        this.setState({
            [ingredient]:stateValue>=0 ? stateValue:0
        })
    }
 
    burgerContent = () => {
        let { lettuce, cheese, tomato, meat } = this.state
        let burger = [];

        // outputting the lettuce
        for (let i = 0; i < lettuce; i++){
            burger.push(<div key={burger.length} className="lettuceSide"></div>)
        }
        // outputting the tomato
        for (let i = 0; i < tomato; i++){
            burger.push(<div key={burger.length} className="tomatoSide"></div>)
        }

        // outputting the cheese
        for (let i = 0; i < cheese; i++){
            burger.push(<div key={burger.length} className="cheeseSide"></div>)
        }

        // outputting the meat
        for (let i = 0; i < meat; i++){
            burger.push(<div key={burger.length} className="meatSide"></div>)
        }
        return burger
    }
    render() {
        return (
            <>
                <div className="burgerIngredients">
                    <div className="topSide"></div>
                    {this.burgerContent()==0?<p style={{textAlign:'center'}}>Please start adding ingredients</p>:this.burgerContent()}
                    <div className="bottomSide"></div>
                </div>
                <div className="ingredientsBlock">
                    <p>Lettuce</p>
                    <div className="ingrBtns">
                        <button onClick={()=>this.addRemoveIngredients('add','lettuce')} className="ingrBtn">Add</button>
                        <button onClick={() => this.addRemoveIngredients('remove', 'lettuce')} className="ingrBtn">Remove</button>
                    </div>
                    <p>Tomato</p>
                    <div className="ingrBtns">
                        <button onClick={()=>this.addRemoveIngredients('add','tomato')} className="ingrBtn">Add</button>
                        <button onClick={() => this.addRemoveIngredients('remove', 'tomato')} className="ingrBtn">Remove</button>
                    </div>
                    <p>Cheese</p>
                    <div className="ingrBtns">
                        <button onClick={()=>this.addRemoveIngredients('add','cheese')} className="ingrBtn">Add</button>
                        <button onClick={() => this.addRemoveIngredients('remove', 'cheese')} className="ingrBtn">Remove</button>
                    </div>
                    <p>Meat</p>
                    <div className="ingrBtns">
                        <button onClick={()=>this.addRemoveIngredients('add','meat')} className="ingrBtn">Add</button>
                        <button onClick={() => this.addRemoveIngredients('remove', 'meat')} className="ingrBtn">Remove</button>
                    </div>
                </div>
            </>
        )
    }
}
export default Burger