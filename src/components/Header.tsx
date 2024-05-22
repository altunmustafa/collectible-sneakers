import NavBar from "./NavBar";

const Header: React.FC = () => {

  return (
    <header className="flex items-center justify-between px-4 py-4 md:px-20 md:py-6 max-w-full w-full text-amber-900">
      <h1 className="text-3xl font-bold h-min">Collers</h1>
      <NavBar />
    </header>
  )
}

export default Header;