import { AuthorizationStatus } from '../../const';
import { APIRoute } from '../../const';
import { logoutAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';

type HeaderNavProps = {
  authorizationStatus: AuthorizationStatus;
  currentEmail: string | null;


}

function HeaderNav({authorizationStatus, currentEmail}: HeaderNavProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <div className="header__nav-profile">
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__user-name user__name">{(authorizationStatus === AuthorizationStatus.Auth) ? currentEmail : ''}</span>
          </div>
        </li>
        <li className="header__nav-item" >
          <a className="header__nav-link"
            onClick={() => {
              dispatch(logoutAction());
            }}
            href={APIRoute.Login}
          >
            <span className="header__signout">{(authorizationStatus === AuthorizationStatus.Auth) ? 'Sign out' : 'Sign in'}
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
