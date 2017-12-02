import sqlalchemy as sa

from .base import TrackedTableMixin, BaseModel


class User(TrackedTableMixin, BaseModel):
    __tablename__ = 'users'
    id = sa.Column(sa.Integer, primary_key=True)
    email_address = sa.Column(sa.Text, unique=True, nullable=False)

    def __init__(self, **kwargs):
        self.email_address = kwargs.pop('email_address')
