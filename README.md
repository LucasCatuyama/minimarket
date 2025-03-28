# **Minimarket - E-Commerce Project** 🛒

**Minimarket** is a full-stack e-commerce application built with React, Node.js, Express, Tailwind CSS, and PostgreSQL. This project allows users to browse products, add them to their shopping cart, and proceed with the checkout process. It also includes a cart persistence feature, so items are saved in the browser's `localStorage`.

🚧 **This project is currently under development and not the final version yet.**

🔄 **Upgrade/Refactored Version**: This project is an **upgrade and refactor** of the original project [Mercadinho](https://github.com/LucasCatuyama/mercadinho).

## **Technologies Used** 🛠️

- **Frontend**: 
  - React.js (for building the user interface)
  - Tailwind CSS (for styling)
  - React Router (for routing)
  - Axios (for API requests)

- **Backend**:
  - Node.js (JavaScript runtime)
  - Express.js (for building the server and RESTful APIs)
  - LocalStorage (for cart persistence)
 
- **Database**:
  - PostgreSQL (Contains the available products)

## **Features** 🌟

- **Product Display**: Users can view products available for purchase.
- **Add to Cart**: Users can add products to the cart and the quantity is updated.
- **View Cart**: Users can view the cart with the added products.
- **Remove from Cart**: Users can remove items from the cart.
- **Persistent Cart**: Cart data is saved in `localStorage`, so it remains intact even after refreshing the page.
- **Responsive Design**: The application is fully responsive, using Tailwind CSS for layout adjustments on various screen sizes.

## **How to Run the Project Locally** 🖥️

Follow the steps below to run this project on your local machine.

### **Prerequisites** 📦

Ensure that you have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **npm**: The default package manager for Node.js comes with npm.
- **PostgreSQL**: [Install PostgreSQL](https://www.postgresql.org/download/) if it's not already installed on your machine.

### **1. Clone the Repository** 

```bash
git clone https://github.com/LucasCatuyama/minimarket.git
cd minimarket
```

### **2. Install Dependencies**

For the **backend** and **frontend**, install the necessary dependencies.

#### For the backend:

1. Go to the `backend` folder (or wherever the backend code is located):

   ```bash
   cd backend
   ```

2. Install the backend dependencies:

   ```bash
   npm install
   ```

#### For the frontend:

1. Go to the `frontend` folder:

   ```bash
   cd frontend
   ```

2. Install the frontend dependencies:

   ```bash
   npm install
   ```

### **3. Set Up Environment Variables**

In the root of the project, you’ll need to create a `.env` file to store your environment variables. Here’s an example `.env` file for the backend:

```env
PORT=3001
DB_HOST=localhost
DB_PORT=5432
DB_NAME=minimarket
DB_USER=your_db_user
DB_PASSWORD=your_db_password
```

### **4. Set Up the Database**

You’ll need to set up the PostgreSQL database.

- Create the **PostgreSQL database**:
  ```bash
  psql -U postgres
  CREATE DATABASE minimarket;
  ```

- Optionally, run migrations or create the necessary tables.

### **5. Run the Project Locally**

#### Backend:

To run the backend locally, use:

```bash
cd backend
npm run dev
```

#### Frontend:

To run the frontend locally, use:

```bash
cd frontend
npm run dev
```

Now, open your browser and navigate to `http://localhost:3000` to view the project.

## **Folder Structure** 📁

Here's an overview of the project structure:

```
/minimarket
  /frontend       # Frontend React app
    /src
      /components
      /layouts
      /pages
      /assets
  /backend        # Backend Express app
    /src
      /controllers
      /routes
      /db
    index.js
  .gitignore      # Git ignore file
  README.md       # Project documentation
  package.json    # Project dependencies and scripts
```

### **What’s Next** ⏩

- **User Authentication**: Add user authentication (login/register) and protect routes with sessions or JWT.
- **Database Integration**: Replace `localStorage` with a real database (e.g., MongoDB, PostgreSQL).
- **Payment Integration**: Implement a payment gateway for real purchases (e.g., Stripe or PayPal).
- **UI/UX Enhancements**: Improve the UI design and animations for a better user experience.

## **Contributing** 🤝

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m "Add new feature"`.
4. Push your changes to your fork: `git push origin feature/your-feature-name`.
5. Create a pull request.

## **License** 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
