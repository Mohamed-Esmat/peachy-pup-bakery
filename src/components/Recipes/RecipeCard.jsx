import styles from './Recipes.module.css';

const RecipeCard = ({ img, title }) => {
  return (
    <div className={styles.recipeCard}>
      <img src={img} alt={title} />
      <div className={styles['recipe-caption']}>
        <h3>{title}</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled.
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;
