import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import './Home.css'

const Home = (props) => {
    const cards = props.cardsData.map((row, index) => {
        return (
            <div className='Home-flexcontainer-item'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://w1.pngwing.com/pngs/126/188/png-transparent-plastic-bottle-detergent-laundry-detergent-cleaning-housekeeping-dish-detergent-soap-washing-washing-machines.png" />
                    <Card.Body>
                        <Card.Title>{row.name}</Card.Title>
                        <Card.Text>
                            {row.price}
                        </Card.Text>
                        <Button
                            id={row.id}
                            variant="secondary"
                            className="w-100"
                            onClick={() => props.addProducts(row.id)}
                        >
                            <svg className="mb-1" fill="white" width="20" height="20" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" /></svg> Add To Cart
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        )
    })

    return (
        <div className='Home-body'>
            {cards}
        </div>

    );
}

export default Home;