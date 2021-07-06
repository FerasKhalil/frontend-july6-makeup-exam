import React, { Component } from 'react';
import {Card,Button} from 'react-bootstrap'
class CardsForMain extends Component {
    render() {
        return (
            <div>
                <Card key = {this.props.keysing} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.everything.strDrinkThumb} />
                    <Card.Body>
                        <Card.Title>{this.props.everything.strDrink}</Card.Title>
                        <Card.Text>
                           {this.props.everything.idDrink}
                        </Card.Text>
                        <Button variant="primary" onClick={()=>this.props.addToFav(this.props.everything)}>ADD TO FAV</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default CardsForMain
