'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

import style from './style.min.module.css';

const Search = () => {
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

    setSearch('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
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
  );
};

export default Search;
