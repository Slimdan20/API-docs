---
sidebar_position: 4
---

# Auth

Authenticates users of the store.

## Auth object

Represents the authentication token returned after a successful login request.

```json
{
    "token": "string"
}
```

## POST `/auth/login`

### Make request

- **Endpoint:** `/auth/login`

- **Method:** `POST`

- **Headers:** `Content-Type: application/json`

- **Request body:** 

```json
{
    "username":"mor_2314",
    "password":"83r5^_"
}
```

#### Request

```bash
curl -X POST https://fakestoreapi.com/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"mor_2314", "password":"83r5^_"}'
```

#### Response

The endpoint returns a JSON Web Token (JWT) that can be used for authenticated requests.

- **Status:** `201 Created`

- **Content-Type:** `application/json`

```json
{ 
    "token": "<JWT token>" 
}
```

#### Error response

The API returns an error when credentials are missing or invalid.

- **Status:** `401 Unauthorized`

```html
username or password is incorrect
```

- **Status:** `400 Bad Request`

```html
username and password are not provided in JSON format
```