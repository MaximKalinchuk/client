import AuthIco2 from "../img/AuthIco2";
import BackIco from "../img/BackIco";
import NestIco from "../img/NestIco";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();
  console.log(pathname);
  if (pathname === "/auth") {
    return (
      <header>
        <nav class="navbar navbar-expand-lg">
          <Link class="navbar-brand" to="/" style={{ textAlign: "center" }}>
            <div
              style={{
                backgroundColor: "#eeeeee",
                display: "flex",
              }}
            >
              <BackIco />
              Главная
            </div>
          </Link>
        </nav>
      </header>
    );
  }
  return (
    <header>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <Link class="navbar-brand" to="/">
              <NestIco width={"40"} height={"40"} />
            </Link>
            <ul class="navbar-nav" style={{ fontSize: 20, marginLeft: 10 }}>
              <li class="nav-item" style={{ marginLeft: 10 }}>
                <Link
                  class="nav-link  nav-link-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                  aria-current="page"
                  to="/"
                >
                  Главная
                </Link>
              </li>
              <li class="nav-item" style={{ marginLeft: 10 }}>
                <Link class="nav-link " aria-current="page" to="/">
                  Проекты
                </Link>
              </li>
              <li class="nav-item" style={{ marginLeft: 10 }}>
                <Link class="nav-link " aria-current="page" to="/">
                  GitHub
                </Link>
              </li>
              <li class="nav-item"></li>
            </ul>
          </div>
        </div>
        <div
          style={
            {
              // backgroundColor: "#eeeeee",
              // display: "flex",
            }
          }
        >
          <Link class="navbar-brand" to="/auth" style={{ textAlign: "center" }}>
            <AuthIco2 />
            {/* Войти */}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
