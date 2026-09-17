# Technical Decisions

This document records important technical decisions made during development.

The purpose is to preserve context and prevent previously rejected or undecided approaches from being introduced accidentally.

---

## Decision Status

Decisions may be:

* Proposed
* Accepted
* Rejected
* Superseded

---

## Initial Decisions

### Repository Structure

**Status:** Accepted

The project will use separate `frontend/` and `backend/` applications within a single repository.

Reason:

* Clear separation of responsibilities
* Easier independent development
* Suitable for learning full-stack architecture
* Allows frontend and backend to be deployed independently if desired

---

### Frontend Framework

**Status:** Accepted

Use Next.js with TypeScript.

---

### Backend Framework

**Status:** Accepted

Use Node.js with Express and TypeScript.

---

### API Style

**Status:** Accepted

The initial backend API will use REST.

---

### Architecture Style

**Status:** Accepted

Start with a modular monolith rather than microservices.

Reason:

The project is currently small enough that microservices would introduce operational complexity without a demonstrated need.

---

### Database

**Status:** Proposed

A relational database is preferred because of the relationships among users, listings, bookings, reviews, and availability.

Specific database technology is not yet finalized.

---

### Authentication

**Status:** Proposed

Authentication technology is not yet finalized.

---

### File Storage

**Status:** Proposed

A dedicated object/file storage service will be used for listing images.

The specific provider is not yet finalized.

---

## Future Decisions

Important decisions made during implementation should be added below with:

* Decision
* Status
* Reason
* Alternatives considered
* Consequences
