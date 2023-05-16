function HomePage() {
  return (
    <>
      <div className="App ">
        <div
          class="container text-center position-absolute top-50 start-50 translate-middle"
          style={{ width: 800 }}
        >
          <div class="row justify-content-center align-items-center">
            <div class="col">
              <h3 style={{ opacity: "0.8", fontFamily: "monospace" }}>
                Информация о проекте
              </h3>
              <p style={{ opacity: "0.8", fontFamily: "monospace" }}>
                Решил я тут значит сделать клиент для моего бэкенда, чтобы было
                на что посмотреть :)
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
