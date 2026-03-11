---
sidebar_position: 2
---

# Carts

Retrieve and update user carts with HTTP methods.

## Cart object

Defines the structure of a cart resource returned and accepted by the API.

```json
{

"userId": "integer",

"products": [{ "productId": "integer", "quantity": "integer"}],

"id": "integer", 

"date": "string" 
}
```

## GET `/carts`

Retrieves a list of all available carts.

### Make request

- **Endpoint:** `/carts`

- **Method:** `GET`

#### Request

```bash
curl https://fakestoreapi.com/carts
```

#### Response

- **Status:** `200 OK`

- **Content Type:** `application/json`

```json
[
  {
    "id": 1,
    "userId": 1,
    "date": "2020-03-02T00:00:00.000Z",
    "products": [
      {
        "productId": 1,
        "quantity": 4
      },
      {
        "productId": 2,
        "quantity": 1
      },
      {
        "productId": 3,
        "quantity": 6
      }
    ],
    "__v": 0
  },
]
```

## GET `/carts/{id}`

Retrieves a specific cart by ID

### Make request

- **Endpoint:** `/carts/{id}`

- **Method:** `GET`

- **Path parameter:** `id` (integer)

#### Request

```bash
curl https://fakestoreapi.com/carts/{id}
```

Replace `{id}` with a valid cart ID.

```bash
curl https://fakestoreapi.com/carts/5
```

#### Response

- **Status:** `200 OK`

- **Content Type:** `application/json`

```json
{
  "id": 5,
  "userId": 3,
  "date": "2020-03-01T00:00:00.000Z",
  "products": [
    {
      "productId": 7,
      "quantity": 1
    },
    {
      "productId": 8,
      "quantity": 1
    }
  ],
  "__v": 0
}
```

For non-existing integer IDs, the API returns `200 OK` with a `null` response body.

#### Error response

The API returns an error response for non-integer IDs

**Status:** `400 Bad Request`

```json
{
    "status":"error",
    "message":"cart id should be provided"
}
```

## POST `/carts`

Creates a new cart

### Make request

- **Endpoint:** `/carts`

- **Method:** `POST`

- **Headers:** `Content-Type: application/json`

- **Request body:**

```json
{
  "userId": 2,
  "products": [
    { "productId": 7, "quantity": 1 }
  ]
}
```

The body parameters include a `userId`(integer), and `products`(array). A cart ID is not required in the request body as the API generates an ID itself.

#### Request

```bash
curl -i -X POST https://fakestoreapi.com/carts \
  -H "Content-Type: application/json" \
  -d '{"userId":2,"products":[{"productId":7,"quantity":1}]}'
```

#### Response

- **Status:** `201 Created`

- **Content-Type:** `application/json`

```json
{
  "id": 11,
  "userId": 2,
  "products": [
    { "productId": 7, "quantity": 1 }
  ]
}
```

## Put `carts/{id}`

Updates an existing cart by ID

### Make request

- **Endpoint:** `/carts/{id}`

- **Method:** `PUT`

- **Headers:** `Content-Type: application/json`

- **Path parameter:** `id` (integer)

- **Request body:**

```json
{
  "userId":10,
  "products":[{"productId":3,"quantity":1}]
}
```

Where no request body is provided, the API returns `200 OK` with only the cart `id`.

#### Request

```bash
curl -X PUT https://fakestoreapi.com/carts/{id} \
  -H "Content-Type: application/json" \
  -d '{"userId":10,"products":[{"productId":3,"quantity":1}]}'
```

Replace `{id}` with a valid cart ID:

```bash
curl -X PUT https://fakestoreapi.com/carts/5 \
  -H "Content-Type: application/json" \
  -d '{"userId":10,"products":[{"productId":3,"quantity":1}]}'
```

#### Response

- **Status:** `200 OK`

- **Content-Type:** `application/json`

```json
{
  "id":5,
  "userId":10,
  "products":[{"productId":3,"quantity":1}]
}
```

#### Error response

For non-integer IDs, the API returns a JSON-formatted error response

- **Status:** `400 Bad Request`

- **Response:**
```json
{
  "status":"error",
  "message":"something went wrong! check your sent data"
}
```

## DELETE `carts/{id}`

Simulates removal of a specific cart by ID.

### Make request

- **Endpoint:** `/carts/{id}`

- **Method:** `DELETE`

-  **Path parameter:** `id` (integer)

#### Request

```bash
curl -X DELETE https://fakestoreapi.com/carts/{id}
```

Input a valid `{id}` to make request:

```bash
curl -X DELETE https://fakestoreapi.com/carts/5
```

Response:

- **Status:** `200 OK`

- **Content-Type:** `application/json`

```json
{
  "id":5,
  "userId":3,
  "date":"2020-03-01T00:00:00.000Z",
  "products":[{"productId":7,"quantity":1},{"productId":8,"quantity":1}],
  "__v":0
}
```

#### Error response

The API returns an error response when a non-integer ID is inputted.

- **Status:** `400 Bad Request`

```json
{
  "status":"error",
  "message":"cart id should be provided"
}
```

