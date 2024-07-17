'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';

import style from './style.min.module.css';

const NavBar = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!search) return;

    const sp = new URLSearchParams(searchParams);
    sp.set('q', search);

    router.push(`/search?${sp.toString()}`);

    //navigate(`/search?q=${search}`, { replace: true });
    setSearch('');
  };

  return (
    <nav id={style.navbar}>
      <h2>
        <Link href="/">
          <BiCameraMovie /> Filmes Online
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />

        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default NavBar;
