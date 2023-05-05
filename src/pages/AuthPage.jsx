import AuthIco from "../img/AuthIco";
import NestIco from "../img/NestIco";

function AuthPage() {
  const fromStyle = {
    border: "solid rgb(139, 139, 139)",
    borderWidth: "2px",
    borderRadius: "12px",
    width: "300px",
    height: "350px",
    backgroundColor: "rgb(255, 255, 255)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  };
  return (
    <>
      <div className="App ">
        <div class="container text-center position-absolute top-50 start-50 translate-middle">
          <div class="row justify-content-center align-items-center">
            <div class="col">
              <NestIco width={"230"} height={"230"} />
              <h3 style={{ opacity: "0.8", fontFamily: "monospace" }}>
                Client for NestJS server
              </h3>
            </div>
            <div class="col" style={{ textAlign: "-webkit-center" }}>
              <form style={fromStyle}>
                <div>
                  <AuthIco />
                  <h5>Авторизируйтесь</h5>
                </div>
                <div class="mb-1">
                  <label for="exampleInputEmail1" class="form-label">
                    Введите почту
                  </label>

                  <input
                    style={{ width: 270, textAlign: "center" }}
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    placeholder=""
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-4" s>
                  <label for="exampleInputPassword1" class="form-label">
                    Введите пароль
                  </label>
                  <input
                    placeholder=""
                    style={{ width: 270, textAlign: "center" }}
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>

                <button
                  type="submit"
                  class="btn btn-danger"
                  style={{
                    backgroundColor: "#e0234e",
                    width: "260px",
                    justifyContent: "space-between",
                    marginBottom: "0.25rem",
                  }}
                >
                  Войти
                </button>
                <a
                  href=""
                  class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                  style={{
                    marginBottom: "0.5rem",
                    textDecoration: "none",
                  }}
                >
                  Зарегистрироваться
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthPage;
