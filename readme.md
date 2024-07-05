### Checklist Backend 

#### Description:
This repository contains the backend implementation for the Checklist application, which manages checklists for client deliveries.

#### Features:
- Implements CRUD operations for checklists.
- User authentication and authorization.
- Integration with a database to store checklist data.

#### Technologies Used:
- Node.js
- Express.js
- MongoDB 
- JWT for authentication
- CORS for handling cross-origin requests

#### Setup Instructions:
1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd Checklist/backend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Set Environment Variables:**
   Create a `.env` file in the root directory and configure it with necessary environment variables (e.g., database connection string, JWT secret).

4. **Run the Application:**
   ```bash
   npm start
   ```
   This will start the backend server on the specified port (default: 5000).

#### API Endpoints:
- `/api/auth`: Authentication endpoints (login, register, etc.).
- `/api/checklists`: CRUD operations for checklists.

---

### Checklist Frontend 

#### Description:
This repository contains the frontend implementation for the Checklist application, providing a user interface to manage checklists for client deliveries.

#### Features:
- User-friendly interface to view, add, edit, and delete checklists.
- Authentication and authorization for different user roles (admin, user).
- Integration with the backend API for data persistence.

#### Technologies Used:
- Vue.js (with TypeScript)
- Quasar Framework
- Vuex for state management
- Axios for API calls
- Vue Router for navigation

#### Setup Instructions:
1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd Checklist/frontend
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configuration:**
   - Ensure the backend API base URL is correctly set in `src/boot/axios.ts`.
   - Update any environment-specific configurations in `.env` or `quasar.conf.js`.

4. **Run the Application:**
   ```bash
   quasar dev
   ```
   This command starts the development server for the frontend application.
