import React from "react";
import { PiShoppingCartLight } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { NavLink, useNavigate } from "react-router-dom";
import AvatarDropdown from "./AvatarDropdown";

export const NavbarLinks = [
  { name: "Beranda", link: "/" },
  { name: "Pick & Pack", link: "/CategoryPage" },
  { name: "Tentang Kami", link: "/AboutPage" },
  { name: "Kontak", link: "/#Contact" }, // Link for scroll to Contact section
];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  // Function to handle scroll to Contact section
  const handleScrollToContact = (e) => {
    e.preventDefault(); // Prevent default link behavior
    navigate("/"); // Navigate to the homepage

    // Wait until the page is fully loaded before scrolling
    setTimeout(() => {
      const contactSection = document.getElementById("Contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  // Handle navigation for Beranda to ensure it scrolls to the top
  const handleNavigateToHome = () => {
    navigate("/"); // Navigate to HomePage
    window.scrollTo(0, 0); // Scroll to the top of the page when "Beranda" is clicked
  };

  return (
    <>
      <nav className="bg-white shadow-sm">
        <div className="container flex justify-between items-center py-2">
          {/* Logo Section */}
          <div className="flex items-center py-6">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src="/images/logo1.png" className="h-8" alt="EwhaleLogo" />
            </a>
          </div>

          {/* Menu Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-5">
              {NavbarLinks.map((navItem) => (
                <li key={navItem.name}>
                  {navItem.name === "Kontak" ? (
                    <button
                      onClick={handleScrollToContact}
                      className="inline-block py-1 px-3 font-semibold hover:text-primary"
                    >
                      {navItem.name}
                    </button>
                  ) : navItem.name === "Beranda" ? (
                    <NavLink
                      to={navItem.link}
                      className={({ isActive }) =>
                        `inline-block py-1 px-3 font-semibold ${
                          isActive ? "text-primary" : "hover:text-primary"
                        }`
                      }
                      onClick={handleNavigateToHome}
                    >
                      {navItem.name}
                    </NavLink>
                  ) : (
                    <NavLink
                      to={navItem.link}
                      className={({ isActive }) =>
                        `inline-block py-1 px-3 font-semibold ${
                          isActive ? "text-primary" : "hover:text-primary"
                        }`
                      }
                    >
                      {navItem.name}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Icons Section */}
          <div className="flex items-center gap-9">
            <NavLink to="CartPage">
              <button className="text-3xl hover:text-primary">
                <PiShoppingCartLight />
              </button>
            </NavLink>
            <NavLink to="RegisterPage">
              <button
                type="button"
                className="text-white bg-primary focus:outline-none font-semibold rounded-full text-sm px-5 py-2 text-center md:block"
              >
                Registrasi
              </button>
            </NavLink>
            <div className="flex justify-end p-4">
              <AvatarDropdown />
            </div>
          </div>

          {/* Mobile hamburger menu Section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>
      {/* Mobile Sidebar Section */}
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
