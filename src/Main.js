import axios from 'axios';
import React, { Component } from 'react'
import CardsForMain from './CardsForMain'
 class Main extends Component {
     constructor(props){
         super(props);
         this.state={
             server:process.env.REACT_APP_SERVER,
             resultArr:[],
             
         }
     }
     

     componentDidMount=async()=>{
         const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';
         const getter = await axios.get(url);
         this.setState({
             resultArr:getter.data.drinks
         })
     }

     addToFav=async(data)=>{
         const adder = await axios.post(`${this.state.server}/addToFav`,data);
         this.setState({
             resultArr:adder.data
         })
     }

    render() {
        return (
            <div>
                {this.state.resultArr.map((element,idx)=>{
                    return <CardsForMain
                    everything = {element}
                    idx={idx}
                    addToFav={this.addToFav}
                    />
                })}
            </div>
        )
    }
}

export default Main
