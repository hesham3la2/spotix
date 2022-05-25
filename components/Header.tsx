import React from 'react';
import {
  SearchIcon,
  HeartIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';

type Props = {
  isEng: boolean;
  lang: any;
};

const Header = ({ isEng, lang }: Props) => {
  return (
    <header
      className={`flex items-center justify-between py-3 lg:px-9 ${
        !isEng && 'flex-row-reverse'
      }`}
    >
      <div className="mr-[6px]">
        <h1 className="text-[2.4rem] font-bold font-serif text-[#FDF59E] bg-[#DB3232] shadow-sm shadow-[#DB3232] rounded-full px-2">
          Spotix
        </h1>
      </div>
      <div
        className={`flex items-center bg-[#F4F4F4] px-[18px] py-2 w-full mx-3 border-solid border-2 border-black rounded-full ${
          !isEng && 'flex-row-reverse'
        }`}
      >
        <input
          className="appearance-none bg-transparent outline-none w-full h-6 pr-5 "
          type="text"
          dir={!isEng ? 'rtl' : 'ltr'}
          placeholder={lang.search}
        />
        <span className="w-6 h-6">
          <SearchIcon />
        </span>
      </div>
      <nav>
        <ul
          className={`flex justify-between gap-2 ml-6 items-center list-none ${
            !isEng && 'flex-row-reverse'
          }`}
        >
          <li className="transition-all duration-500 ease hover:bg-[#F4F4F4] hover:rounded-full p-3">
            <p className="cursor-pointer text-[#222222] font-bold whitespace-nowrap">
              {lang.sign_in}
            </p>
          </li>
          <li className="hover:bg-[#F4F4F4] hover:rounded-full p-3">
            <span className="cursor-pointer w-6 h-6 inline-block align-middle">
              <HeartIcon />
            </span>
          </li>
          <li className="hover:bg-[#F4F4F4] hover:rounded-full p-3">
            <span className="cursor-pointer w-6 h-6 inline-block align-middle">
              <ShoppingCartIcon />
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
