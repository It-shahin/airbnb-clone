# Property Booking Platform

A full-stack property marketplace inspired by Airbnb, built with Next.js, TypeScript, MongoDB, Prisma, NextAuth, and Cloudinary.

## Overview

This application lets travelers browse and filter property listings, inspect location and availability details, save favorites, and create reservations. Authenticated hosts can publish listings through a guided multi-step flow and review bookings made against their properties. The project combines server-rendered data access, authenticated API mutations, database relations, third-party OAuth, image uploads, and interactive maps.

## Features

- Email/password registration and sign-in with bcrypt password hashing
- Google and GitHub OAuth through NextAuth
- Property browsing with category, country, guest, room, bathroom, and date filters
- Detailed listing pages with host information, amenities, imagery, and an interactive map
- Multi-step listing creation for category, location, capacity, image, description, and nightly price
- Cloudinary image uploads
- Favorite and unfavorite actions for authenticated users
- Date-range reservation flow with disabled booked dates and calculated totals
- Guest trip history with reservation cancellation
- Host reservation view for bookings on owned properties
- Responsive listing grids, navigation, dialogs, and loading or empty states

## Tech Stack

### Frontend

- Next.js 13 App Router
- React 18
- TypeScript
- Tailwind CSS
- React Hook Form
- Zustand
- Axios

### Backend

- Next.js route handlers for registration, listings, favorites, and reservations
- NextAuth API route for credentials and OAuth authentication
- Prisma Client for server-side data access
- bcrypt for password hashing and credential verification

### Database

- MongoDB
- Prisma schema and ORM

### External Services

- Cloudinary upload widget for listing images
- Leaflet and OpenStreetMap tiles for property maps
- Google and GitHub OAuth providers

## Architecture

Next.js server components call dedicated data-access functions that query MongoDB through Prisma. Client components handle search, modal workflows, favorites, and reservations, then call authenticated Next.js route handlers for writes. NextAuth runs from the Pages Router API layer with a Prisma adapter, while the main interface uses the App Router. Cloudinary stores uploaded listing images, and Leaflet renders maps from the selected country coordinates.

## Getting Started

### Prerequisites

- Node.js and npm
- A MongoDB database
- A Cloudinary account with an unsigned upload preset named `airbnb clone`
- Google and GitHub OAuth applications if those sign-in methods are enabled

### Installation

```bash
git clone https://github.com/It-shahin/airbnb-clone.git
cd airbnb-clone
npm install
```

### Environment Variables

Create `.env.local` in the project root:

```bash
DATABASE_URL=
NEXTAUTH_SECRET=
GITHUB_ID=
GITHUB_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
```

Use credentials from your own MongoDB, OAuth, and Cloudinary projects. Never commit real secret values.

### Initialize the Database

Generate the Prisma client and apply the current schema to your MongoDB database:

```bash
npx prisma generate
npx prisma db push
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Available Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Next.js development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve a completed production build |
| `npm run lint` | Run ESLint |

## Project Structure

| Path | Responsibility |
| --- | --- |
| `app/` | App Router pages, server data access, and write API routes |
| `components/` | Listing cards, navigation, inputs, maps, and modal workflows |
| `hooks/` | Zustand modal state, favorites behavior, and country lookups |
| `pages/api/auth/` | NextAuth configuration and provider setup |
| `prisma/` | MongoDB data model for users, sessions, listings, and reservations |

## Key Technical Highlights

- Prisma models MongoDB ObjectId relations between users, OAuth accounts, sessions, listings, and reservations.
- Authenticated route handlers protect listing, favorite, and reservation mutations, including ownership checks for cancellations.
- Server-side listing queries compose category, capacity, location, and date filters from URL parameters.
- The hybrid routing design keeps the main product in the App Router while integrating NextAuth through its API route.

## Author

**Chahin Boudra**

- GitHub: [@It-shahin](https://github.com/It-shahin)
- LinkedIn: [chahin-boudra](https://www.linkedin.com/in/chahin-boudra/)

> This independent portfolio project is inspired by Airbnb and is not affiliated with Airbnb, Inc.
