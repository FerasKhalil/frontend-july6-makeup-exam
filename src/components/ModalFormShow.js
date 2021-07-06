import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
class ModalFormShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameText: '',
            imgText: '',
            idText: ''

        }
    }

    nameFunc = (event) => {
        this.setState({ nameText: event.target.value })
        console.log(this.state.nameText);
    }

    imgFunc=(event)=>{
        this.setState({
            imgText:event.target.value
        })
        console.log(this.state.imgText);
    }
    idFunc=(event)=>{
        this.setState({
            idText:event.target.value
        })
        console.log(this.state.idText);
    }


    render() {
        return (
            <div>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>input your Updates</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <input type='text' placeholder="for the name" onChange={this.nameFunc}/>
                        <input type='text' placeholder="for the image" onChange={this.imgFunc}/>
                        <input type='text' placeholder="for the ID" onChange={this.idFunc}/>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.closingForm}>Close</Button>
                        <Button variant="primary" onClick={()=>this.props.updateTheCards({strDrink:this.state.nameText,strDrinkThumb:this.state.imgText,idDrink:this.state.idText})}>Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        )
    }
}

export default ModalFormShow
