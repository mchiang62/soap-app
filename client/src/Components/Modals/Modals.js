import React, { Component } from "react";
import {Container, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class Modals extends Component {
    state = {
        openModal: false
    }

    toggleModal () {
        this.setState({
            openModal: ! this.state.openModal
        });
    }

    render() {
        return (
            <Container>
                <Modal isOpen={true}>
                    <ModalHeader toggle={this.toggleModal.bind(this)}>Title</ModalHeader>
                    <ModalBody>Added items in cart</ModalBody>
                    <ModalFooter>
                        <button onClick={this.toggleModal.bind(this)}>Continue Shopping</button>
                        <button>Go to Cart</button>
                    </ModalFooter>

                </Modal>
            </Container>


        )
    }



}

export default Modals;
