import Link from "next/link";

import cn from "classnames";

const Header = () => {
  const listItemClassName = cn(
    "mx-2 font-medium tracking-widest uppercase sm:mx-4"
  );

  const anchorClassName = cn(
    "px-4 py-2 text-gray-500 transition-all border border-[#CCCCCC] rounded-full hover:text-cyan-600 hover:border-cyan-600"
  );

  return (
    <header className="flex justify-center pt-12 pb-6 text-xs">
      <ul className="flex justify-center custom-container">
        <li className={listItemClassName}>
          <Link href="/#home">
            <a className={anchorClassName}>Home</a>
          </Link>
        </li>

        <li className={listItemClassName}>
          <Link href="/#about">
            <a className={anchorClassName}>About</a>
          </Link>
        </li>

        <li className={listItemClassName}>
          <Link href="/#contact">
            <a className={anchorClassName}>Contact</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
