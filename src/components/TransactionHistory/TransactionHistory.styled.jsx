import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  width: 300px;
  margin: 20px auto;
  font-size: 12px;
  text-align: center;
  box-shadow: 0px 6px 8px 0px #d1c0c0;

  th {
    color: white;
    padding: 5px;
    background-color: rgb(110, 110, 238);
    border-color: white;
  }

  td {
    padding: 5px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
