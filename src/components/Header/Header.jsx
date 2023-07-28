import { Link } from 'react-router-dom';
import './index.scss';

const Header = () => {

  return (
    <div className='header'>
      <p className='p1'>
        <Link className='link' to={`/organization`}>Organização</Link>
      </p>
      <p className='p2'>Tarefas</p>
    </div>
  );
}

export default Header;
