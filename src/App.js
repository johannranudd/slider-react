import data from './components/data';
import { StyledMain } from './components/main.styled';
import { ImQuotesRight } from 'react-icons/im';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useState } from 'react';

function App() {
  const [people, setPeople] = useState(data);
  const [value, setValue] = useState(0);
  return (
    <StyledMain>
      <header className='title'>
        <span>/</span>
        <h1>Reviews</h1>
      </header>
      <section className='container'>
        <Slider people={people} value={value} />
      </section>
    </StyledMain>
  );
}

const Slider = ({ people }) => {
  // console.log(people);

  return (
    <>
      {people.map((item, index) => {
        const { id, image, name, quote, title } = item;
        return (
          <article key={id} className='slide'>
            <div className='img-container'>
              <img src={image} alt='' />
            </div>
            <h3>{name}</h3>
            <h4>{title}</h4>
            <p>{quote}</p>
            <ImQuotesRight />
          </article>
        );
      })}
      <div className='button-container'>
        <button className='btn'>
          <FaAngleLeft />
        </button>
        <button className='btn'>
          <FaAngleRight />
        </button>
      </div>
    </>
  );
};

export default App;
