import styled from "styled-components";

const TableStyle = styled.table`
  
  font-family: Helvetica, Sans-Serif;
  table,tr,td{
    border-spacing:0;
    border-collapse: collapse;
  }

  th {
    padding:15px;
    background:#01987A;
    color:white;
  } 

  th:hover {
    cursor: pointer
  }

  tr {
    padding:15px;
    background-color:#F3F3F3;
  }

  tr:hover {
    background-color: #a19f99;
    color:#01987A;
  }
`;

export default TableStyle;
