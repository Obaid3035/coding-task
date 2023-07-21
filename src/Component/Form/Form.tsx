import React, { useState } from 'react';
import Button from '../Button/Button'
import './Form.css'
import {IData} from "../../App";

export type IFormData = Omit<IData, 'id' | 'total'>

interface IForm {
    onSubmit: (formData: IFormData) => void;
    onCloseModal: () => void;
    initialValues?: IFormData;
    editingData: IFormData | null;
}

const Form: React.FC<IForm> = ({ onSubmit, onCloseModal, editingData }) => {

    const [formData, setFormData] = useState<IFormData>(
        editingData ? {
            name: editingData.name,
            price: editingData.price,
            percentage: editingData.percentage,
        } : {
            name: '',
            price: 0,
            percentage: 0,
        }
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ name: '', price: 0, percentage: 0 });
        onCloseModal()
    };

    return (
        <form onSubmit={handleSubmit} className={'form'}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="percentage">Percentage:</label>
                <input
                    type="number"
                    id="percentage"
                    name="percentage"
                    value={formData.percentage}
                    onChange={handleChange}
                    required
                />
            </div>
            <div style={{
                textAlign: 'center'
            }}>
                <Button style={{
                    maxWidth: '100px',
                }}>Submit</Button>
            </div>
        </form>
    );
};

export default Form;
