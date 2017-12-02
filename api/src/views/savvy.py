from flask import Blueprint, make_response, jsonify, request

from src.models import User, SavvyRequest, SavvySubmission
from src.database import db_session

savvy = Blueprint('savvy', __name__)


@savvy.route('/request', methods=['POST'])
def create_savvy_request():
    post_data = request.get_json()
    email_address = post_data.get('email_address')
    subject = post_data.get('subject')
    with db_session() as session:
        user = session.query(User).filter_by(
            email_address=email_address).first()
        if not user:
            user = User(email_address=email_address)
            session.add(user)
            session.commit()
        savvy_request = SavvyRequest(user_id=user.id, subject=subject)
        session.add(savvy_request)
        session.commit()
        return make_response(jsonify({
            'message': 'success',
        })), 200


@savvy.route('/submission', methods=['POST'])
def create_savvy_submission():
    post_data = request.get_json()
    email_address = post_data.get('email_address')
    title = post_data.get('title')
    body = post_data.get('body')
    with db_session() as session:
        user = session.query(User).filter_by(
            email_address=email_address).first()
        if not user:
            user = User(email_address=email_address)
            session.add(user)
            session.commit()
        savvy_submission = SavvySubmission(user_id=user.id, title=title,
                                           body=body)
        session.add(savvy_submission)
        session.commit()
        return make_response(jsonify({
            'message': 'success',
        })), 200
