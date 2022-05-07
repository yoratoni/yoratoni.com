from flask import Flask, render_template, url_for

from core import Loader, Cache


Loader.load_cache(Cache.CorePaths.main_path)

app = Flask(
    __name__,
    template_folder=Cache.CorePaths.directories["pages"],
    static_folder=Cache.CorePaths.directories["static"]
)


@app.route("/")
def index():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)
    