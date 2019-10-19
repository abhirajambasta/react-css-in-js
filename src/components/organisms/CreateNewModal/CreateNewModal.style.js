import { css } from 'styled-components';

export default css`
  padding: 24px;
  text-align: center;

  .modal-title,
  .close {
    display: inline-block;
  }

  .modal-title {
    font-size: 18px;
    color: #2F363F;
    letter-spacing: 0;
    margin-bottom: 16px;
    position: relative;
    left: 20px;
  }

  .radio-button {
    margin-bottom: 32px;
    display: flex;
    overflow: hidden;
    justify-content: center;
  }

  .radio-label {
    &:first-of-type {
      border-radius: 8px 0 0 8px;
    }

    &:last-of-type {
      border-radius: 0 8px 8px 0;
    }
  }

  .form-input {
    margin-bottom: 16px;
    display: block;
  }

  .text-input {
    border-radius: 8px;
    padding: 12px 16px;
    background: #fff;
    border: 1px solid #DDE0E4;
    font-size: 14px;
    min-width: 220px;
  }

  .submit-button {
    margin-top: 8px;
    margin-bottom: 24px;
    background: #4AB7FF;
    border-radius: 8px;
    min-width: 220px;
    padding: 12px;
    text-align: center;
    color: #fff;
    font-size: 14px;
  }

  .close {
    float: right;
  }
`;
