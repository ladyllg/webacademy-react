import useForm from '../hooks/productForm';
import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Productform = (props) => {

    const history = useHistory();

    const baseURL = "https://my-json-server.typicode.com/ladyllg/web-academy-db/products";

    const [product, setProduct] = React.useState(null);

    const [formData, handleChange, handleSubmit] = useForm();
    
    const enviarProduct = () => {
        axios
        .post(baseURL, {...useForm})
        .then((response) => {
            setProduct(response.data);
        });
        history.push('/'); // Redirect to new page
    };

    return (
        <div>
            <h1>Registrar produto</h1>
            <form onSubmit={handleSubmit(enviarProduct)}>
                <input
                    onChange={handleChange}
                    type="text"
                    name="name"
                    placeholder="Nome do produto"
                />
                <input
                    onChange={handleChange}
                    type="number"
                    name="price"
                    placeholder="Preço"
                />
                <button type="submit" onClick={() => props.addNewProductToHome(formData)}> Enviar</button>
            </form>
        </div>

    );
}

export default Productform;