import { Link, Outlet } from 'react-router-dom';

const ReportLayout = () => {
  return (
    <>
      <nav>
        <ul className='horizontal-menu'>
          <li>
            <Link to='/report'>ข้อมูลบัญชี</Link>
          </li>
          <li>
            <Link to='/report/insert'>บันทึกข้อมูล</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default ReportLayout;
