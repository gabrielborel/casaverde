import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 3rem;

  > div {
    text-align: center;
    margin-top: 3rem;

    p {
      font-size: 22px;
      opacity: 0.6;
    }

    > strong {
      font-family: 'Elsie Swash Caps', cursive;
      font-size: 80px;
    }
  }

  .card-list {
    margin-top: 0;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);

    .card {
      width: 100%;
      height: 150px;
      display: flex;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      border-radius: 5px;

      > img {
        width: 60%;
        height: 100%;
      }

      div {
        text-align: start;
        padding-top: 1rem;

        strong {
          font-family: 'Elsie Swash Caps', cursive;
          display: block;
          font-size: 26px;
          margin-bottom: 0.3rem;
        }

        p {
          font-size: 15px;
        }

        button {
          color: #ffcb47;
          margin-top: 0.7rem;
          display: flex;
          gap: 0.7rem;
          align-items: center;
          border: none;
          background-color: transparent;
          cursor: pointer;
          font-size: 16px;
        }
      }
    }
  }
`;
