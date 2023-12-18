import useSWRInfinite from 'swr/infinite';

import ProductService from '@/services/ProductService';
import { Product } from '@/types';

const PAGE_SIZE = 12;

const useProducts = (initialData: Product[]) => {
  const { data, error, size, setSize, isValidating } = useSWRInfinite(
    (index:number) => `/api/products?page=${index + 1}`,
    (url: string) => {
      const currentPage = url.split('page=')[1];
      return ProductService.getProducts({ page: currentPage, limit: PAGE_SIZE });
    },
    {
      initialSize: 1, // Initial size of the data array
      revalidateAll: false, // You can customize this option based on your needs
    }
  );

  const initialProducts: Product[] = [];

  const products = data ? initialProducts.concat(...data) : [];

  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);
  const isRefreshing = isValidating && data && data.length === size;

  const loadMore = () => {
    setSize(size + 1);
  };

  return {
    products,
    isLoadingMore,
    isReachingEnd,
    isRefreshing,
    loadMore,
  };
};

export default useProducts;
