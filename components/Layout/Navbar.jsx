import React from 'react';
import Link from 'next/link';
import style from '../../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link
            href={{
              pathname: '/product',
              query: '/product',
            }}
          >
            Product
          </Link>
        </li>
        <li>
          <Link href="/client">Client</Link>
        </li>
        <li>
          <Link href="#">Contact us</Link>
        </li>
        <div className={style.search}>
          <input
            type="text"
            name="search"
            placeholder="Search"
            className={`${style.input_borderFix} ${style.input_style}`}
          />
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
