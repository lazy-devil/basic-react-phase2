import { useLocation } from 'react-router-dom';

const Menu2 = () => {
  const location = useLocation();
  const message = location.state ? location.state.message : '';

  return <>Menu2 {`${message}`}</>;
};

export default Menu2;
