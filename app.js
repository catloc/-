// ...импорты и настройки

const server = http.createServer((req, res) => {
    const url = req.url;
    switch (url) {
        case "/":
            mainRouteController(res, "/index.html", ".html");
        break;
        case "/game":
            gameRouteController(res);
        break;
        case "/vote":
            voteRouteController(req, res);
        break;
          // ...другие маршруты
        default:
            defaultRouteController(res, url);
    }
  });

  module.exports = gameRouteController;