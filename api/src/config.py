import os


class Config(object):
    SAVVY_ENV = os.environ.get('SAVVY_ENV')
    DEBUG = True
    POSTGRES_NAME = 'savvy_dev'
    POSTGRES_HOST = 'localhost'
    POSTGRES_PORT = '5432'
    POSTGRES_USER = 'postgres'
    POSTGRES_PASS = 'postgres'
    JWT_SECRET = 'super secret random key'
    AWS_ACCESS_KEY_ID = ''
    AWS_SECRET_ACCESS_KEY = ''


class TestConfig(Config):
    TESTING = True
    POSTGRES_NAME = 'savvy_test'
    POSTGRES_PORT = '5433'


class ProdConfig(Config):
    DEBUG = False
    POSTGRES_NAME = os.environ.get('POSTGRES_NAME')
    POSTGRES_HOST = os.environ.get('POSTGRES_HOST')
    POSTGRES_PORT = os.environ.get('POSTGRES_PORT')
    POSTGRES_USER = os.environ.get('POSTGRES_USER')
    POSTGRES_PASS = os.environ.get('POSTGRES_PASS')
    AWS_ACCESS_KEY_ID = os.environ.get('AWS_ACCESS_KEY_ID')
    AWS_SECRET_MOBILE_CLIENT = os.environ.get('AWS_SECRET_ACCESS_KEY')


def get_config_for_env():
    configs = {
        'dev': Config,
        'test': TestConfig,
        'prod': ProdConfig,
    }
    env = os.environ.get('SAVVY_ENV') or 'dev'

    return configs[env]


config_for_env = get_config_for_env()()
