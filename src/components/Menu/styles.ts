import styled from 'styled-components';

export const Container = styled.div`
  padding: 8px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  img {
    width: 150px;
  }

  div {
    display: flex;
    gap: 15px;
    font-size: 15px;
    font-weight: 600;

    a {
      display: inline-block;
      position: relative;
      text-decoration: none;
      color: black;
    }
  }
`;
