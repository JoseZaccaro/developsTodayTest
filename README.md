# Next.js Vehicle Filter Application

## Overview

This Next.js application allows users to filter vehicle models by type and model year. It uses Tailwind CSS for styling and React's `Suspense` for handling loading states. The application is built using Next.js 13 with the `appRouter` and React Server Components.

### Features

- **Home Page:** 
  - Allows users to select a vehicle type and model year from dropdown menus.
  - Includes a "Next" button that is enabled only when both selections are made.
  - Navigates to the results page with the selected filters.

- **Results Page:** 
  - Displays vehicle models based on the selected type and year.
  - Uses `Suspense` to handle loading states gracefully.

### Architecture

- **Frontend:** 
  - **Next.js:** Framework for server-rendered React applications.
  - **Tailwind CSS:** For styling and responsive design.
  - **React Suspense:** For handling asynchronous data fetching and loading states.

- **API Integration:**
  - **Vehicle Types:** Fetched from `https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json`.
  - **Vehicle Models:** Retrieved using `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/{makeId}/modelyear/{year}?format=json`.

### Setup Instructions

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/yourusername/your-repository.git
    cd your-repository
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Set Up Environment Variables:**

    Create a `.env.local` file in the root directory and add any required environment variables. For this project, no specific environment variables are required.

4. **Run the Development Server:**

    ```bash
    npm run dev
    ```

    Open your browser and navigate to `http://localhost:3000` to view the application in development mode.

5. **Build the Application:**

    To create a production build of the application, run:

    ```bash
    npm run build
    ```

    After building, you can start the production server with:

    ```bash
    npm run start
    ```

    Navigate to `http://localhost:3000` to view the production version of the application.

### Project Structure

- **`app/`**: Contains the application routes and components.
  - **`result/`**: Contains dynamic route files for displaying vehicle models.
    - **`[makeId]/`**: Folder for routes based on vehicle type.
      - **`[year]/`**: Folder for routes based on model year.
        - **`page.tsx`**: Page component for rendering vehicle models.
        - **`generateStaticParams.ts`**: Defines static parameters for pre-rendering pages.
        - **`VehicleModels.tsx`**: Component for fetching and rendering vehicle models on the results page.
- **`public/`**: Static assets like images and fonts.
- **`styles/`**: Global and component-specific CSS files.
- **`next.config.js`**: Next.js configuration file.