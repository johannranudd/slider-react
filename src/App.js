import data from './components/data';
import { StyledMain } from './components/main.styled';
import { ImQuotesRight } from 'react-icons/im';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';

function App() {
  const [people, setPeople] = useState(data);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const maxLength = people.length - 1;
    if (value > maxLength) {
      setValue(0);
    }
    if (value < 0) {
      setValue(maxLength);
    }
  }, [value, people]);

  useEffect(() => {
    const time = setInterval(() => {
      setValue((prevValue) => {
        return prevValue + 1;
      });
    }, 5000);
    return () => {
      clearInterval(time);
    };
  }, [value]);
  return (
    <StyledMain>
      <header className='title'>
        <span>/</span>
        <h1>Reviews</h1>
      </header>
      <section className='container'>
        <Slider people={people} value={value} setValue={setValue} />
      </section>
    </StyledMain>
  );
}

const Slider = ({ people, value, setValue }) => {
  // console.log(people);

  return (
    <>
      {people.map((item, personIndex) => {
        const { id, image, name, quote, title } = item;
        let slideClass = 'nextSlide';
        if (personIndex === value) {
          slideClass = 'activeSlide';
        }
        if (
          personIndex === value - 1 ||
          (value === 0 && personIndex === people.length - 1)
        ) {
          slideClass = 'lastSlide';
        }
        return (
          <article key={id} className={`slide ${slideClass}`}>
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
        <button className='prev-btn' onClick={() => setValue(value - 1)}>
          <FaAngleLeft />
        </button>
        <button className='next-btn' onClick={() => setValue(value + 1)}>
          <FaAngleRight />
        </button>
      </div>
    </>
  );
};

export default App;
