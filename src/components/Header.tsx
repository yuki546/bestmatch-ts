import { Link } from "react-router-dom";
import Button from "./Button";

type HeaderProps = {
  loggedIn: boolean;
  handleDelete: () => void;
};

const Header = ({ loggedIn, handleDelete }: HeaderProps) => {
  return (
    <header>
      <div>
        Header
        <ul>
          <li>
            <Link to="/">
              <Button text="ホーム" buttonColor="#f82553" />
            </Link>
          </li>
          <li>
            <Link to="/register">
              <Button text="登録" buttonColor="#2190f8" />
            </Link>
          </li>
          <li>
            {loggedIn && (
              <Link to="/search">
                <Button text="検索" buttonColor="#49cc5c" />
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div>
        {loggedIn && (
          <div>
            <div className="pulse"></div>
            <Button
              text="ログアウト"
              buttonColor="#fb6640"
              handler={handleDelete}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
