import React, { Component } from 'react'
import axios from 'axios';
import CardsForFavorites from './CardsForFavorites';
import ModalFormShow from './ModalFormShow';
class FavoriteCocktials extends Component {
    constructor(props){
        super(props);
        this.state={
            server:process.env.REACT_APP_SERVER,
            resultArr:[],
            formState:false

        }
    }
    componentDidMount=async()=>{
        const result = await axios.get(`${this.state.server}/gettingDataFromDb`);
        this.setState({
            resultArr:result.data
        })
    }

    showForm=(id)=>{
        this.setState({
            id:id,
            formState:true
        })
    }

    deleteFavs=async(id)=>{
        const deleted = await axios.delete(`${this.state.server}/deleteFavs/${id}`);
        this.setState({
            resultArr:deleted.data
        })
    }

    closingForm=()=>{
        this.setState({
            formState:false
        })
    }


    updateTheCards=async(data)=>{
        const updated = await axios.put(`${this.state.server}/updateTheCards/${this.state.id}`,data);
        this.setState({
            resultArr:updated.data,
            formState:false
            
            
        })
    }


    render() {

        return (
            <div>
                <div>
                {this.state.resultArr.map(element=>{
                    return <CardsForFavorites 
                    everything = {element}
                    keysing = {element._id}
                    deleteFavs={this.deleteFavs}
                    showForm={this.showForm}
                    />
                })}
                </div>
                <div>
                    {this.state.formState && <ModalFormShow 
                    closingForm={this.closingForm}
                    updateTheCards={this.updateTheCards}
                    
                    />}
                </div>
            </div>
        )
    }
}

export default FavoriteCocktials
