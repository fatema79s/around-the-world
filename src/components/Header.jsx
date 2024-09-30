import Logo from "./Logo";
import ThemeSwetcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="shadw mb-6 bg-white dark:bg-gray-800 md:mb-12">
      <div className="container mx-auto px-5 md:px-0">
        <div className="flex h-20 items-center justify-between">
          <Logo />
          <ThemeSwetcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
