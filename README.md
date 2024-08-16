## CareFinder with Mo App

![CareFinderAPP](https://drive.google.com/file/d/1zAiWpP3zlVWIhvmD5ZzyR5AFzyeVX6tf/view?usp=drive_link)


**CareFinder Project Overview**

The CareFinder app is a web application built using Next.js, TypeScript, and React. It aims to assist users in locating nearby healthcare facilities. The app utilizes Google Maps API for location-based services, Firebase for authentication, and MUI for UI components.

**Key Functionalities:**
Here are the key functionalities of this project
-   User authentication and profile management
-   Search for healthcare facilities based on location and other criteria
-   Display of facility details, including location, contact information, and services
-   Appointment booking (potentially)

**Dependencies and Their Purpose**

-   **@emotion/react, @emotion/styled:** For styling components using styled-components.
-   **@googlemaps/react-wrapper, @react-google-maps/api:** Integration with Google Maps API for map display and functionalities.
-   **@mui/material, @mui/styled-engine-sc, @mui/x-date-pickers:** For UI components and date pickers.
-   **axios:** For making HTTP requests.
-   **firebase:** For authentication and real-time database (if used).
-   **framer-motion:** For animations and interactions.
-   **html2canvas, jspdf:** For generating PDF documents (if applicable).
-   **react-firebase-hooks:** For simplifying Firebase integration with React.
-   **react-hot-toast:** For displaying notifications.
-   **react-icons:** For using icons in the UI.
-   **react-query:** For data fetching and caching.
-   **swiper:** For creating sliders or carousels.

**Project Structure**

-   **components:** Reusable UI components.
-   **pages:** Main application pages.
-   **styles:** Global styles and CSS modules.
-   **context:** Custom context providers for state management.
-   **utils:** Helper functions and utilities.
-   **data:** Static data or API endpoints.
-   **firebase:** Firebase was configured to provide security through autentication, so as toensure user's data protection.

**Development and Testing**

-   **Next.js:** Framework for building React applications.
-   **TypeScript:** For type safety and code maintainability.
-   **Jest, React Testing Library:** For unit and component testing.
-   **ESLint:** For code linting and style enforcement.
