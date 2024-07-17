'use client';

import Link from 'next/link';
import { BiCameraMovie } from 'react-icons/bi';

import style from './style.min.module.css';
import Search from '../Search';
import { Suspense } from 'react';

const NavBar = () => {


  return (
    <nav id={style.navbar}>
      <h2>
        <Link href="/">
          <BiCameraMovie /> Filmes Online
        </Link>
      </h2>
      <Suspense fallback={<div>carregando dados...</div>}>
        <Search />
      </Suspense>
    </nav>
  );
};

export default NavBar;
