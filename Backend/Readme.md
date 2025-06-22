# User Registration & Login API Documentation

## Endpoints

- `POST /users/register` — Register a new user
- `POST /users/login` — Login with email and password
- `GET /users/profile` — Get user profile
- `POST /users/logout` — Logout user

---

## 1. Register User

### Endpoint

`POST /users/register`

### Description

This endpoint allows a new user to register by providing their first name, last name, email, and password.  
If the registration is successful, the API returns an authentication token and the user object.

### Request Body

Send a JSON object in the following format:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "yourpassword"
}
```

#### Field Requirements

- `fullname.firstname` (string, required, min 3 characters)
- `fullname.lastname` (string, required, min 3 characters)
- `email` (string, required, must be a valid email)
- `password` (string, required, min 6 characters)

### Responses

#### Success

- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "token": "<JWT token>",
    "user": {
      "_id": "...",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "johndoe@example.com"
      // other user fields
    }
  }
  ```

#### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "First name must be minimum 3 character",
        "param": "fullname.firstname",
        "location": "body"
      }
      // ...other errors
    ]
  }
  ```

#### Email Already Exists

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "error": "Email already exists"
  }
  ```

### Example Request (using curl)

```sh
curl -X POST http://localhost:5000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "johndoe@example.com",
    "password": "yourpassword"
  }'
```

---

## 2. Login User

### Endpoint

`POST /users/login`

### Description

This endpoint allows an existing user to log in using their email and password.  
If the login is successful, the API returns an authentication token and the user object.

### Request Body

Send a JSON object in the following format:

```json
{
  "email": "johndoe@example.com",
  "password": "yourpassword"
}
```

#### Field Requirements

- `email` (string, required, must be a valid email)
- `password` (string, required, min 6 characters)

### Responses

#### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "token": "<JWT token>",
    "user": {
      "_id": "...",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "johndoe@example.com"
      // other user fields
    }
  }
  ```

#### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      }
      // ...other errors
    ]
  }
  ```

#### Invalid Credentials

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

### Example Request (using curl)

```sh
curl -X POST http://localhost:5000/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "johndoe@example.com",
    "password": "yourpassword"
  }'
```

---

## 3. Get User Profile

### Endpoint

`GET /users/profile`

### Description

This endpoint retrieves the profile information of the currently authenticated user.
Authentication is required through a JWT token in the Authorization header.

### Headers

```
Authorization: Bearer <your-jwt-token>
```

### Responses

#### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "user": {
      "_id": "...",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "johndoe@example.com"
      // other user fields
    }
  }
  ```

#### Unauthorized

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Authentication required"
  }
  ```

### Example Request (using curl)

```sh
curl -X GET http://localhost:5000/users/profile \
  -H "Authorization: Bearer <your-jwt-token>"
```

---

## 4. Logout User

### Endpoint

`POST /users/logout`

### Description

This endpoint logs out the currently authenticated user by invalidating their JWT token.
Authentication is required through a JWT token in the Authorization header.

### Headers

```
Authorization: Bearer <your-jwt-token>
```

### Responses

#### Success

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

#### Unauthorized

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Authentication required"
  }
  ```

### Example Request (using curl)

```sh
curl -X POST http://localhost:5000/users/logout \
  -H "Authorization: Bearer <your-jwt-token>"
```

---

# Captain API Documentation

## Endpoints

- `POST /captain/register` — Register a new captain
- `POST /captain/login` — Login for captains
- `GET /captain/profile` — Get captain's profile
- `GET /captain/logout` — Logout captain

---

## 1. Register Captain

### Endpoint

`POST /captain/register`

### Description

Register a new captain (driver) with their personal and vehicle details.

### Request Body

```json
{
  "fullname": {
    "firstname": "Amit",     // Required, minimum 2 characters
    "lastname": "Sharma"     // Required, minimum 2 characters
  },
  "email": "amit@example.com",    // Required, must be valid email format
  "password": "password123",      // Required, minimum 6 characters
  "vehicle": {
    "color": "Red",              // Required, minimum 3 characters
    "plate": "DL01AB1234",       // Required, minimum 6 characters
    "capacity": 4,               // Required, minimum 1
    "vehicleType": "car"         // Required, must be one of: 'car', 'bike', 'auto'
  },
  "location": {
    "lat": 28.6139,             // Optional, latitude
    "lng": 77.2090              // Optional, longitude
  }
}
```

### Responses

#### Success (201 Created)
```json
{
  "token": "eyJhbG...",        // JWT token for authentication
  "captain": {
    "_id": "60d...",
    "fullname": {
      "firstname": "Amit",
      "lastname": "Sharma"
    },
    "email": "amit@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "DL01AB1234",
      "capacity": 4,
      "vehicleType": "car"
    },
    "location": {
      "lat": 28.6139,
      "lng": 77.2090
    }
  }
}
```

## 2. Login Captain

### Endpoint

`POST /captain/login`

### Description

Authenticate a captain with email and password.

### Request Body

```json
{
  "email": "amit@example.com",    // Required, must be valid email
  "password": "password123"       // Required, minimum 6 characters
}
```

### Responses

#### Success (200 OK)
```json
{
  "token": "eyJhbG...",        // JWT token for authentication
  "captain": {
    "_id": "60d...",
    "fullname": {
      "firstname": "Amit",
      "lastname": "Sharma"
    },
    "email": "amit@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "DL01AB1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

#### Invalid Credentials (401 Unauthorized)
```json
{
  "message": "Invalid Email or password"
}
```

## 3. Get Captain Profile

### Endpoint

`GET /captain/profile`

### Description

Get the profile information of the authenticated captain.

### Headers
```
Authorization: Bearer <jwt-token>    // Required
```

### Responses

#### Success (200 OK)
```json
{
  "captain": {
    "_id": "60d...",
    "fullname": {
      "firstname": "Amit",
      "lastname": "Sharma"
    },
    "email": "amit@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "DL01AB1234",
      "capacity": 4,
      "vehicleType": "car"
    },
    "location": {
      "lat": 28.6139,
      "lng": 77.2090
    }
  }
}
```

#### Unauthorized (401)
```json
{
  "message": "Authentication required"
}
```

## 4. Logout Captain

### Endpoint

`GET /captain/logout`

### Description

Logout the currently authenticated captain by invalidating their token.

### Headers
```
Authorization: Bearer <jwt-token>    // Required
```

### Responses

#### Success (200 OK)
```json
{
  "message": "Logged out successfully"
}
```

#### Error (500 Internal Server Error)
```json
{
  "message": "Error logging out"
}
```

## Common Error Responses

### Validation Error (400 Bad Request)
```json
{
  "errors": [
    {
      "msg": "First name must be at least 2 characters long",
      "param": "fullname.firstname",
      "location": "body"
    }
    // ... other validation errors
  ]
}
```

### Email Already Exists (400 Bad Request)
```json
{
  "error": "Email already exists"
}
```

## Notes for Captains

- All passwords are securely hashed before storage
- JWT tokens are required for authenticated endpoints (profile, logout)
- Vehicle type must be one of: 'car', 'bike', 'auto'
- Location coordinates (lat/lng) are optional but recommended
- Keep your authentication token secure and include it in the Authorization header as "Bearer <token>"