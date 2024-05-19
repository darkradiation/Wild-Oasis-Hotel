# The Wild Oasis Hotel Management System

Welcome to the GitHub repository for The Wild Oasis Hotel Management System. This custom-built application is designed to assist the boutique hotel "The Wild Oasis" in managing its luxurious wooden cabins, guests, bookings, and employee users.

## Project Overview

The Wild Oasis is a boutique hotel that offers 8 exclusive cabins. The goal of this application is to provide an all-encompassing internal tool for hotel employees to manage hotel operations effectively. This includes handling bookings, cabin management, guest check-ins, and employee account management.

## Links

Live link : https://the-wild-oasis-dark-radiation.netlify.app/  
Video Demo : https://youtu.be/pxwFplxW9EM?si=_nZ3BRasKU5Pww4b

## Features

- **User Authentication**: Secure login mechanism for hotel employees.
- **User Profiles**: Ability for users to upload avatars, change names, and update passwords.
- **Cabin Management**: View, create, update, and delete cabin details along with photo uploads.
- **Booking Management**: Comprehensive table view for managing bookings with status updates and payment confirmations.
- **Guest Management**: Store and display guest information, including the ability to add breakfast options upon check-in.
- **Dashboard**: An initial app screen showcasing guests checking in/out, booking statistics, sales, occupancy rates, and stay duration charts.
- **Application-wide Settings**: Configure settings for breakfast price, booking limits, and guest capacities.
- **Dark Mode**: An eye-friendly dark mode for the application.

## Tech Stack

- **React Js** with **Vite**.
- **Routing**: [React Router](https://reactrouter.com/)
- **Styling**: [Styled Components](https://styled-components.com/)
- **Remote State Management**: [React Query](https://react-query.tanstack.com/)
- **UI State Management**: [Context API](https://reactjs.org/docs/context.html)
- **Form Management**: [React Hook Form](https://react-hook-form.com/)
- **Backend**: [Supabase](https://supabase.com/)
- **Other Libraries**: React Icons, Recharts, Date-fns, Hot Toast

## Screenshots

![login page](screenshots/Screenshot%20from%202024-03-17%2018-20-10.png)
![homepage-1 dark-mode](screenshots/Screenshot%20from%202024-03-17%2018-19-18.png)
![homepage-2 darkmode](screenshots/Screenshot%20from%202024-03-17%2018-19-31.png)
![homepage](screenshots/Screenshot%20from%202024-03-17%2018-16-26.png)
![bookings darkmode](screenshots/Screenshot%20from%202024-03-17%2018-20-31.png)
![bookings](screenshots/Screenshot%20from%202024-03-17%2018-16-59.png)
![booking page](screenshots/Screenshot%20from%202024-03-17%2018-17-22.png)
![delete modal](screenshots/Screenshot%20from%202024-03-17%2018-17-32.png)
![cabins](screenshots/Screenshot%20from%202024-03-17%2018-17-49.png)
![new cabin form](screenshots/Screenshot%20from%202024-03-17%2018-18-00.png)
![new user form](screenshots/Screenshot%20from%202024-03-17%2018-18-34.png)
![settings](screenshots/Screenshot%20from%202024-03-17%2018-18-38.png)
![user account](screenshots/Screenshot%20from%202024-03-17%2018-18-52.png)

<!-- <html>
  <body>
    <iframe width="942" height="530" src="https://www.youtube.com/embed/pxwFplxW9EM" title="WildOasis - hotel management website demo" frameborder="0" allow="accelerometer; autoplay; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </body>
</html> -->

## Getting Started

To set up the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies by running `npm install` in the project's root directory.
3. Set up your [Supabase](https://supabase.com/) project and obtain the necessary connection strings.
4. Create a `.env` file in the root directory and add your Supabase credentials.
5. Start the development server using `npm start`. This will launch the application in your default web browser.

## Contribution Guidelines

To contribute to this project, please follow the standard GitHub flow:

1. Fork the repository.
2. Create a new feature branch in your fork.
3. Make your changes and commit them with clear, concise commit messages.
4. Push your feature branch to your fork.
5. Open a pull request against the main repository.

Before contributing, please ensure your code adheres to the project's coding standards and has been thoroughly tested.

## Contact

For any questions or assistance, please open an issue in this repository, I will get back to you.
