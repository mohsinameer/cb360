'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import SortProducts, { SortOptions } from './SortProducts';

type RefinementListProps = {
  sortBy: SortOptions;
  search?: boolean;
};

const RefinementList = ({ sortBy }: RefinementListProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const setQueryParams = (name: string, value: string) => {
    const query = createQueryString(name, value);
    router.push(`${pathname}?${query}`);
  };

  return (
    <>
      <SortProducts sortBy={sortBy} setQueryParams={setQueryParams} />
    </>
  );
};

export default RefinementList;
