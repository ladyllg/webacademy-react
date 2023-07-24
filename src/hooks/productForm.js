import { useState } from 'react';

const useForm = (callback) => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value)
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (callback) => (event) => {
    event.preventDefault();
    setLoading(true);
    callback();
    setLoading(false);
    console.log(formData)
    alert(`Produto: ${formData.name}, Preço: ${formData.price}`);
  };

  return [formData, handleChange, handleSubmit];
};

export default useForm;


