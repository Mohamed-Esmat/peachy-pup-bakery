import { useQuery } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import { fetchRecipes } from '../../util/api';
import { showErrorToast } from '../../util/toastUtils';
import { useState } from 'react';
import RecipeCard from './RecipeCard';
import Loading from '../UI/Loading/Loading';
import Button from '../UI/Button/Button';

import recipe1 from '../../assets/bread-omlat.jpg';
import recipe2 from '../../assets/Home-made-Mandazi.jpg';
import recipe3 from '../../assets/Breakfast-Potatoes.jpg';

import styles from './Recipes.module.css';

const Recipes = () => {
  const initialRecipeCount = 3;
  const [visibleRecipes, setVisibleRecipes] = useState(initialRecipeCount);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['recipes'],
    queryFn: fetchRecipes,
  });

  // if (isLoading) {
  //   //Will Replace it with a nice loading spinner
  //   return <div>Loading...</div>;
  // }

  if (isError) {
    showErrorToast('Error loading recipes: ' + error.message);
  }

  console.log(data);

  const loadMoreRecipes = () => {
    setVisibleRecipes((prevCount) => prevCount + 3);
  };

  const recipes = data?.meals;

  return (
    <section className={styles.recipesSection}>
      <div className={`${styles.recipeFlex} container`}>
        <h2 className={styles.sectionTitle}>RECIPES</h2>
        {isLoading && <Loading />}
        <div className={styles.recipeCards}>
          {recipes &&
            recipes.slice(0, visibleRecipes).map((recipe) => {
              return (
                <RecipeCard
                  key={recipe.idMeal}
                  img={recipe.strMealThumb}
                  title={recipe.strMeal}
                />
              );
            })}
          {!recipes && !isLoading && (
            <>
              <RecipeCard img={recipe1} title="Bread omelette" />
              <RecipeCard img={recipe2} title="Breakfast Potatoes" />
              <RecipeCard img={recipe3} title="Home-made Mandazi" />
            </>
          )}

          {/* Add more recipe cards */}
        </div>
        {recipes && visibleRecipes < recipes?.length && (
          <button className={styles.loadMoreBtn} onClick={loadMoreRecipes}>
            Load More
          </button>
        )}
        <Button text="Contact Us" position="center" />
      </div>
      <ToastContainer />
    </section>
  );
};

export default Recipes;
