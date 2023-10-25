import axios from 'axios';

const BASE_URL =
  'https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast';

export const fetchRecipes = async () => {
  try {
    const response = await axios.get(BASE_URL);
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Server Error: Failed to fetch the recipes.');
    }
  } catch (error) {
    //
    if (error.response) {
      throw new Error(
        `Server Error: ${error.response.status} - ${error.response.data.message}`
      );
    } else if (error.request) {
      throw new Error(
        `Network Error: Unable to fetch recipes.Please check your network connection.`
      );
    } else {
      throw new Error(`An error occurred: ${error.message}`);
    }
  }
};

// const contactURL = 'http://upskilling-egypt.com:3000/contact';
// export const customFetch = axios.create({
//   baseURL: contactURL,
// });
