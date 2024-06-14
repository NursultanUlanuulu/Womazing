import React, { useEffect } from "react";
import style from "./Header.module.css";
import { Link } from "react-router-dom";
import img from "../../../assets/img.png";
import img2 from "../../../assets/img2.png";
import LOGO from "../../../assets/LOGO.png";
import { useDispatch, useSelector } from "react-redux";
import { getFromLS } from "../../../store/slices/userSlice";
const Header = ({ changeVithible }) => {
  const { backetData } = useSelector((state) => state.backet);
  const { favoriteData } = useSelector((state) => state.favoirte);
  const { userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFromLS());
  }, []);
  return (
    <div>
      <header>
        <nav>
          <div className="header-logo">
            <Link to="/">
              <img src={LOGO} alt="" />
            </Link>
          </div>
          <div>
            <ul className={style.list}>
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/shop">Магазин</Link>
              </li>
              <li>
                <Link to="/about">О бренде</Link>
              </li>
              <li>
                <Link to="/contacts">Контакты</Link>
              </li>
            </ul>
          </div>
          <div className={style.icon}>
            {Object.keys(userData)?.length > 0 ? (
              <div>
                <img src={userData.avatar} width={50} />
                <h5>{userData.name}</h5>

                <button onClick={() => {}}>sign out</button>
              </div>
            ) : (
              <button onClick={changeVithible}>sign in</button>
            )}

            <span>{favoriteData.length}</span>
            <Link to="/favorite">
              {" "}
              <img src={img} />
            </Link>
            <span>{backetData.length}</span>
            <Link to="/backet">
              <img src={img2} alt="" />
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
