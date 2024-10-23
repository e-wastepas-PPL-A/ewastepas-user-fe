import React from "react";
// import { navItem } from "react-router-dom";
import { PiShoppingCartLight } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-router-dom";

export const NavbarLinks = [
  {
    name: "Beranda",
    link: "/",
  },
  {
    name: "Tentang Kami",
    link: "/tentangkami",
  },
  {
    name: "Kategori",
    link: "/CategoryPage",
  },
  {
    name: "Artikel",
    link: "/artikel",
  },
  {
    name: "Kontak",
    link: "/kontak",
  },
];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-2">
          {/* Logo Section */}
          <div className="flex items-center py-6 ">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="/public/images/logo.png"
                className="h-8"
                alt="EwhaleLogo"
              />
            </a>
          </div>
          {/* Menu Section */}
          <div className="hidden md:block ">
            <ul className="flex items-center gap-5 ">
              {NavbarLinks.map((navItem) => {
                return (
                  <li key={navItem.name}>
                    <a
                      href={navItem.link}
                      className="inline-block py-1 px-3 hover:text-primary font-semibold"
                    >
                      {navItem.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Icons Section */}
          <div className="flex items-center gap-3 ">
            <button className="text-3xl hover:text-primary ">
              <PiShoppingCartLight />
            </button>
            <Link to="RegistrasiPage">
              <button
                type="button"
                className="text-white bg-primary focus:outline-none  font-semibold rounded-full text-sm px-5 py-2 text-center  md:block"
              >
                Registrasi
              </button>
            </Link>
          </div>
          {/* Mobile hamburger menu Section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>
      {/* Mobile Sidebar Section */}
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Navbar;
