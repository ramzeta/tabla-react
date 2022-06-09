import React from "react";
import { useState } from "react";
import MockData from "../data/MockData.json";
import TableStyle from "../styles/TableStyle";


function Table(MockData) {
    const [data, setdata] = useState(MockData)
    const [order, setorder] = useState("ASC");

    const sorting = (col) => {
        if (order === "ASC") {
            const sorted = [...data].sort((a, b) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setdata(sorted);
            setorder("DSC");
        }
        if (order === "DSC") {
            const sorted = [...data].sort((a, b) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            );
            setdata(sorted);
            setorder("ASC");
        }
    };
    return (

        <TableStyle>
            <table>
                <tr>
                    <th onClick={() => sorting("firstName")}>Nombre</th>
                    <th onClick={() => sorting("lastName")}>Apellido</th>
                    <th onClick={() => sorting("phoneNumber")}>Numero</th>
                    <th onClick={() => sorting("emailAddress")}>Email</th>
                </tr>
                {data.map((user, index) => {
                    return (<>
                        <tr key={user.userId}>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.emailAddress}</td>
                        </tr>
                    </>
                    )
                })}
            </table>
        </TableStyle>


    );
}

export default Table;
