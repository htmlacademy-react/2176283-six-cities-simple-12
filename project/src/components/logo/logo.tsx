import { Link } from 'react-router-dom';
import { APIRoute } from '../../const';

function Logo(): JSX.Element {
  return (
    <Link className="header__logo-link" to={APIRoute.Root}>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
    </Link>
  );
}

export default Logo;
