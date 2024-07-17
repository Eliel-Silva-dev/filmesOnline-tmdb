'use client';

import { useState } from 'react';
import Link from 'next/link';
//import { useRouter, useParams, usePathname } from 'next/navigation';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';

import style from './style.min.module.css';

const NavBar = () => {
  const [search, setSearch] = useState('');
  //const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!search) return;

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
