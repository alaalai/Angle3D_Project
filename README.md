# Angle3D Clone Project

This is a full-stack 3D product customization platform.

## Prerequisites
- **Node.js**: You must have Node.js installed to run this project. [Download Node.js](https://nodejs.org/)
- **MongoDB**: You need a running MongoDB instance (local or Atlas).

## Installation

1.  **Install Backend Dependencies**
    ```bash
    cd server
    npm install
    ```

2.  **Install Frontend Dependencies**
    ```bash
    cd client
    npm install
    ```

3.  **Install Admin Dependencies**
    ```bash
    cd admin
    npm install
    ```

## Running the Project

You need to run the backend, frontend, and admin in separate terminals.

1.  **Start Backend Server**
    ```bash
    cd server
    npm run dev
    ```
    Server runs on `http://localhost:5000`

2.  **Start Frontend (Customer View)**
    ```bash
    cd client
    npm run dev
    ```
    Frontend runs on `http://localhost:5173` (usually)

3.  **Start Admin Dashboard**
    ```bash
    cd admin
    npm run dev
    ```
    Admin runs on `http://localhost:5174` (usually)

## Project Structure

-   `/server`: Node.js + Express API + MongoDB
-   `/client`: React + Three.js (Customer 3D Viewer)
-   `/admin`: React Admin Dashboard

## Features Implemented
-   **Backend**: API for Products, Models, Orders. File Upload support.
-   **Frontend**: 3D Viewer with customization (Color, Visibility).
-   **Admin**: Model Upload UI, Product Creation UI.
