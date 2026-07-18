# Mini Issue Tracking System

> A production-oriented full-stack issue tracking application built with **React**, **Node.js**, **Express**, and **MongoDB**, demonstrating secure authentication, scalable architecture, RESTful API design, and modern frontend development practices.

![React](https://img.shields.io/badge/Frontend-React%2019-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js%2024-339933?logo=node.js)
![Express](https://img.shields.io/badge/Framework-Express.js-black?logo=express)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![Swagger](https://img.shields.io/badge/API-Swagger-green)
![Socket.IO](https://img.shields.io/badge/Realtime-Socket.IO-black)
![License](https://img.shields.io/badge/License-MIT-blue)

---

# Table of Contents

- [Project Overview](#project-overview)
- [Live Demo](#live-demo)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Architecture](#project-architecture)
- [Folder Structure](#folder-structure)
- [Database Design](#database-design)
- [Authentication Flow](#authentication-flow)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [API Documentation](#api-documentation)
- [Engineering Decisions](#engineering-decisions)
- [Performance Optimizations](#performance-optimizations)
- [Security Considerations](#security-considerations)
- [Challenges Encountered](#challenges-encountered)
- [Assumptions](#assumptions)
- [Trade-offs](#trade-offs)
- [Lessons Learned](#lessons-learned)
- [Future Improvements](#future-improvements)
- [Bonus Features Implemented](#bonus-features-implemented)
- [License](#license)

---

# Project Overview

The **Mini Issue Tracking System** is a modern full-stack web application developed as part of a Full Stack Developer technical assessment. Rather than focusing solely on CRUD functionality, the project emphasizes software engineering principles including clean architecture, secure authentication, REST API design, maintainability, scalability, performance optimization, and comprehensive documentation.

The application allows authenticated users to create, manage, update, and track issues throughout their lifecycle while providing real-time updates, activity history, role-based authorization, and a responsive user interface.

The project was designed with production-readiness in mind by adopting a layered backend architecture, reusable frontend components, standardized API responses, robust validation, and clear separation of responsibilities.

Although developed within a limited assessment timeline, the application's structure allows future enhancements to be introduced with minimal architectural changes.

---

# Live Demo

## Frontend

https://issue-tracker-1-1hml.onrender.com

---

## Backend API

https://issue-tracker-2shr.onrender.com/api

Note: The application is hosted on Render's free tier. If the application has been idle, the initial request may take a short time while the services wake up.

---

## Swagger Documentation

https://issue-tracker-2shr.onrender.com/api/docs

---

## GitHub Repository

https://github.com/Bello1964/issue-tracker

---

# Features

## Authentication

- User Registration
- User Login
- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes
- Role-Based Authorization

---

## Dashboard

The dashboard provides an overview of the application's current state through dynamically generated statistics.

Available metrics include:

- Total Issues
- Open Issues
- Closed Issues
- Overdue Issues

Dashboard data is generated directly from MongoDB, ensuring that displayed statistics always reflect the latest available information.

---

## Issue Management

Authenticated users can:

- Create Issues
- Edit Issues
- Delete Issues
- View Issue Details
- Assign Issues
- Update Status
- Update Priority
- Set Due Dates

Each issue stores:

- Title
- Description
- Status
- Priority
- Assignee
- Due Date
- Created Date
- Last Updated Date

---

## Search & Filtering

The application supports:

- Search by title
- Filter by status
- Filter by priority
- Sort by newest
- Sort by oldest
- Server-side pagination

Filtering and sorting are executed on the backend to improve scalability and reduce unnecessary client-side processing.

---

## Activity History

Every important modification performed on an issue is automatically recorded within an activity log.

Examples include:

- Issue Creation
- Status Updates
- Priority Changes
- Assignee Changes
- Issue Updates
- Issue Deletion

This provides a lightweight audit trail that improves transparency and accountability.

---

## Real-Time Updates

Socket.IO is used to notify connected clients whenever issues are updated.

This allows users to interact with current information without manually refreshing the application.

---

## Optimistic User Experience

To improve perceived performance, the frontend includes:

- Skeleton loading components
- Optimistic UI updates
- Loading indicators
- Graceful error handling
- Background data synchronization using React Query

These techniques significantly improve user experience while maintaining data consistency.

---

## API Documentation

Interactive Swagger documentation is included, allowing developers to:

- Browse endpoints
- Inspect schemas
- Test requests
- Understand authentication requirements

without requiring external API documentation.


# Technology Stack

The application uses a modern JavaScript technology stack selected to balance developer productivity, maintainability, scalability, and performance.

---

## Frontend

| Technology | Purpose |
|------------|---------|
| React 19 | Component-based user interface |
| Vite | Fast development server and optimized production builds |
| React Router | Client-side routing |
| TanStack Query | Server state management, caching and optimistic updates |
| Axios | HTTP client for API communication |
| Tailwind CSS | Utility-first CSS framework |
| shadcn/ui | Reusable UI component library |
| Radix UI | Accessible UI primitives |
| Lucide React | Icon library |

---

## Backend

| Technology | Purpose |
|------------|---------|
| Node.js 24 | JavaScript runtime |
| Express.js | REST API framework |
| MongoDB Atlas | Cloud-hosted NoSQL database |
| Mongoose | MongoDB object modelling |
| JWT | Stateless authentication |
| bcrypt | Password hashing |
| Zod | Request validation |
| Socket.IO | Real-time communication |
| Swagger/OpenAPI | Interactive API documentation |

---

## Testing

| Technology | Purpose |
|------------|---------|
| Jest | Unit testing framework |
| Supertest | HTTP endpoint testing |

The existing test suite focuses primarily on validating critical backend functionality. Given the project timeline, complete integration and end-to-end testing were intentionally deferred.

---

# Why These Technologies?

The technologies selected for this project were chosen based on maintainability, scalability, developer experience, and suitability for a production-oriented application rather than popularity alone.

## React

React was selected because its component-based architecture encourages reusable UI development while making the application easier to maintain as it grows.

Reusable components reduce duplication and improve consistency across the application.

---

## TanStack Query

Rather than introducing a global state library for server state, TanStack Query was used because it provides:

- Automatic caching
- Background refetching
- Query invalidation
- Optimistic updates
- Loading state management
- Error state management

This significantly reduced boilerplate while improving application responsiveness.

---

## Express.js

Express provides a lightweight yet flexible framework for building RESTful APIs.

Its middleware architecture made it straightforward to implement:

- Authentication
- Authorization
- Validation
- Error handling
- Request logging

without tightly coupling these concerns to individual routes.

---

## MongoDB Atlas

MongoDB Atlas was selected because the application's data naturally fits a document-oriented database.

The Issue and Activity collections evolve independently and benefit from MongoDB's schema flexibility while still maintaining structure through Mongoose schemas.

Using Atlas also simplified deployment by providing a managed cloud database.

---

## Mongoose

Mongoose introduces structure on top of MongoDB through:

- Schema validation
- Relationships
- Middleware
- Model abstraction
- Index support

This improves consistency throughout the application while retaining MongoDB's flexibility.

---

## JWT Authentication

JWT authentication provides a stateless authentication mechanism that integrates naturally with REST APIs.

This avoids maintaining server-side sessions while allowing authenticated requests across distributed deployments.

---

## Socket.IO

Socket.IO was selected to support real-time issue updates.

Rather than polling the server repeatedly, connected clients receive updates immediately after issue modifications, reducing unnecessary network traffic while improving the user experience.

---

## Swagger

Swagger was included to provide interactive API documentation.

Instead of maintaining separate documentation manually, API specifications remain synchronized with the implementation, simplifying testing and future maintenance.

---

# Project Architecture

The application follows a classic client-server architecture with a clear separation between presentation, business logic, and data persistence.

```

```
                     Browser

                         │

                         ▼

                 React Frontend

                         │

                REST API / WebSocket

                         │

                         ▼

                 Express Backend

                         │

      Authentication & Authorization

                         │

                         ▼

                  Controllers

                         │

                         ▼

                    Services

                         │

                         ▼

                 Mongoose Models

                         │

                         ▼

                  MongoDB Atlas

```

The frontend communicates exclusively through REST endpoints and WebSocket events. Business logic remains entirely within the backend, allowing both applications to evolve independently.

---

# Request Lifecycle

Every request follows the same processing pipeline.

```

Browser

↓

React Component

↓

Service Layer

↓

Axios

↓

REST Endpoint

↓

Authentication Middleware

↓

Authorization Middleware

↓

Validation Middleware

↓

Controller

↓

Service

↓

Database

↓

Standardized API Response

↓

React Query Cache

↓

UI Update

```

This layered approach ensures responsibilities remain isolated, improving maintainability and simplifying debugging.

---

# Architectural Principles

Several engineering principles guided the implementation of this application.

---

## Separation of Concerns

Each layer has a single responsibility.

The frontend is responsible for presentation and user interaction.

The backend is responsible for authentication, business rules, validation, persistence, and API responses.

This separation reduces coupling and allows independent evolution of both applications.

---

## Thin Controllers

Controllers intentionally contain minimal logic.

Their responsibilities are limited to:

- Reading requests
- Invoking services
- Returning responses

Keeping controllers lightweight improves readability and simplifies testing.

---

## Service Layer

The service layer contains the application's business rules.

Examples include:

- User authentication
- Issue creation
- Dashboard statistics
- Activity history generation

Centralizing business logic prevents duplication and allows services to be reused across multiple controllers.

---

## Reusable Components

The frontend is composed of reusable UI components.

Examples include:

- Cards
- Buttons
- Forms
- Dialogs
- Tables
- Skeleton loaders
- Navigation

Reusable components reduce duplicated code while improving consistency across the application.

---

## API Standardization

Every API endpoint follows a consistent response structure.

Standardized responses simplify frontend error handling and reduce conditional logic throughout the application.

---

## Validation First

All incoming requests are validated before reaching the application's business logic.

This prevents invalid data from propagating into the database and provides clients with meaningful validation feedback.

---

## Why This Architecture?

The architecture was intentionally designed to support long-term maintainability rather than only satisfying the assessment requirements.

Key benefits include:

- Clear module boundaries
- Improved scalability
- Easier testing
- Better code reuse
- Simpler onboarding for future contributors
- Reduced coupling
- Easier feature expansion

Future functionality—including notifications, comments, file attachments, analytics, and additional issue workflows—can be introduced with minimal refactoring because responsibilities are already well separated.


# Project Structure

The project is organized as a monorepo containing independent frontend and backend applications. This separation enables each application to be developed, tested, and deployed independently while communicating through a well-defined REST API.

```text
issue-tracker/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── sockets/
│   │   ├── swagger/
│   │   ├── tests/
│   │   ├── utils/
│   │   ├── validators/
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── layouts/
│   │   ├── lib/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── .env.example
│
├── README.md
└── .gitignore
```

---

# Folder Responsibilities

## Backend

### config/

Contains centralized application configuration including:

- Database connection
- Environment configuration
- Swagger configuration
- Socket.IO configuration

Keeping configuration isolated makes deployment across different environments significantly easier.

---

### controllers/

Controllers receive validated HTTP requests and coordinate the application's response.

Responsibilities include:

- Receiving requests
- Calling service methods
- Returning standardized responses

Business logic intentionally remains outside controllers.

---

### middleware/

Contains reusable middleware shared across multiple routes.

Examples include:

- JWT Authentication
- Role Authorization
- Global Error Handling
- Request Validation

This prevents duplicated logic across endpoints.

---

### models/

Contains Mongoose schemas representing the application's collections.

Current models include:

- User
- Issue
- Activity

Models define:

- Fields
- Relationships
- Validation
- Indexes
- Timestamps

---

### services/

Contains the application's business rules.

Examples include:

- Authentication
- Dashboard statistics
- CRUD operations
- Activity logging

Keeping business logic inside services improves maintainability and simplifies testing.

---

### validators/

Contains Zod schemas used to validate incoming requests before business logic executes.

This reduces runtime errors and ensures consistent validation throughout the application.

---

### sockets/

Responsible for broadcasting real-time issue updates using Socket.IO.

Keeping socket logic isolated prevents unnecessary coupling with REST controllers.

---

### swagger/

Contains OpenAPI configuration used to generate interactive API documentation.

---

### tests/

Contains automated backend tests written using Jest and Supertest.

Current tests focus primarily on validating core backend functionality.

---

## Frontend

### api/

Contains the centralized Axios configuration.

Responsibilities include:

- Base URL configuration
- Authentication configuration
- Request handling
- Response handling

---

### components/

Reusable UI components.

Examples include:

- Buttons
- Cards
- Forms
- Dialogs
- Tables
- Navigation
- Skeleton loaders

This reduces duplication while maintaining consistent styling.

---

### hooks/

Contains reusable React hooks responsible for encapsulating application logic.

Examples include:

- Authentication
- Dashboard queries
- Issue queries
- Activity history

---

### layouts/

Shared layouts used across authenticated pages.

Examples include:

- Sidebar
- Header
- Navigation

---

### pages/

Represents complete application screens.

Examples include:

- Login
- Register
- Dashboard
- Issues
- Issue Details

---

### services/

Contains all HTTP communication with backend endpoints.

Components never communicate directly with Axios.

This abstraction makes future API changes easier to implement.

---

### utils/

Contains reusable helper functions.

Examples include:

- Date formatting
- Status formatting
- Common helper methods

---

# Why This Folder Structure?

The project was intentionally organized around **responsibility** instead of file type.

This approach provides several advantages:

- Easier maintenance
- Better scalability
- Reduced coupling
- Improved readability
- Clear ownership of code
- Simpler onboarding for future developers

As the project grows, additional modules can be introduced without restructuring the existing application.

---

# Database Design

The application currently uses three primary collections.

User (1) ────────────< Issue >──────────── (1) Activity

## User

Stores authentication and authorization information.

```text
User

├── id
├── name
├── email
├── password (hashed)
├── role
├── createdAt
└── updatedAt
```

---

## Issue

Represents an individual issue.

```text
Issue

├── id
├── title
├── description
├── status
├── priority
├── assignee
├── createdBy
├── dueDate
├── createdAt
└── updatedAt
```

Indexes are applied where appropriate to improve filtering and lookup performance.

---

## Activity

Provides an audit trail for issue changes.

```text
Activity

├── id
├── issueId
├── userId
├── action
├── previousValue
├── newValue
├── timestamp
```

Rather than storing historical changes inside the Issue document, a dedicated Activity collection was introduced.

This design keeps Issue documents lightweight while preserving a complete change history.

---

# Entity Relationships

```text
User

│

├───────────────┐

│               │

▼               ▼

Issue       Activity

│

▼

Activity
```

A single user may create many issues.

Each issue may generate many activity records throughout its lifecycle.

This normalized structure improves scalability and simplifies querying.

---

# Authentication Flow

Authentication follows a stateless JWT-based approach.

```text
Register

↓

Validate Input

↓

Hash Password

↓

Store User

↓

Login

↓

Validate Credentials

↓

Generate JWT

↓

Return Authentication Cookie

↓

Protected Route

↓

Verify JWT

↓

Authorize User

↓

Access Granted
```

Passwords are never stored in plaintext.

Every protected endpoint verifies the JWT before allowing access.

Role-based middleware performs authorization checks after successful authentication.

---

# Installation

## Clone the Repository

```bash
git clone https://github.com/Bello1964/issue-tracker.git

cd issue-tracker
```

---

## Backend Setup

```bash
cd backend

npm install
```

---

## Frontend Setup

```bash
cd frontend

npm install
```

---

# Environment Variables

## Backend (.env)

```env
PORT=

NODE_ENV=

CLIENT_URL=

JWT_SECRET=

JWT_EXPIRES_IN=

MONGODB_URIs=

MONGODB_URIl=

EMAIL_HOST=

EMAIL_PORT=

EMAIL_USER=

EMAIL_PASS=

EMAIL_FROM=
```

> **Note:** Email configuration variables have been included to support future notification features. Email notifications themselves are not yet implemented on the frontend but already configured in the backend.

---

## Frontend (.env)

```env
VITE_SERVER_URL=
```

---

# Running the Project

## Backend

```bash
npm run dev
```

---

## Frontend

```bash
npm run dev
```

The frontend will connect to the configured backend API using the value supplied through `VITE_SERVER_URL`.


# API Documentation

The backend exposes a RESTful API that follows consistent naming conventions and standardized response structures.

Interactive API documentation is available through Swagger.

**Swagger URL**

```
https://issue-tracker-2shr.onrender.com/api/docs
```

---

## Authentication Endpoints

| Method | Endpoint | Description |
|---------|-----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Authenticate an existing user |
| POST | `/api/auth/logout` | Logout authenticated user |
| GET | `/api/auth/me` | Retrieve currently authenticated user |

---

## Dashboard Endpoints

| Method | Endpoint | Description |
|---------|-----------|-------------|
| GET | `/api/issues/stats` | Retrieve dashboard statistics |

---

## Issue Endpoints

| Method | Endpoint | Description |
|---------|-----------|-------------|
| GET | `/api/issues` | Retrieve paginated issues |
| GET | `/api/issues/:id` | Retrieve a single issue |
| POST | `/api/issues` | Create a new issue |
| PATCH | `/api/issues/:id` | Update an issue |
| DELETE | `/api/issues/:id` | Delete an issue |

---

## Activity Endpoints

| Method | Endpoint | Description |
|---------|-----------|-------------|
| GET | `/api/issues/:id/activities` | Retrieve issue activity history |

---

# API Response Structure

Every endpoint follows a standardized response format.

Successful responses:

```json
{
  "success": true,
  "message": "Operation completed successfully.",
  "data": {}
}
```

Validation errors:

```json
{
  "success": false,
  "message": "Validation failed.",
  "errors": {}
}
```

Unexpected errors:

```json
{
  "success": false,
  "message": "Internal Server Error"
}
```

Using a consistent response structure simplifies frontend development because every request can be handled using the same response pattern.

---

# Engineering Decisions

One of the primary objectives of this project was to demonstrate sound software engineering practices rather than simply implementing CRUD functionality.

Every major architectural decision was therefore made deliberately with maintainability, scalability, and developer experience in mind.

---

## Why a Layered Backend Architecture?

Instead of placing database queries directly inside route handlers, the backend follows a layered architecture consisting of:

```
Routes

↓

Middleware

↓

Controllers

↓

Services

↓

Models
```

This separation provides several advantages:

- Easier testing
- Reduced code duplication
- Better readability
- Easier debugging
- Independent business logic
- Improved maintainability

Controllers remain intentionally lightweight while services own the application's business rules.

As the application grows, new features can be introduced without affecting existing layers.

---

## Why React Query Instead of Redux?

Although Redux is a powerful state management solution, the majority of application state in this project originates from the backend.

TanStack Query was therefore selected because it is specifically designed for server state.

Benefits include:

- Automatic caching
- Background synchronization
- Built-in loading states
- Automatic retries
- Query invalidation
- Optimistic updates

This reduced boilerplate considerably while improving responsiveness.

---

## Why MongoDB?

MongoDB was selected because the application's data naturally fits a document-oriented model.

Examples include:

- Issues
- Activities
- Users

MongoDB also enabled rapid development without sacrificing scalability.

Combined with Mongoose, it provides:

- Validation
- Relationships
- Indexing
- Middleware
- Schema abstraction

MongoDB Atlas further simplified deployment by providing a managed cloud database.

---

## Why Mongoose?

Using Mongoose introduced several advantages:

- Strong schema validation
- Timestamp management
- Model abstraction
- Middleware
- Index management
- Cleaner database interactions

It also reduced repetitive MongoDB code while improving consistency.

---

## Why JWT Authentication?

JWT provides stateless authentication.

Benefits include:

- Scalability
- Simpler deployments
- REST API compatibility
- Reduced server-side session management

JWT authentication also integrates naturally with frontend applications communicating through APIs.

---

## Why Role-Based Authorization?

Authentication identifies users.

Authorization determines what those users are allowed to do.

Separating these responsibilities makes the application easier to extend.

Future roles such as:

- Project Manager
- Team Lead
- Read-only User

could be introduced with minimal code changes.

---

## Why Socket.IO?

Rather than forcing clients to repeatedly poll the server, Socket.IO broadcasts updates whenever issues change.

Advantages include:

- Reduced network requests
- Immediate synchronization
- Better collaboration
- Improved user experience

Real-time communication was intentionally limited to issue updates to keep implementation focused while still demonstrating event-driven architecture.

---

## Why Zod?

Validation is performed using Zod because it offers:

- Runtime validation
- Clear error messages
- Readable schemas
- Strong developer experience

Validating requests before reaching business logic significantly reduces runtime failures.

---

## Why Axios?

Axios centralizes HTTP communication.

Benefits include:

- Consistent configuration
- Shared interceptors
- Centralized error handling
- Cleaner service modules

This prevents API logic from becoming tightly coupled with React components.

---

## Why Skeleton Loading?

Skeleton loading was chosen instead of generic loading spinners because it improves perceived performance.

Users immediately see the page layout while content is loading, making the application feel significantly faster.

---

## Why Optimistic Updates?

Optimistic updates immediately reflect user actions before waiting for server confirmation.

This dramatically improves perceived responsiveness while React Query handles cache synchronization once the server responds.

Should a request fail, the UI is automatically rolled back to its previous state.

---

## Why Standardized API Responses?

Every endpoint returns responses using the same structure.

Advantages include:

- Simpler frontend logic
- Consistent error handling
- Easier debugging
- Predictable API behaviour

Developers consuming the API can process every response using the same pattern.

---

## Why Activity History?

Instead of overwriting issue information silently, every significant change is recorded in a dedicated Activity collection.

This provides:

- Traceability
- Accountability
- Historical context
- Future reporting capabilities

Separating activities from issues also keeps Issue documents lightweight.

---

## Why Swagger?

Swagger was included because documentation should evolve together with the API.

Interactive documentation reduces onboarding time for developers while allowing endpoints to be explored without external tools.

This improves maintainability compared to manually written documentation.

---

## Why This Overall Architecture?

The architecture prioritizes:

- Separation of concerns
- Maintainability
- Scalability
- Testability
- Reusability

Rather than optimizing solely for rapid feature delivery, the project emphasizes clean code and long-term maintainability.

This aligns closely with real-world production software development where code quality is just as important as functionality.


# Performance Optimizations

Although the application was developed within a limited assessment timeline, several optimizations were implemented to improve responsiveness, scalability, and overall user experience.

---

## Server-Side Pagination

Issue retrieval uses server-side pagination rather than loading every record at once.

Advantages include:

- Reduced payload sizes
- Faster response times
- Lower memory consumption
- Better scalability for large datasets

---

## Database Indexing

Indexes were added to frequently queried fields to improve lookup performance.

Examples include fields commonly used for:

- Status filtering
- Priority filtering
- User lookups

Proper indexing reduces collection scans and significantly improves query execution time.

---

## Lean Database Queries

Where appropriate, Mongoose's `lean()` queries are used to avoid creating full Mongoose document instances when only plain JavaScript objects are required.

Benefits include:

- Reduced memory usage
- Faster query execution
- Improved API performance

---

## React Query Caching

TanStack Query automatically caches server responses.

This provides:

- Reduced API calls
- Faster page navigation
- Background synchronization
- Automatic cache invalidation

Caching improves responsiveness while reducing unnecessary requests to the backend.

---

## Optimistic Updates

Optimistic updates immediately reflect successful user actions before waiting for the server response.

Benefits include:

- Reduced perceived latency
- Faster interactions
- Improved user experience

If a request fails, React Query restores the previous state to maintain consistency.

---

## Skeleton Loading

Skeleton components were implemented instead of traditional loading spinners.

This approach improves perceived performance by allowing users to visualize page structure while content is loading.

---

## Standardized API Responses

Using a consistent API response format simplifies frontend logic and reduces repetitive error handling.

It also improves debugging and maintainability.

---

## Modular Component Design

Reusable React components minimize unnecessary rendering and reduce duplicated UI logic.

This improves long-term maintainability while encouraging code reuse.

---

# Security Considerations

Security was treated as a fundamental design requirement throughout development.

---

## Password Hashing

User passwords are hashed using bcrypt before storage.

Plaintext passwords are never stored within the database.

---

## JWT Authentication

Protected endpoints require a valid JWT before access is granted.

Unauthenticated requests are rejected before reaching business logic.

---

## Role-Based Authorization

Authentication verifies user identity.

Authorization determines whether the authenticated user is permitted to perform a requested action.

Separating these concerns improves flexibility and future scalability.

---

## Request Validation

Incoming requests are validated using Zod before reaching business logic.

This protects the application from malformed or unexpected input.

---

## Environment Variables

Sensitive configuration values are stored in environment variables rather than committed to source control.

Examples include:

- JWT Secret
- MongoDB connection strings
- Email configuration
- Client URL

This reduces the likelihood of accidentally exposing sensitive credentials.

---

## Error Handling

Unexpected errors are handled through centralized middleware.

Clients receive standardized error responses while preventing internal implementation details from being exposed.

---

## CORS Configuration

Cross-Origin Resource Sharing (CORS) is configured to allow communication between the deployed frontend and backend while restricting unauthorized origins.

---

# Challenges Encountered

Developing and deploying a full-stack application inevitably introduced several real-world challenges. Addressing these challenges provided valuable insight into production deployment, browser security, dependency management, and feature prioritization.

---

## Cross-Origin Authentication (SameSite Cookies)

One of the most significant deployment challenges involved browser cookie policies when the frontend and backend were deployed on different origins.

Modern browsers enforce strict security policies around cross-site cookies, particularly the `SameSite` and `Secure` cookie attributes.

This resulted in authentication behaving differently in production than during local development.

Resolving this issue required:

- Reviewing browser cross-origin security policies.
- Correctly configuring cookie attributes for a deployed environment.
- Updating CORS configuration.
- Ensuring frontend requests included credentials.

Although initially challenging, resolving this issue significantly improved my understanding of browser security, authentication flows, and production deployment considerations.

---

## Node.js Runtime Compatibility

During development, dependency compatibility issues were encountered while using Node.js 18.

To ensure compatibility with the project's dependency versions and deployment environment, the application was standardized on **Node.js 24**.

Using a consistent runtime across development and deployment environments reduced unexpected behaviour and simplified troubleshooting.

---

## Deployment

Deploying frontend and backend services independently introduced additional considerations compared to local development.

Examples included:

- Environment variable management.
- API endpoint configuration.
- Database connectivity.
- Cross-origin communication.
- Production debugging.

Successfully deploying the application provided valuable experience in configuring production-ready full-stack applications.

---

## Feature Prioritization

Given the limited assessment timeline, implementation decisions were guided by impact rather than feature count.

Priority was given to:

- Backend architecture
- Authentication
- REST API design
- Activity history
- Swagger documentation
- WebSocket integration
- Optimistic UI
- Responsive interface

Lower-priority usability improvements were intentionally deferred.

For example, while the registration page is fully implemented, a direct navigation link from the login page was not added before submission. New users can still register by visiting the `/register` route directly.

This decision allowed development effort to remain focused on core engineering functionality rather than a minor navigational enhancement.

---

# Assumptions

Several assumptions were made during development.

- Users register with a unique email address.
- Authentication is required before accessing protected resources.
- Users are trusted to manage only authorized resources.
- MongoDB Atlas provides database availability.
- Frontend and backend communicate over HTTPS in production.
- Email configuration is reserved for future notification functionality.

---

# Trade-offs

Every software project involves balancing functionality, quality, and available development time.

Several deliberate trade-offs were made during implementation.

---

## Docker

Docker support was planned but intentionally deferred.

Priority was instead placed on completing the core application architecture and deploying a stable production version.

The application's current structure has been organized so Docker support can be introduced with minimal changes.

---

## Automated Testing

Backend unit testing was implemented using Jest and Supertest.

However, comprehensive integration and end-to-end testing were deferred due to time constraints.

Given additional development time, test coverage would be expanded significantly.

---

## Infinite Scrolling

Infinite scrolling was considered during development.

Traditional pagination was ultimately retained because it provides predictable navigation while satisfying the assessment requirements.

---

## Dark Mode

Dark mode was evaluated but intentionally deprioritized.

Development effort was instead allocated toward implementing higher-impact engineering features including:

- Activity History
- WebSocket Updates
- Swagger Documentation
- Role-Based Authorization
- Optimistic UI

---

## Email Notifications

The project already includes email-related environment configuration.

The notification infrastructure was intentionally left for future implementation after completion of the application's core functionality.

---

# Lessons Learned

This project reinforced several important software engineering principles.

---

## Architecture Matters Early

Investing time in establishing a clean architecture early significantly reduced refactoring later in development.

Separating controllers, services, models, and reusable frontend components resulted in a more maintainable codebase.

---

## Validation Should Exist at Every Layer

Client-side validation improves user experience.

Server-side validation protects the application.

Both are necessary.

---

## Deployment Is Part of Development

Local development represents only one stage of the software lifecycle.

Successfully deploying a production application requires understanding:

- Environment configuration
- Browser security policies
- Cross-origin communication
- Runtime compatibility
- Cloud databases

---

## Documentation Improves Maintainability

Maintaining Swagger documentation and a comprehensive README makes the project significantly easier to understand for future contributors.

Good documentation should be treated as part of the software rather than an afterthought.

---

## Engineering Is About Prioritization

Given limited development time, implementing every possible feature was neither realistic nor desirable.

Instead, priority was given to architectural quality, maintainability, security, and core functionality.

This experience reinforced that successful software engineering is often about making informed trade-offs rather than maximizing feature count.


# Future Improvements

Although the current implementation satisfies the core assessment requirements and demonstrates production-oriented engineering practices, several enhancements have been identified for future iterations.

## Planned Features

### Docker Support

The project architecture has been structured to support containerization.

Future work includes:

- Dockerfile for frontend
- Dockerfile for backend
- Docker Compose configuration
- Production container deployment

Containerization would simplify local development, testing, and deployment consistency.

---

### Expanded Automated Testing

The current backend includes unit tests using Jest and Supertest.

Future work would expand testing to include:

- Integration Tests
- End-to-End (E2E) Tests
- Frontend Component Tests
- UI Testing
- API Performance Testing

Increasing automated test coverage would improve long-term reliability and reduce regression risk.

---

### Email Notifications

The backend already includes email configuration through environment variables.

Future enhancements include notifications for:

- Issue Assignment
- Due Date Reminders
- Status Changes
- Newly Created Issues

---

### Improved User Experience

Additional UI improvements include:

- Direct registration link from the login page
- Dark mode
- Infinite scrolling
- Advanced filtering
- Saved searches
- Keyboard shortcuts

---

### Additional Issue Features

Future versions could support:

- Comments
- File attachments
- Labels
- Tags
- Projects
- Teams
- Notifications
- Watchers

---

### Analytics

Potential reporting features include:

- Team productivity
- Average issue resolution time
- Issue trends
- User activity
- Monthly reports

---

# Bonus Features Implemented

The following bonus features were successfully completed beyond the core CRUD requirements.

| Feature | Status |
|----------|--------|
| JWT Authentication | configured |
| Role-Based Authorization | configured |
| Swagger/OpenAPI Documentation | configured |
| Activity History (Audit Log) | configured |
| Real-Time Updates (Socket.IO) | configured |
| Optimistic UI Updates | configured |
| Skeleton Loading States | configured |
| Responsive Design | configured |
| Backend Unit Testing | configured |
| Standardized API Responses | configured |
| MongoDB Indexing | configured |
| Lean Mongoose Queries | configured |

---

# Screenshots

The following screenshots will soon be added.

## Login Page

> *(Insert Screenshot)*

---

## Dashboard

> *(Insert Screenshot)*

---

## Issues Page

> *(Insert Screenshot)*

---

## Issue Details

> *(Insert Screenshot)*

---

## Swagger Documentation

> *(Insert Screenshot)*

---

# Conclusion

The Mini Issue Tracking System was developed to demonstrate more than the ability to implement CRUD operations.

Throughout the project, emphasis was placed on:

- Clean architecture
- Separation of concerns
- Secure authentication
- RESTful API design
- Reusable frontend components
- Maintainable backend services
- Real-time communication
- Comprehensive validation
- Performance optimization
- Clear documentation

The project also provided valuable practical experience deploying a full-stack application, configuring cloud-hosted services, resolving cross-origin authentication challenges, and making informed engineering trade-offs within a constrained development timeline.

Rather than maximizing the number of implemented features, priority was given to building a maintainable and extensible foundation that reflects real-world software engineering practices.

The resulting application demonstrates not only functional correctness but also thoughtful architectural decisions intended to support future growth and maintainability.

---

# License

This project is licensed under the MIT License.

---

# Author

**Bello Dahood**

GitHub: https://github.com/Bello1964

Project Repository:

https://github.com/Bello1964/issue-tracker

---

# Acknowledgements

This project was completed as part of a Full Stack Developer technical assessment.

It incorporates widely adopted open-source technologies including:

- React
- Node.js
- Express.js
- MongoDB Atlas
- TanStack Query
- Socket.IO
- Swagger/OpenAPI
- Tailwind CSS
- shadcn/ui
- Jest
- Supertest

The project also benefited from extensive review of official documentation and community best practices for authentication, API design, frontend architecture, and database modelling.

---

## Final Notes for Reviewers

During development, emphasis was placed on writing maintainable, production-oriented code rather than implementing features in isolation.

Several implementation decisions—including layered architecture, standardized API responses, reusable frontend components, optimistic updates, audit logging, and comprehensive validation—were made deliberately to improve scalability, readability, and long-term maintainability.

Some lower-priority enhancements, such as Docker support, complete automated test coverage, dark mode, infinite scrolling, and a direct registration link from the login page, were intentionally deferred in order to prioritize core functionality, architectural quality, and successful production deployment within the available assessment timeline.

One particularly valuable learning experience involved resolving browser `SameSite` cookie behaviour and cross-origin authentication issues after deploying the frontend and backend on separate origins. Addressing these challenges reinforced the importance of understanding browser security policies, CORS configuration, and production deployment considerations.

Feedback on both the implementation and architectural decisions is sincerely welcomed, and I appreciate the opportunity to complete this assessment.