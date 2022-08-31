import { useGlobalContext } from '../context';

import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';

const Home = () => {
  const data = useGlobalContext();
  return (
    <main>
      <SearchForm />
      <CocktailList />
    </main>
  );
};

export default Home;
