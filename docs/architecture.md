# Architecture

## Current Status

The project is currently in the architecture and initialization phase.

This document will evolve as technical decisions are made.

---

## High-Level Architecture

The application will initially use a monolithic full-stack architecture with separate frontend and backend applications.

```text
                    Client
                      |
                      v
              Next.js Frontend
                      |
                      | HTTP / REST API
                      v
              Node.js + Express
                      |
          +-----------+-----------+
          |           |           |
          v           v           v
       Database    File Storage   External Services
```

The exact database, storage provider, authentication mechanism, and external services will be finalized before the corresponding features are implemented.

---

## Repository Structure

```text
/
├── frontend/
│   └── Next.js application
│
├── backend/
│   └── Node.js + Express application
│
└── docs/
    └── project documentation
```

---

## Frontend

The frontend will use:

* Next.js
* React
* TypeScript

The frontend will be responsible for:

* User interface
* Client-side interactions
* Page routing
* Form handling
* Calling backend APIs
* Displaying application state
* User-facing validation and feedback

Business rules that must be trusted by the server should not exist only in the frontend.

---

## Backend

The backend will use:

* Node.js
* Express
* JavaScript

The backend will be responsible for:

* REST APIs
* Authentication and authorization
* Business logic
* Input validation
* Database access
* Booking validation
* Listing management
* Error handling
* Security-sensitive operations

The backend should be organized so that HTTP handling, business logic, and data access do not become unnecessarily coupled.

The exact backend folder structure will be finalized during implementation.

---

## Database

A relational database is expected to be used because the project contains relationships between:

* Users
* Listings
* Bookings
* Reviews
* Availability
* Other marketplace entities

The specific database and ORM/query technology will be finalized before database implementation.

---

## Authentication

Authentication technology has not yet been finalized.

The final design should support:

* User identity
* Secure authentication
* Protected routes
* Authorization
* Guest and host capabilities

Authentication decisions must be documented before implementation.

---

## File Storage

Listing images will require external or object storage.

The exact storage solution will be decided before implementing listing image uploads.

---

## API Style

The initial backend API will use REST.

Frontend and backend communicate through HTTP APIs.

API conventions such as:

* URL naming
* HTTP methods
* response format
* error format
* authentication headers/cookies
* pagination
* filtering

will be documented as the backend architecture develops.

---

## Error Handling

The backend should provide consistent error responses.

The frontend should translate API errors into appropriate user-facing states.

Sensitive internal errors should not be exposed directly to clients.

---

## Validation

Input validation should occur on the backend for all externally supplied data.

Frontend validation may be used for user experience, but it must not replace server-side validation.

---

## Security

Security-sensitive concerns include:

* Authentication
* Authorization
* Input validation
* Rate limiting where appropriate
* Secure cookies/tokens
* File upload validation
* Database query safety
* Secret management
* CORS configuration

Specific security mechanisms will be selected during implementation.

---

## Scalability

The initial system should remain a modular monolith rather than prematurely introducing microservices.

The architecture should allow individual components to be improved or extracted later if justified by actual requirements.

---

## AI-Assisted Development

AI coding agents may be used during development.

Agent-generated code must still follow this architecture and project scope.

AI agents should not introduce technologies or architectural patterns solely because they are popular or convenient.

Significant architectural decisions must be documented.
