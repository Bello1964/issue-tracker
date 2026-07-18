# Mini Issue Tracking System

> A production-oriented full-stack issue tracking application built to demonstrate modern software engineering practices, scalable architecture, secure authentication, and responsive user experience.

![Node.js](https://img.shields.io/badge/Node.js-22.x-green)
![React](https://img.shields.io/badge/React-19-blue)
![Express](https://img.shields.io/badge/Express-5.x-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## Live Demo

### Frontend

> https://YOUR_FRONTEND_DEPLOYMENT_URL

### Backend API

> https://YOUR_BACKEND_DEPLOYMENT_URL

### Swagger API Documentation

> https://YOUR_BACKEND_DEPLOYMENT_URL/api/docs

---

## GitHub Repository

https://github.com/Bello1964/issue-tracker

---

# Project Overview

The **Mini Issue Tracking System** is a modern full-stack web application that enables authenticated users to create, organize, update, and monitor software issues throughout their lifecycle.

The project was developed as part of a Full Stack Developer technical assessment with a strong emphasis on software engineering principles rather than simply implementing CRUD operations. The objective was to design a maintainable, scalable, and production-ready application that demonstrates best practices across frontend development, backend architecture, database design, authentication, API design, and performance optimization.

Unlike a traditional CRUD application, this project focuses on building a system that resembles real-world production software by incorporating:

- Secure JWT-based authentication
- Role-based authorization
- RESTful API design
- Modular backend architecture
- Responsive frontend
- Activity history (audit logging)
- Optimistic UI updates
- Real-time issue updates using WebSockets
- Swagger/OpenAPI documentation
- Backend unit testing
- Consistent API response structure
- Pagination and efficient database querying
- Comprehensive validation and error handling

The application follows a clean separation of concerns, where the frontend consumes a REST API exposed by the backend. Business logic is isolated from routing, database interactions are abstracted through models and services, and reusable UI components keep the frontend maintainable as the application grows.

Although developed within a limited assessment timeline, the project was intentionally structured to allow future enhancements—including Docker support, CI/CD, email notifications, advanced analytics, and additional collaboration features—without requiring significant architectural changes.

---

## Assessment Objectives Covered

✔ User Authentication

✔ Dashboard Analytics

✔ Full Issue CRUD

✔ Search, Filtering & Pagination

✔ REST API Design

✔ MongoDB Database Design

✔ Responsive Frontend

✔ Input Validation

✔ Error Handling

✔ Performance Optimization

✔ Documentation

---

## Bonus Features Implemented

- JWT Authentication
- Role-Based Authorization
- Swagger / OpenAPI Documentation
- Activity History (Audit Log)
- Optimistic UI Updates
- Real-time Updates using WebSockets
- Backend Unit Testing

> **Note**
>
> Features such as Docker support, Dark Mode, and Infinite Scrolling were intentionally deferred to prioritize the implementation of core functionality and higher-impact engineering features within the project timeline. The existing architecture has been designed to support these enhancements with minimal refactoring.


# Features

The Mini Issue Tracking System provides a complete workflow for managing issues while demonstrating production-ready software engineering practices.

## Authentication & Authorization

- User registration
- Secure user login
- JWT-based authentication
- Password hashing using bcrypt
- Protected API routes
- Role-Based Access Control (RBAC)
- Persistent authenticated sessions

---

## Dashboard

The dashboard provides a high-level overview of the current project state by displaying:

- Total Issues
- Open Issues
- Closed Issues
- Overdue Issues

Dashboard statistics are generated dynamically from the database to ensure the displayed information always reflects the latest application state.

---

## Issue Management

Authenticated users can:

- Create Issues
- View Issue Details
- Edit Existing Issues
- Delete Issues
- Assign Issues
- Set Due Dates
- Update Priority
- Update Status

Each issue contains:

- Title
- Description
- Status
- Priority
- Assignee
- Due Date
- Created Date
- Last Updated Date

---

## Search, Filtering & Pagination

To improve usability and scalability, the application supports:

- Search by title
- Filter by status
- Filter by priority
- Sort by newest
- Sort by oldest
- Server-side pagination

Filtering operations are performed on the backend to reduce unnecessary network traffic and improve performance when working with large datasets.

---

## Activity History

Every significant modification to an issue is recorded within an activity log.

Tracked activities include:

- Issue Creation
- Updates
- Status Changes
- Priority Changes
- Assignee Changes
- Issue Deletion

This provides a lightweight audit trail that improves transparency and allows users to understand how an issue has evolved over time.

---

## Real-Time Updates

The application uses WebSockets (Socket.IO) to broadcast issue updates.

When an issue is modified:

- Connected clients receive updates immediately.
- The interface refreshes without requiring a manual reload.
- Users always interact with the latest available data.

---

## Optimistic User Experience

To improve perceived performance, optimistic updates are used throughout the application.

Examples include:

- Immediate UI updates before server confirmation
- Skeleton loading components during data fetching
- Loading indicators for asynchronous operations
- Graceful error recovery when requests fail

This approach significantly reduces perceived latency while maintaining data consistency.

---

## API Documentation

Interactive API documentation is available through Swagger/OpenAPI.

Developers can:

- Explore endpoints
- Inspect request schemas
- Test endpoints directly from the browser
- Review authentication requirements

This simplifies onboarding and API integration for future contributors.

---

# Technology Stack

The project uses a modern JavaScript technology stack designed around maintainability, scalability, and developer productivity.

## Frontend

| Technology | Purpose |
|------------|---------|
| React 19 | Component-based user interface |
| Vite | Fast development server and optimized production builds |
| React Router | Client-side routing |
| TanStack Query | Server state management, caching and optimistic updates |
| Axios | HTTP client with centralized API configuration |
| Tailwind CSS | Utility-first styling |
| shadcn/ui | Accessible and reusable UI components |
| Radix UI | Unstyled accessible primitives |
| Lucide React | Consistent icon library |

---

## Backend

| Technology | Purpose |
|------------|---------|
| Node.js | JavaScript runtime |
| Express.js | REST API framework |
| MongoDB | NoSQL database |
| Mongoose | Schema modelling and database abstraction |
| JWT | Stateless authentication |
| bcrypt | Secure password hashing |
| Zod | Request validation |
| Socket.IO | Real-time communication |
| Swagger/OpenAPI | Interactive API documentation |

---

## Testing

Backend testing is implemented using:

| Technology | Purpose |
|------------|---------|
| Jest | Unit testing framework |
| Supertest | HTTP endpoint testing |

The existing test suite focuses primarily on validating critical backend functionality. Additional integration and end-to-end tests are planned as future enhancements.

---

## Development Tools

- Git
- GitHub
- npm
- ESLint
- Prettier
- Visual Studio Code

---

# Why These Technologies?

Rather than selecting technologies based solely on popularity, each was chosen to address a specific engineering requirement.

- **React** was selected for its component-based architecture, enabling reusable and maintainable user interfaces.

- **TanStack Query** was preferred over traditional global state libraries because server state differs fundamentally from client state. It provides caching, background synchronization, automatic refetching, and optimistic updates with minimal boilerplate.

- **Express.js** offers a lightweight and flexible framework for designing RESTful APIs while maintaining a clean separation between routing, business logic, and data access.

- **MongoDB** was chosen because its document-oriented model naturally represents issue data while allowing rapid iteration during development.

- **Mongoose** introduces schema validation, middleware support, and a structured data model without sacrificing MongoDB's flexibility.

- **JWT Authentication** enables stateless authentication that scales efficiently and integrates seamlessly with REST APIs.

- **Socket.IO** provides reliable real-time communication for broadcasting issue updates without requiring clients to continuously poll the server.

- **Swagger/OpenAPI** improves developer experience by generating interactive documentation directly from the application's API definitions.

Collectively, these technologies provide a balance between development speed, maintainability, scalability, and production readiness while remaining appropriate for the project's assessment timeline.


# Project Architecture

The Mini Issue Tracking System follows a client-server architecture that separates presentation, business logic, and data persistence into independent layers.

```
                        ┌─────────────────────┐
                        │      React UI       │
                        │  (Frontend Client)  │
                        └──────────┬──────────┘
                                   │
                          HTTP / WebSocket
                                   │
                                   ▼
                        ┌─────────────────────┐
                        │    Express Server   │
                        │   REST API Layer    │
                        └──────────┬──────────┘
                                   │
                      Authentication Middleware
                                   │
                      Authorization Middleware
                                   │
                                   ▼
                        ┌─────────────────────┐
                        │   Controllers       │
                        └──────────┬──────────┘
                                   │
                                   ▼
                        ┌─────────────────────┐
                        │     Services        │
                        └──────────┬──────────┘
                                   │
                                   ▼
                        ┌─────────────────────┐
                        │   Mongoose Models   │
                        └──────────┬──────────┘
                                   │
                                   ▼
                        ┌─────────────────────┐
                        │      MongoDB        │
                        └─────────────────────┘
```

The frontend communicates with the backend exclusively through RESTful API endpoints and WebSocket events. Business logic remains isolated within the backend, ensuring the frontend is responsible only for presentation and user interaction.

---

# Architectural Principles

Several architectural principles guided the implementation of this project.

## Separation of Concerns

Each layer of the application has a clearly defined responsibility.

### Frontend

Responsible for:

- Rendering the user interface
- User interaction
- Routing
- Client-side validation
- Server state management

The frontend does **not** contain business logic or database knowledge.

---

### Backend

Responsible for:

- Authentication
- Authorization
- Validation
- Business rules
- Database interaction
- API responses
- Real-time event broadcasting

This separation improves maintainability and allows either application to evolve independently.

---

# Backend Architecture

The backend follows a layered architecture.

```
Request

↓

Route

↓

Middleware

↓

Controller

↓

Service

↓

Model

↓

MongoDB

↓

Response
```

Each layer has a single responsibility.

## Routes

Routes define available API endpoints.

Responsibilities include:

- URL mapping
- Middleware registration
- Controller delegation

Routes intentionally contain no business logic.

---

## Middleware

Middleware handles cross-cutting concerns shared across multiple endpoints.

Examples include:

- JWT authentication
- Role authorization
- Request validation
- Error handling

Keeping these concerns within middleware reduces code duplication across controllers.

---

## Controllers

Controllers receive validated requests and coordinate application flow.

Responsibilities include:

- Reading request data
- Calling services
- Returning standardized responses

Controllers intentionally remain lightweight and do not directly manipulate database models.

---

## Services

Services contain the core business logic.

Examples include:

- Creating issues
- Updating issue status
- Recording activity history
- User authentication
- Dashboard statistics

This layer centralizes application rules and makes the codebase easier to test and extend.

---

## Models

Mongoose models define how application data is stored.

Responsibilities include:

- Schema definition
- Field validation
- Database interaction
- Relationships between collections

Using models provides consistency across the application while leveraging MongoDB's flexibility.

---

# Frontend Architecture

The frontend is organized around reusable components and feature-based organization.

Major layers include:

```
Pages

↓

Components

↓

Hooks

↓

Services

↓

REST API
```

## Pages

Pages represent complete application screens.

Examples include:

- Login
- Register
- Dashboard
- Issues
- Issue Details

Pages orchestrate components but avoid implementing reusable business logic.

---

## Components

Components encapsulate reusable user interface elements such as:

- Cards
- Tables
- Forms
- Dialogs
- Navigation
- Buttons
- Status badges

This minimizes duplication and ensures consistent styling throughout the application.

---

## Custom Hooks

Custom hooks encapsulate reusable application logic.

Examples include:

- Fetching issues
- Authentication
- Dashboard statistics
- Creating issues
- Updating issues

This keeps page components concise and improves maintainability.

---

## Services

Service modules centralize all HTTP communication with the backend.

Responsibilities include:

- API requests
- Authentication headers
- Error propagation
- Response handling

By isolating HTTP logic, replacing or modifying the API becomes significantly easier.

---

# Why This Architecture?

This architecture was intentionally selected because it promotes:

- Maintainability
- Scalability
- Testability
- Separation of responsibilities
- Code reuse
- Easier debugging
- Independent frontend and backend development

As the application grows, new features can be introduced with minimal impact on existing modules. For example, adding comments, attachments, notifications, or additional issue workflows would primarily involve extending the service and model layers without requiring significant architectural changes.

This modular structure also simplifies onboarding for future contributors, as each directory has a clearly defined responsibility and predictable interaction with the rest of the system.


# Project Structure

The project is organized as a monorepo consisting of independent frontend and backend applications.

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
│   │   ├── store/
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

> **Note:** The structure above highlights the primary application modules. Minor utility files and configuration files have been omitted for brevity.

---

# Backend Directory Breakdown

## `config/`

Contains centralized application configuration.

Examples include:

- Database connection
- Environment configuration
- Swagger configuration
- Socket.IO configuration

Keeping configuration isolated simplifies environment management and reduces duplication.

---

## `controllers/`

Controllers act as the entry point for incoming API requests.

Responsibilities include:

- Receiving HTTP requests
- Validating request flow
- Invoking service methods
- Returning standardized API responses

Controllers intentionally avoid implementing business logic.

---

## `middleware/`

Contains reusable middleware responsible for application-wide concerns.

Examples:

- JWT authentication
- Role authorization
- Global error handling
- Request validation

Using middleware keeps controllers focused solely on request orchestration.

---

## `models/`

Defines the application's MongoDB collections using Mongoose schemas.

Current models include:

- User
- Issue
- Activity

Each model encapsulates schema definitions, validation rules, timestamps, and indexes where appropriate.

---

## `routes/`

Defines every available REST endpoint.

Responsibilities include:

- Endpoint registration
- Middleware composition
- Controller delegation

Keeping routes declarative improves readability and simplifies API maintenance.

---

## `services/`

Contains the application's business logic.

Examples include:

- Authentication
- Dashboard statistics
- Issue management
- Activity logging

Moving business rules into services makes them reusable across controllers and easier to test.

---

## `validators/`

Contains Zod schemas responsible for validating incoming requests before they reach business logic.

This ensures:

- Consistent validation
- Cleaner controllers
- Reduced runtime errors

---

## `swagger/`

Contains the OpenAPI specification and Swagger configuration used to generate interactive API documentation.

---

## `sockets/`

Responsible for configuring Socket.IO and broadcasting real-time issue updates to connected clients.

Keeping WebSocket logic isolated prevents it from becoming tightly coupled with REST controllers.

---

## `tests/`

Contains backend unit and endpoint tests implemented using Jest and Supertest.

Current tests focus on validating critical application functionality, providing a solid foundation for future expansion into integration and end-to-end testing.

---

## `utils/`

Contains shared utility functions used across multiple modules.

Examples include:

- API response formatting
- Error helpers
- Common utility functions

Centralizing utilities avoids duplicated implementation throughout the application.

---

# Frontend Directory Breakdown

## `api/`

Contains the centralized Axios instance responsible for communicating with the backend.

Responsibilities include:

- Base URL configuration
- Authentication headers
- Request interceptors
- Response interceptors

This ensures consistent API communication across the application.

---

## `components/`

Contains reusable UI components.

Examples include:

- Forms
- Cards
- Dialogs
- Navigation
- Buttons
- Badges
- Tables
- Skeleton loaders

Building reusable components promotes consistency and reduces duplicated markup.

---

## `hooks/`

Contains custom React hooks that encapsulate reusable application logic.

Examples include:

- Authentication
- Dashboard queries
- Issue CRUD operations
- Activity history retrieval

Custom hooks reduce duplication and keep page components focused on rendering.

---

## `layouts/`

Defines reusable page layouts shared across multiple routes.

Examples include authenticated layouts containing shared navigation, headers, and sidebars.

---

## `pages/`

Represents complete application screens.

Examples:

- Login
- Register
- Dashboard
- Issues
- Issue Details

Each page composes reusable components rather than implementing UI from scratch.

---

## `routes/`

Centralizes frontend routing.

Responsibilities include:

- Public routes
- Protected routes
- Role-based route protection
- Navigation structure

Keeping routing centralized improves maintainability as the application grows.

---

## `services/`

Contains modules responsible for interacting with backend endpoints.

Separating HTTP logic from components improves maintainability and simplifies testing.

---

## `store/`

Contains lightweight client-side state that is not managed by React Query.

Server state remains the responsibility of TanStack Query.

---

## `utils/`

Contains reusable helper functions used throughout the frontend.

Examples include:

- Date formatting
- String formatting
- Common helper functions

---

# Why This Folder Structure?

The directory organization was intentionally designed around **separation of responsibilities** rather than file type alone.

This structure provides several advantages:

- Clear ownership of application logic
- Improved maintainability
- Easier onboarding for new contributors
- Reduced coupling between modules
- Better scalability as features grow
- Simpler testing due to isolated responsibilities

As additional functionality such as notifications, comments, file attachments, or analytics is introduced, new modules can be integrated into the existing structure without requiring significant refactoring.

This organization supports long-term maintainability while remaining approachable for developers unfamiliar with the project.