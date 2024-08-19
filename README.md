Currency Exchange Service
=========================

The Currency Exchange Service is a Node.js application built with Express that provides endpoints for retrieving exchange rates and converting currencies. It uses the [ExchangeRate-API](https://www.exchangerate-api.com/) for fetching exchange rates and Google Cloud Secret Manager for managing secrets securely. You can replace Google Secret Manager with your preferred secret management solution if desired.

Features
--------

-   Fetch Exchange Rates: Retrieve the latest exchange rates for various currencies.

-   Currency Conversion: Convert an amount from one currency to another using real-time exchange rates.

-   Secure Secret Management: Utilize Google Cloud Secret Manager to manage API keys securely, or replace it with your own secret management approach.

Installation
------------

1\. **Clone the repository:**
```bash
  git clone https://github.com/your-username/your-repo.git
```

2\. **Navigate to the project directory:**
```bash
  cd your-repo
```

3\. Install dependencies:
```bash
  npm install
```

4\. Set up environment variables: Create a .env file in the root directory and add the following
```bash
  PORT=3000
  PROJECT_ID=your-google-cloud-project-id
  SECRET_ID=your-secret-id
```

5\. You can replace the secret management setup in src/helpers/gsm.js with your preferred method if you're not using Google Cloud Secret Manager.

6\. Start the server:
```bash
  npm start
```

7\.  The server will run on http://localhost:3000 or the port specified in the .env file.

API Endpoints
-------------

### Get Exchange Rates

- **Endpoint:** `GET /api/exchange/rates`
- **Query Parameters:**
  - `from`: Currency code to convert from (e.g., `USD`)
  - `to`: Currency code to convert to (e.g., `EUR`)
  - `amount`: Amount to convert (e.g., `100`)

Response:
```json
{

  "amount": 100,

  "from": "USD",

  "to": "EUR",

  "convertedAmount": 85.50

}
```

Error Handling
--------------

In case of an error, the API will return a 500 status code with an error message.

Contact
-------

For any inquiries or issues, please contact Alec Lankford (alec.d.lankford@gmail.com)
