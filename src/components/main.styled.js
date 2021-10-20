import styled from 'styled-components';

export const StyledMain = styled.main`
  width: 90%;
  margin: auto;
  max-width: 1200px;

  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;

  .title {
    display: flex;
    justify-content: center;
    margin: 4rem 0;
  }

  .container {
    display: flex;
    /* justify-content: space-between; */
    width: 800px;
    height: 400px;
    position: relative;
    overflow: hidden;
    .slide {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      display: grid;
      place-items: center;
      padding: 0 3rem;
      transition: 0.4s;
      opacity: 0;
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
      p {
        text-align: center;
      }
    }

    /* react */
    .nextSlide {
      transform: translateX(100%);
    }
    .activeSlide {
      opacity: 1;
      transform: translateX(0%);
    }
    .lastSlide {
      transform: translateX(-100%);
    }

    .button-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 99;
      .prev-btn,
      .next-btn {
        cursor: pointer;
      }
    }
  }
`;
