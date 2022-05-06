from pathlib import Path

from core import Loader, Cache


app_path = Path.joinpath(Path(__file__).parent, "app")

Loader.load(app_path)
