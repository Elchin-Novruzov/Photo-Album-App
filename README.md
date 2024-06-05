# Album and Photo Management Web Application

This monorepo project contains three separate applications:

1. **Routing Application**: Handles routing for the other applications.
2. **Album and Photo Management Application**: Implements the core functionality for browsing, viewing, editing, rearranging, adding, and removing albums and photos, as well as searching by title. Uses virtual scrolling with 20 items per page.
3. **Recently Viewed Photos Application**: Allows users to access the last 20 photos they recently viewed.

This project uses the ReactJS library and fetches data from the JSONPlaceholder API. It is structured as a monorepo and can be dynamically loaded without using relative imports.
![Recording 2024-06-05 063211](https://github.com/Elchin-Novruzov/Photo-Album-App/assets/88887189/ca8bec2d-ff48-4b1f-8e69-7680e4eabb82)



## Getting Started

This project was bootstrapped with Create React App. Follow the instructions below to get started.

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

Clone the repository and install the dependencies:

```sh
git clone https://github.com/ElchinNovruzov/Photo-Album-App.git
cd Photo-Album-App
npm install
```

## Running the Applications
In the project directory, you can run:

### Start the Development Server
```sh
npm start
```

This will run the app in development mode. Open http://localhost:3000 to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.

### Run Tests
```sh
npm test
```
Launches the test runner in the interactive watch mode. See the section about running tests for more information.

### Build for Production
```sh
npm build
```
Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified, and the filenames include the hashes. Your app is ready to be deployed!

## Project Structure
#### Routing Application:
Handles routing for the Album and Photo Management application and the Recently Viewed Photos application. <br/>
#### Album and Photo Management Application:
Allows users to browse, view, edit, rearrange, add, and remove albums and photos. Users can also search for specific albums or photos by title. Each album displays information about its creator. Implements virtual scrolling with 20 items per page.<br/>
#### Recently Viewed Photos Application:
Enables users to access the last 20 photos they recently viewed.<br/>

## Key Features
Album and Photo Management: View, edit, and rearrange albums and photos. <br/>
Search Functionality: Search for specific albums or photos by title. <br/>
Virtual Scrolling: Efficient pagination with 20 items per page. <br/>
Recently Viewed Photos: Access the last 20 photos viewed by the user. <br/>
Dynamic Loading: Applications can be dynamically loaded into the routing application without using relative imports. <br/>
