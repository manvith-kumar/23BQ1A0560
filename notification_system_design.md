# Campus Notification System Design

## Overview

The system displays campus notifications for students.

Notifications are categorized into:

- Placement
- Result
- Event

## Priority Logic

Priority order:

1. Placement
2. Result
3. Event

Notifications are displayed according to:

- Priority
- Recency

## Frontend

React + Vite

Features:

- All Notifications Page
- Priority Notifications Page
- Read / Unread Status
- Notification Filtering
- Logging Middleware Integration

## Logging Middleware

All user actions are logged through the middleware.

Examples:

- Home Page Load
- Priority Page Load
- Notification Click

## Future Improvements

- Pagination
- API Integration
- Real-time Notifications