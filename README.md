# Quote API

This is a simple Quote API built with Node.js and Express. It allows you to retrieve quotes, filter quotes by category, get a random quote, and add new quotes. The API also includes API key validation for secure access.

## Features

- Retrieve all quotes
- Filter quotes by category
- Get a random quote
- Add a new quote
- API key validation for secure access

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/quote-api.git
    cd quote-api
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a [quotes.json](http://_vscodecontentref_/0) file in the root directory and add your initial quotes:
    ```json
    [
        {
            "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
            "author": "Nelson Mandela",
            "category": "Inspiration"
        },
        {
            "quote": "The way to get started is to quit talking and begin doing.",
            "author": "Walt Disney",
            "category": "Motivation"
        },
        {
            "quote": "Your time is limited, so don't waste it living someone else's life.",
            "author": "Steve Jobs",
            "category": "Life"
        }
    ]
    ```

## Usage

1. Start the server:
    ```sh
    npm start
    ```

2. The server will be running at `http://localhost:8000`.

## API Endpoints

### Get All Quotes

- **URL:** `/quotes`
- **Method:** `GET`
- **Headers:** `x-api-key: your-api-key`
- **Response:**
    ```json
    [
        {
            "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
            "author": "Nelson Mandela",
            "category": "Inspiration"
        },
        ...
    ]
    ```

### Get Quotes by Category

- **URL:** `/quotes/:category`
- **Method:** `GET`
- **Headers:** `x-api-key: your-api-key`
- **Response:**
    ```json
    [
        {
            "quote": "The way to get started is to quit talking and begin doing.",
            "author": "Walt Disney",
            "category": "Motivation"
        },
        ...
    ]
    ```

### Get a Random Quote

- **URL:** `/quote`
- **Method:** `GET`
- **Headers:** `x-api-key: your-api-key`
- **Response:**
    ```json
    {
        "quote": "Your time is limited, so don't waste it living someone else's life.",
        "author": "Steve Jobs",
        "category": "Life"
    }
    ```

### Add a New Quote

- **URL:** `/quotes`
- **Method:** `POST`
- **Headers:** `x-api-key: your-api-key`
- **Body:**
    ```json
    {
        "quote": "New quote text",
        "author": "Author name",
        "category": "Category"
    }
    ```
- **Response:**
    ```json
    {
        "quote": "New quote text",
        "author": "Author name",
        "category": "Category"
    }
    ```

## API Key Validation

To secure the API, you need to include a valid API key in the `x-api-key` header of your requests. You can define your valid API keys in the [server.js](http://_vscodecontentref_/1) file.

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Author

Aakash Gupta