import React from 'react';
import './Table.css'
import {IData} from "../../App";

interface ITable {
    data: IData[],
    onDelete: (id: string) => void;
    onEdit: (id: string) => void;
}

const Table: React.FC<ITable> = ({data, onDelete, onEdit}) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Mark Up</th>
                <th>Total Price</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {data.map((el) => (
                <tr key={el.id}>
                    <td>{el.name}</td>
                    <td>{el.price}</td>
                    <td>{el.percentage}%</td>
                    <td>{el.total.toString()}</td>
                    <td>
                        <img
                            onClick={() => onEdit(el.id)}
                            alt={'edit-icon'}
                            src={'./edit.png'}
                            width={20}
                            height={20}
                        />
                    </td>
                    <td>
                        <img
                            onClick={() => onDelete(el.id)}
                            alt={'delete-icon'}
                            src={'./bin.png'}
                            width={20}
                            height={20}
                        />
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default Table;
