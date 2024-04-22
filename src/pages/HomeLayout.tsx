import { useNavigate, Link, Outlet } from 'react-router-dom';

const HomeLayout = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home/menu2', { state: { message: 'Hello from MyComponent' } });
  };

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/home/menu1/broad/2?isActive=true&name=hello">Menu1</Link>
          </li>
          <li>
            <button onClick={handleClick}>Menu2</button>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default HomeLayout;
