import style from './Pagination.module.css';

const Pagination = ({ pokemonsPerPage, totalPokemons, currentPage, setCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPokemons / pokemonsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className={style.ul}>
        {pageNumbers.map(number => (
          <li key={number} className={style.li}>
            <button onClick={() => setCurrentPage(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;