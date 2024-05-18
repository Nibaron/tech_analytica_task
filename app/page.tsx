import { PAGE_ROUTES } from '@/utils/constants/common-constants';
import { redirect } from 'next/navigation';

export default function Home() {
  return (
    redirect(PAGE_ROUTES.Products)
  );
};


