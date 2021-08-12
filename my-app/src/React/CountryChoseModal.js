import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal'
import {Button} from "react-bootstrap";
import Covid19Counter from "./Covid19Counter";

export default function CountryChoseModal(){
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    //const submmit =()=> {setCountry(e.value)}

    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Chose your Country</Modal.Title>
                </Modal.Header>
                <Modal.Body><form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}