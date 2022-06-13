import React from "react";
import { useState } from "react";
import MockData from "../data/MockData.json"
import TableStyle from "../styles/TableStyle";


function Table() {
    const [data, setData] = useState(MockData)
    const [order, setOrder] = useState("ASC");
    const [inputValue, setInputValue] = useState(data);
    let text = "";

    const sorting = (col) => {
        if (order === "ASC") {
            const sorted = [...data].sort((a, b) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setData(sorted);
            setOrder("DSC");
        }
        if (order === "DSC") {
            const sorted = [...data].sort((a, b) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setData(sorted);
            setOrder("ASC");
        }
    };

    //Buscador por nombre
    // user => user.firstName.toLowerCase() === text.toLowerCase()
    const handelChangeSearch = ((e) => {
        text = e.target.value;
        console.log(text)

        const result = MockData.filter(

            user => {
                const searchUser = Object.values(user);
                const searcValues = searchUser.find((value) => value.toString().toLowerCase().startsWith(text.toLowerCase()));
                return searcValues;
                
            }

        );

        if (result.length>0) {
            setData(result);
        } else {
            setData(MockData)
        }

        console.log(result);
    });

    return (

        <TableStyle>
            <div className="contenedor">
                <h4>Buscador</h4>
                <input onChange={handelChangeSearch} type="text" id="fname" name="fname"></input>
            </div>
            <table>
                <tr>
                    <th onClick={() => sorting("firstName")}>Nombre</th>
                    <th onClick={() => sorting("lastName")}>Apellido</th>
                    <th onClick={() => sorting("phoneNumber")}>Numero</th>
                    <th onClick={() => sorting("emailAddress")}>Email</th>
                </tr>
                {data ? (data.map((user) => {
                    return (<>
                        <tr onClick={() => setInputValue(user)} key={user.userId}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.emailAddress}</td>
                        </tr>
                    </>
                    )
                })) : <></>}

            </table>
            <div>
                <h2>Seleccionado</h2>
                <p>{inputValue?.firstName}</p>
                <p>{inputValue?.lastName}</p>
                <p>{inputValue?.phoneNumber}</p>
                <p>{inputValue?.emailAddress}</p>
            </div>
        </TableStyle>


    );
}

export default Table;
