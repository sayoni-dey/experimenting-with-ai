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

Use Node.js with Express and JavaScript.

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

**Status:** Accepted

Use PostgreSQL hosted by Supabase.

Reason:

* Suits the relational data model (users, listings, bookings, reviews, availability).
* Provides managed Postgres, REST/JS client, and authentication out of the box.
* Backend initializes clients through `@supabase/server` core primitives (`resolveEnv`, `createContextClient`, `createAdminClient`), which use supabase-js under the hood and handle future inbound auth automatically.

Alternatives considered:

* Local PostgreSQL install (more operational setup, no managed auth).
* MySQL (relational but lacks the managed auth/API layer of Supabase).

Consequences:

* Connection credentials live in the backend `.env` file.
* The secret key stored in `SUPABASE_SECRET_KEY` (new-style API key, replaces legacy `SUPABASE_SERVICE_ROLE_KEY`) bypasses Row-Level Security and must be kept out of client code.
* The publishable key in `SUPABASE_PUBLISHABLE_KEY` (replaces legacy `SUPABASE_ANON_KEY`) is client-safe and used by the RLS-scoped client.
* Environment variables use the new Supabase API key naming: `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_SECRET_KEY`, and `SUPABASE_JWKS_URL`.

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
