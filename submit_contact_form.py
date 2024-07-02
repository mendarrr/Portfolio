from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/submit-contact-form', methods=['POST'])
def submit_contact_form():
    # Get the form data
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')

    # Store the data in a file
    data = f"Name: {name}\nEmail: {email}\nMessage: {message}\n\n"
    with open('contact-form-submissions.txt', 'a') as file:
        file.write(data)

    # Return a success response
    return jsonify({'message': 'Form submitted successfully'})

if __name__ == '__main__':
    app.run(debug=True)
