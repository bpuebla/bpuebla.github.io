const Navbar = () => (
  <nav className="bg-[#402F25] p-2">
    <ul className="flex justify-center list-none m-0 p-0">
      {[
        { name: "home", link: "home.html" },
        { name: "about", link: "about.html" },
        { name: "services", link: "services.html" },
        { name: "contact", link: "contact.html" },
      ].map((item) => (
        <li key={item.name} className="mx-4">
          <a
            href={item.link}
            className="text-white text-base no-underline transition-colors duration-300 hover:text-blue-500"
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;