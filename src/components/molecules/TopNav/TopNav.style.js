import { css } from 'styled-components';

export default css`
  ul {
    margin: 0;
    padding: 14px 0;
    overflow: hidden;
    background-color: #293462;
  }

  li {
    float: left;
  }

  li a,
  li button {
    display: block;
    color: white;
    text-align: center;
    text-decoration: none;
  }

  li a:hover:not(.active) {
    background-color: #111;
  }

  .sidebar-class {
    vertical-align: middle;
    margin-left: 8px;
  }
`;
