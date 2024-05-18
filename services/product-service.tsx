import axios from 'axios';

const baseUrl = 'https://fakestoreapi.com/products';

const ProductsService = {
  async getProducts() {
    try {
      const response = await axios.get(baseUrl);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error; // Re-throw the error for handling in ProductsPage
    }
  },
};

export default ProductsService;