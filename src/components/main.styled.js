import styled from 'styled-components';

export const StyledMain = styled.main`
  width: 90%;
  margin: auto;
  max-width: 900px;

  .title {
    display: flex;
    justify-content: center;
    margin: 4rem 0;
  }

  .container {
    position: relative;
    display: flex;
    .slide {
      /* position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%); */

      display: grid;
      place-items: center;
      .img-container {
        width: 150px;
        height: 150px;
        overflow: hidden;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;
