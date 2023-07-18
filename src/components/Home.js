import Card from 'react-bootstrap/Card';

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