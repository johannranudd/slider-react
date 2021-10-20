import styled from 'styled-components';

export const StyledMain = styled.main`
  width: 95%;
  margin: auto;
  max-width: 1200px;
  /* title */
  .title {
    display: flex;
    justify-content: center;
    padding: 3rem;
    h1 {
      color: var(--clr-3);
      margin-right: 1rem;
      span {
        margin-right: 1rem;
        color: var(--clr-5);
      }
    }
  }
  /* slider container */
  .container {
    position: relative;
    max-width: 800px;
    height: 450px;
    margin: auto;
    display: flex;
    overflow: hidden;
    .slide {
      position: absolute;
      display: grid;
      place-items: center;
      padding: 2rem;
      transition: 0.3s linear;
      img {
        width: 150px;
        height: 150px;
        object-fit: cover;
        border-radius: 50%;
        border: 4px solid var(--clr-4);
        box-shadow: 0 5px 15px rgb(0 0 0 / 20%);
        margin-bottom: 1.3rem;
      }
      h3 {
        color: var(--clr-5);
        text-transform: uppercase;
      }
      h4 {
        margin-bottom: 1.5rem;
        font-weight: 400;
        color: var(--clr-1);
      }
      p {
        text-align: center;
        color: var(--clr-3);
        margin-bottom: 2rem;
        line-height: 1.8rem;
      }
      .quote-icon {
        color: var(--clr-5);
        font-size: 4rem;
      }
    }
    .activeSlide {
      opacity: 1;
      transform: translate(0%, 0%);
    }
    .nextSlide {
      opacity: 0;
      transform: translate(100%, -25%);
    }
    .lastSlide {
      opacity: 0;
      transform: translate(-100%, -25%);
    }
  }
  .btn-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    z-index: 99;
    .btn {
      padding: 0.1rem;
      background: var(--clr-6);
      border-radius: 3px;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      transition: 0.3s;
      * {
        color: var(--clr-white);
        font-size: 1.5rem;
      }
      &:hover {
        background: var(--clr-5);
      }
    }
  }
`;
