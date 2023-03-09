import WelcomePage from '../../pages/welcome-page/welcome-page';

type AppWelcomePageProps = {
  offerCount: number;
}

function App({offerCount}: AppWelcomePageProps): JSX.Element {
  return < WelcomePage offerCount = {offerCount}/>;
}

export default App;
