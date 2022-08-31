import { useGlobalContext } from '../context';

import Cocktail from './Cocktail';
import Loading from './Loading';

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <h2 className='section-title'>
        non cocktails matched your search criteria
      </h2>
    );
  }

  return <div>CocktailList</div>;
};

export default CocktailList;
