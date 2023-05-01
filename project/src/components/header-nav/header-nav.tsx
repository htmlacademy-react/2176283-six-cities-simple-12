import { AppRoute, AuthorizationStatus } from '../../const';
import { logoutAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';
import { Link } from 'react-router-dom';
import { UserData } from '../../types/user-data';

type HeaderNavProps = {
  authorizationStatus: AuthorizationStatus;
  currentUser: UserData | null;


}

function HeaderNav({authorizationStatus, currentUser}: HeaderNavProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <div className="header__nav-profile">
            <div className="header__avatar-wrapper user__avatar-wrapper">{(authorizationStatus === AuthorizationStatus.Auth) ? <img src={currentUser?.avatarUrl} alt={''}/> : ''}</div>
            <span className="header__user-name user__name">{(authorizationStatus === AuthorizationStatus.Auth) ? currentUser?.email : ''}</span>
          </div>
        </li>
        <li className="header__nav-item" >
          <Link className="header__nav-link"
            onClick={() => {
              dispatch(logoutAction());
            }}
            to={AppRoute.Login}
          >
            <span className="header__signout">{(authorizationStatus === AuthorizationStatus.Auth) ? 'Sign out' : 'Sign in'}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
