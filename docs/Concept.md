---
sidebar_position: 2
sidebar_label: 'Concept'
---

# Core concepts

This guide introduces the core concepts of the Fake Store API and explains how it handles requests and responses.

## Resources

The Fake Store API is structured around a RESTful design, with data organized into resources that represent different object types.

Resources in the Fake Store API include:

- Products: List of items available in the store for purchase.

- Carts: Collections of products marked for purchase and associated with a specific user.

- Users: Profiles of registered e-commerce customers.

- Auth: Endpoints for managing user authentication

Each resource is accessed through standard HTTP methods such as `GET`, `POST`, `PUT`, and `DELETE`.

## HTTP Methods

All interactions with Fake Store API resources are carried out using standard HTTP methods.


| **Method** | **Description** |
|---|---|
| `GET` | Retrieves resource data | 
| `POST` | Adds/creates a new resource | 
| `PUT`| Updates a specific existing resource data | 
| `DELETE` | Removes a specific resource| 

## Authentication

While the Fake Store API does not require authentication for basic data retrieval, it provides an authentication endpoint (`/auth/login`) for validating user credentials.

Authentication request to the API is securely validated as it checks and only returns a JSON Web Token (JWT) when request credentials are accurate and/or properly formatted.

```bash
curl -X POST https://fakestoreapi.com/auth/login \
-H "Content-Type: application/json" \
-d '{"username":"mor_2314","password":"83r5^_"}'
```

**JSON response:**

```json
{"token":"eyJhbGciOiJIU..."}
```
## Request Format

Every request to the Fake Store API must specify a valid endpoint and HTTP method.

For requests that create a new resource, or updates an existing one, the API typically accepts a JSON-formatted request body. Such requests should include a valid header formatted as `Content-Type: application/json`. 

```
curl -X POST https://fakestoreapi.com/products \
-H "Content-Type: application/json" \
-d '{"title":"Sample Product","price":100}'
```

In the request above:

- `"Content-Type: application/json"` represents the request Header.

- `'{"title":"Sample Product","price":100}'` represents the JSON formatted request body.

## Response Format

The API generally returns JSON-formatted responses for successful API requests. Some error responses may return plain text or HTML-formatted content instead of JSON.

```json
{
    "id": "integer",
    "title": "string",
    "price": "integer"
}
```

The above code represents a successful JSON-formatted API response returned on successful API call.

```text
username and password are not provided in JSON-format
```

The above represents a plain text response returned by the API upon a failed API call.

## Status codes

The API returns a status code depending upon request success or failure.

| **Status code** | **Description** |
|---|---|
| `200 OK` | Request completed successfully | 
| `201 Created` | Resource created successfully | 
| `400 Bad Request`| Request contains invalid JSON or non-integer ID | 
| `401 Unauthorized` | Invalid authentication credentials | 

