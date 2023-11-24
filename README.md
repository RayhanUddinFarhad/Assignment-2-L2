# Assignment-2-L2

# Mongoose Express CRUD Mastery

This is a sample Node.js Express application developed with TypeScript and integrated with MongoDB using Mongoose. The application includes user management and order management features.

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js: [Download here](https://nodejs.org/)
- MongoDB: [Download here](https://www.mongodb.com/try/download/community)

## Getting Started

1. Clone the repository:

   git clone  : https://github.com/RayhanUddinFarhad/Assignment-2-L2.git

 2. Navigate to the project directory:

cd your-repository

3. Install dependencies:
 ```bash
npm install

4. Set up environment variables:

Create a .env file in the root of the project with the following content:


PORT = 7000
DATABASE_URL = mongodb+srv://yourDatabaseName:password@cluster0.tazahu7.mongodb.net/?retryWrites=true&w=majority

5. Build the TypeScript code:

npm run build

6. Run project on localhost using 'npm runstart:dev for development and npm run start:prod' for production purpose.

   The application will be accessible at http://localhost:7000.

   


I have completed all instruction as mentioned. Here I have developed a Crud operation that can manage users and user's order .
You can easily get user data by using API Endpoints '/api/users', You can post users data by using same endpoint.
You can also get specific user data by using '/api/users/:userId', You can delete and update userdata using same endpoint. For update use PUT method.
You can push product details to user order by using endpoint '/api/users/:userId/orders'. You can also get specific user's order by using same endpoint.
You can also calculate total price of product by using '/api/users/:userId/orders/total-price' api end point.

'**The project deployed on vercel : https://assignment-2-steel-three.vercel.app**



