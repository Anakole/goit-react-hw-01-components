import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  background-color: white;
  border-collapse: collapse;
  text-align: center;
  width: 800px;
  color: rgb(133, 133, 133);

  td,
  th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  tr:nth-of-type(2n) {
    background-color: #f3f6f9;
  }

  tr:hover {
    background-color: #dce3e8;
  }

  th {
    text-transform: uppercase;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #0497aa;
    color: white;
  }
`;
