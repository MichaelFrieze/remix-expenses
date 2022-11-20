import { Form, Link, NavLink, useLoaderData } from '@remix-run/react';

import Logo from '../util/Logo';

function MainHeader() {
  const userId = useLoaderData();

  return (
    <header id="main-header">
      <Logo />
      <nav id="main-nav">
        <ul>
          <li>
            <NavLink prefetch="intent" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink prefetch="intent" to="/pricing">
              Pricing
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav id="cta-nav">
        <ul>
          <li>
            {userId && (
              <Form method="post" action="/logout" id="logout-form">
                <button className="cta-alt">Logout</button>
              </Form>
            )}
            {!userId && (
              <Link prefetch="intent" to="/auth" className="cta">
                Login
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
