import { useEffect } from 'react';
import { headerData } from '../data/data';

interface HeaderProps {
  isScrolled: boolean;
}

const { name, role } = headerData;

export const Header = ({ isScrolled }: HeaderProps) => {
  useEffect(() => {
    console.log(isScrolled);
  });

  return (
    <header
      className={`sticky top-0 z-10 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <h1>{name}</h1>
      <h2>{role}</h2>
    </header>
  );
};
