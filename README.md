# TaskFlow Frontend

TaskFlow is a task management system built with a Laravel API backend and a Vue 3 Single Page Application (SPA) frontend.

This repository contains the **frontend application**, responsible for the user interface and communication with the backend API.

The frontend consumes the Laravel API and provides a dashboard for managing users and tasks.

---

## Backend Repository

The backend API is implemented with Laravel and available in the following repository:

https://github.com/YousufMahbobi/taskflow-backend

The backend handles:

- Authentication (Laravel Sanctum)
- Authorization (Spatie Roles & Permissions)
- User management
- Task management
- Comments and collaboration
- REST API endpoints

Please refer to the backend repository for full API documentation.

---

## Tech Stack

### Frontend

- Vue 3
- TypeScript
- Vuetify
- Pinia
- Vue Router
- Axios
- Vite

### Backend

- Laravel
- Sanctum (session-based authentication)
- Spatie Roles & Permissions
- MySQL

---

## Features (Planned)

- Authentication (login / logout)
- Dashboard overview
- User management
- Task management
- Role-based access control
- Integration with Laravel API

---

## Project Setup

Install dependencies

```bash
npm install 
```

Start development server

```bash
npm run dev
