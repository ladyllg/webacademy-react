import { useState } from 'react';
import { Button, Offcanvas, Stack } from "react-bootstrap";

const Cart = (props) => {

    const { cartIsActive } = props

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const rows = props.cartData?.map((row, index) => {
        return (
            <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
                <img
                    alt="Imagem de exemplo" src="https://w1.pngwing.com/pngs/126/188/png-transparent-plastic-bottle-detergent-laundry-detergent-cleaning-housekeeping-dish-detergent-soap-washing-washing-machines.png"
                    style={{ width: "125px", height: "75px", objectFit: "cover" }}
                />
                <div className="me-auto">
                    <div>
                        {row?.name}
                    </div>
                </div>
                <div>R${row.price}</div>
                <Button
                    variant="outline-danger" size="sm"
                    onClick={() => {
                        props.removeProduct(index);
                    }}
                >&times;</Button>
            </Stack >

        )
    })

    return (
        <>
            <Button
                onClick={handleShow}
                style={{ width: "3rem", height: "3rem", position: "relative" }}
                variant="outline-warning"
                className="rounded-circle">
                <svg fill="currentColor" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" /> </svg>
            </Button>
            <Offcanvas placement="end" show={show} backdrop="static" onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Carrinho</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {cartIsActive ? <>{rows}</> : <div>Seu carrinho está vazio!</div>}
                    <hr></hr>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Cart