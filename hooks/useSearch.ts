import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Product } from '@/types/Product';


import ProductService from '@/services/ProductService';

interface Params {
  category?: string;
  sort?: string;
  keyword?: string;
}
type FetcherFunction = (
  url: string,
  params: string
) => Promise<Product[] | undefined>;

const useSearch = ({ category, sort, keyword }: Params) => {
  const { isReady } = useRouter();
  let params: Params = {};

  if (category) {
    params = { ...params, category };
  }
  if (sort) {
    params = { ...params, sort };
  }
  if (keyword) {
    params = { ...params, keyword };
  }

  const value = isReady ? ['/api/search', JSON.stringify(params)] : null;
  const fetcher:FetcherFunction = async (_url: string, params: string): Promise<Product[]> => {
    const parsedParams = JSON.parse(params);
    try {
      const products = await ProductService.getProducts({ ...parsedParams, limit: 12 });
      return products;
    } catch (error) {
      throw new Error('Failed to fetch data');
    }
  };

  const { data, error } = useSWR(value, fetcher);
  
  const isLoading = !data && !error;

  return {
    data,
    error,
    isLoading,
  };
};

export default useSearch;
