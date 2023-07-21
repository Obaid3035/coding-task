import React, {useState} from 'react';
import BigNumber from "bignumber.js";
import Modal from "./Component/Modal/Modal";
import Button from "./Component/Button/Button";
import Form, {IFormData} from "./Component/Form/Form";
import Table from "./Component/Table/Table";
import {calculateTotalPrice, getRandomId, mockData, sumOfExpenses} from "./utils/utils";
import './App.css';

export interface IData {
    id: string,
    name: string,
    price: number,
    percentage: number,
    total: BigNumber | number
}

function App() {

    const [data, setData] = useState<IData[]>(mockData);

    const [sum, setSum] = React.useState<string>('');

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const [editingData, setEditingData] = useState<IData | null>(null);

    const [currentPage, setCurrentPage] = useState<number>(1);

    const itemsPerPage = 5;


    React.useEffect(() => {
        if (getCurrentPageData().length === 0) {
            handlePreviousPage();
        }
        setSum(sumOfExpenses(data).toString());
    }, [data]);

    const getCurrentPageData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return data.slice(startIndex, endIndex);
    };


    const onDeleteHandler = (id: string) => {
        const filteredData = data.filter((item) => item.id !== id)
        setData(filteredData)
    }


    const onSubmitHandler = (formInput: IFormData) => {
        const newData = {
            id: getRandomId(),
            ...formInput,
            total: calculateTotalPrice(formInput.price, formInput.percentage),
        };

        if (editingData) {
            const updatedData = data.map((item) => (item.id === editingData.id ? {
                ...newData,
                id: item.id,
            } : item));
            setData(updatedData);
            setEditingData(null);
        } else {
            setData(prevData => [...prevData, newData]);
        }
    }


    const openModal = () => setIsModalOpen(true);

    const openEditModal = (id: string) => {
        setIsModalOpen(true);
        const foundItem: IData | undefined = data.find(item => item.id === id);
        const found: IData | null = foundItem ? foundItem : null;
        setEditingData(found);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingData(null);
    }


    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const handleNextPage = () => {
        const totalPages = Math.ceil(data.length / itemsPerPage);
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };


    let table = (
        <React.Fragment>
            <Table data={getCurrentPageData()} onDelete={onDeleteHandler} onEdit={openEditModal}/>;
        </React.Fragment>
    )


    if (data.length <= 0) {
        table = <p>No Entry Available</p>
    }


    return (
        <div className="App">
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <Form onCloseModal={closeModal} onSubmit={onSubmitHandler} editingData={editingData}/>
            </Modal>

            <div className={'btn-container'}>
                <Button onClick={openModal}>Create</Button>
            </div>

            <div className="table-container">
                {table}
            </div>

            {
                data.length > 0 && <div className={'total-sum'}>
					<p>Sum of Prices: {sum.toString()}</p>
				</div>
            }

            <div className="pagination">
                <Button
                    style={{
                    maxWidth: '100px'
                }}
                    onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Previous
                </Button>
                <Button
                    style={{
                    maxWidth: '100px'
                }}
                    onClick={handleNextPage} disabled={data.length <= itemsPerPage * currentPage}>
                    Next
                </Button>

                <span>{currentPage}</span>
            </div>

        </div>
    );
}

export default App;
