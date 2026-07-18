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

https://issue-tracker-2shr.onrender.com

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