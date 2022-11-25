import { Outlet } from '@remix-run/react';

import MainHeader from '~/components/navigation/MainHeader';
import { getUserFromSession } from '~/data/auth.server';
import marketingStyles from '~/styles/marketing.css';

export default function MarketingLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />;
    </>
  );
}

export function loader({ request }) {
  return getUserFromSession(request);
}

export function links() {
  return [{ rel: 'stylesheet', href: marketingStyles }];
}

export function headers() {
  return {
    'Cache-Control':
      'max-age=10, s-maxage=86400, stale-while-revalidate=604800',
  };
}
