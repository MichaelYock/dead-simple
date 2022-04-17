import React, {FC} from "react";
import {Link} from "gatsby"

const Navbar: FC = () => {
  const [navbarOpen, setNavbarOpen] = React.useState<boolean>(false);
  return (
    <header>
      <div className="relative flex flex-wrap items-center justify-between py-3">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-teal-500"
              to="/"
            >
              <h1>DEAD SIMPLE</h1>
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {/* <i className="fas fa-bars"></i> */}
              <p className="text-teal-500">MENU</p>
            </button>
          </div>
          <nav
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="navbar-menu"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-teal-500 hover:opacity-75"
                  to="#features"
                >
                  <span className="">Features</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-teal-500 hover:opacity-75"
                  to="#pricing"
                >
                  <span className="">Pricing</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-teal-500 hover:opacity-75"
                  to="#faq"
                >
                  <span className="">FAQ</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white bg-teal-500 hover:opacity-75 rounded-xl rounded-br-none"
                  to="#contact"
                >
                  <span className="">Contact</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar