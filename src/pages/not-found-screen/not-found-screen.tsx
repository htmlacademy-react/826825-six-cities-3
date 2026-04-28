import {Link} from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <main className="page__main">
        <h1>404. Page not found</h1>

        <p>К сожалению такой страницы не существует.</p>
        <p>Возможно вы что-то попытались найти на этой странице,<br/> и ждали ее загрузки, и уже трепеталась надежда....</p>
        <p>Но нет такой страницы</p>

        <Link to="/">Вернуться на главную</Link>

      </main>
    </div>
  );
}

export default NotFoundScreen;
