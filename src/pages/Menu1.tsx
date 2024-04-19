import { useParams, useSearchParams } from 'react-router-dom';

const Menu1 = () => {
  const { group, id } = useParams();
  const [searchParams] = useSearchParams();

  const isActiveQuery = searchParams.get('isActive');
  const nameQuery = searchParams.get('name');

  return <>Menu1 {`${group} ${id} ${nameQuery} ${isActiveQuery}`}</>;
};

export default Menu1;
