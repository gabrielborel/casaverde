import styled from 'styled-components';

export const Container = styled.div`
  padding: 8px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  img {
    width: 100px;
  }

  div {
    display: flex;
    gap: 25px;
    font-size: 12px;

    a {
      display: inline-block;
      position: relative;
      text-decoration: none;
      color: black;
      font-weight: 600;
      transition: color 0.2s ease;

      &:hover {
        color: #ffcb47;
      }

      &::after {
        color: black;
      }
    }

    a:not(:last-child)::after {
      position: absolute;
      content: '/';
      right: -15px;
    }
  }
`;
