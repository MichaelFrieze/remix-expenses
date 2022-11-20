import { Link } from '@remix-run/react';

function Logo() {
  return (
    <h1 id="logo">
      <Link prefetch="intent" to="/">
        RemixExpenses
      </Link>
    </h1>
  );
}

export default Logo;
