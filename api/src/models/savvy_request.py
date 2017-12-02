import sqlalchemy as sa

from .base import TrackedTableMixin, BaseModel


class SavvyRequest(TrackedTableMixin, BaseModel):
    __tablename__ = 'savvy_requests'
    id = sa.Column(sa.Integer, primary_key=True)
    user_id = sa.Column(sa.Integer, sa.ForeignKey('users.id'), nullable=False)
    subject = sa.Column(sa.Text, nullable=False)

    user = sa.orm.relationship('User')
