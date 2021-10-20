import data from './components/data';
import { StyledMain } from './components/main.styled';
import { ImQuotesRight } from 'react-icons/im';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useEffect, useState } from 'react';

function App() {
  const [people, setPeople] = useState(data);
  const [value, setValue] = useState(0);
  // console.log(people);

  useEffect(() => {
    const maxPeoplelength = people.length - 1;
    if (value > maxPeoplelength) {
      setValue(0);
    }
    if (value < 0) {
      setValue(maxPeoplelength);
    }
  }, [value, people]);

  useEffect(() => {
    const valueInterval = setInterval(() => {
      setValue(value + 1);
    }, 5000);
    return () => {
      clearInterval(valueInterval);
    };
  }, [value]);

  return (
    <StyledMain>
      <header className='title'>
        <h1>
          <span>/</span>Review
        </h1>
      </header>
      {/* slider */}
      <section className='container'>
        {people.map((person, personIndex) => {
          let slidePosition = 'nextSlide';
          if (personIndex === value) {
            slidePosition = 'activeSlide';
          }
          if (
            personIndex === value - 1 ||
            (value === 0 && personIndex === people.length - 1)
          ) {
            slidePosition = 'lastSlide';
          }

          const { id, image, name, quote, title } = person;
          return (
            <article key={id} className={`slide ${slidePosition}`}>
              <img src={image} alt='' />
              <h3>{name}</h3>
              <h4>{title}</h4>
              <p>{quote}</p>
              <ImQuotesRight className='quote-icon' />
            </article>
          );
        })}
        <div className='btn-section'>
          <button className='btn' onClick={() => setValue(value - 1)}>
            <FiChevronLeft />
          </button>
          <button className='btn' onClick={() => setValue(value + 1)}>
            <FiChevronRight />
          </button>
        </div>
      </section>
    </StyledMain>
  );
}

export default App;
