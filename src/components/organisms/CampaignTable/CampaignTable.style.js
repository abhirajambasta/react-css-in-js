import { css } from 'styled-components';

export default css`
  overflow-x:auto;

  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
  }

  th, td {
    text-align: center;
    padding: 8px;
    border: 1px solid #000;
  }

  .modal {
    display: flex;
    justify-content: center;
  }

  table ~ .popup-overlay .modal-container-content {
    width: auto !important;
  }
`;
