---
sidebar_position: 2
---

# Quickstart

In this guide, you will make a request to the Fake Store API and fetch product data.

## Base URL

All requests to the API are made using the following URL:

```http
https://fakestoreapi.com
```

## Send a request to the API

Fake Store does not require an API key.

**Endpoint:** `/products`

**Method:** `GET`

### Request

```bash
curl https://fakestoreapi.com/products
```

### JSON response

If successful, the API returns a `200 OK` response with JSON data:

```json
[
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  }
]
```

The JSON response contains an array of product objects. Each product includes fields such as `id`, `title`, `price`, and `rating`.

### Usage: Fetching data with JavaScript

```javascript
fetch('https://fakestoreapi.com/products')
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

