def create_app(config_object='src.config.config_for_env'):
    from flask import Flask
    flask_app = Flask(__name__)
    flask_app.config.from_object(config_object)

    from src.views.savvy import savvy

    flask_app.register_blueprint(savvy, url_prefix='/savvy')

    return flask_app
