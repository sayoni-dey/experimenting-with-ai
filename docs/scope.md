# Project Scope

## Purpose

This project is an Airbnb-style accommodation marketplace built as a full-stack engineering project.

The primary goals are:

* Build a realistic full-stack application.
* Practice production-oriented backend development.
* Design and implement a relational data model.
* Implement authentication and authorization.
* Build search and filtering functionality.
* Implement booking and review workflows.
* Explore scalable application architecture.
* Use AI coding agents responsibly during development.

## Core Users

The initial system will support two primary roles:

### Guest

A guest can:

* Create an account.
* Sign in.
* Browse accommodations.
* Search and filter listings.
* View listing details.
* Make bookings.
* View their bookings.
* Leave reviews where permitted.

### Host

A host can:

* Create and manage listings.
* Upload listing information and images.
* View reservations for their listings.
* Manage listing availability.
* View relevant booking information.

A user may eventually be allowed to act as both a guest and a host.

## Initial Feature Areas

### Authentication

* User registration
* User login
* Session/token management
* Protected resources
* Authorization

### Listings

* Create listing
* View listing
* Update listing
* Delete listing
* Listing images
* Location information
* Pricing
* Availability

### Discovery

* Browse listings
* Search
* Filtering
* Sorting
* Listing detail pages

### Bookings

* Create booking
* View booking
* Cancel booking where permitted
* Host reservation management
* Availability validation

### Reviews

* Create reviews where permitted
* View reviews
* Associate reviews with users and listings

### User Profiles

* User information
* Host information
* User's listings
* User's bookings

## Features Explicitly Deferred

The following should not be implemented during the initial development phase unless explicitly added to scope:

* Payments
* Real-time messaging
* Advanced recommendation systems
* Complex distributed architecture
* Microservices
* Mobile applications
* Production-scale infrastructure
* Advanced AI features

These may be considered later.

## Development Approach

Features should be implemented incrementally.

The project should first establish:

1. Repository structure
2. Frontend environment
3. Backend environment
4. Database architecture
5. Authentication architecture
6. Core data models
7. Core APIs
8. Frontend application structure

Only after the foundation is stable should major marketplace features be implemented.

## Scope Changes

Important scope changes should be documented in `docs/decisions.md`.

The existence of a feature in the real Airbnb product does not automatically mean that the feature belongs in this project.
