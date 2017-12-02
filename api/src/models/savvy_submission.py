import sqlalchemy as sa

from .base import TrackedTableMixin, BaseModel


class SavvySubmission(TrackedTableMixin, BaseModel):
    __tablename__ = 'savvy_submissions'
    id = sa.Column(sa.Integer, primary_key=True)
    user_id = sa.Column(sa.Integer, sa.ForeignKey('users.id'), nullable=False)
    title = sa.Column(sa.Text, nullable=False)
    body = sa.Column(sa.Text, nullable=False)

    user = sa.orm.relationship('User')
