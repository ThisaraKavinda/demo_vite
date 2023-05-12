import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { BooksProvider } from "./context/BookContext";
import { UsersProvider } from "./context/UserContext";

import Home from "./pages/Home";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import ViewBook from "./pages/ViewBook";
import EditBook from "./pages/EditBook";

import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import ViewUser from "./pages/ViewUser";
import EditUser from "./pages/EditUser";
import BorrowBook from "./pages/BorrowBook";

function App() {
  return (
    <BooksProvider>
      <UsersProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/addBook" element={<AddBook />} />
            <Route path="/viewBook/:id" element={<ViewBook />} />
            <Route path="/editBook/:id" element={<EditBook />} />
            <Route path="/users" element={<Users />} />
            <Route path="/addUser" element={<AddUser />} />
            <Route path="/viewUser/:id" element={<ViewUser />} />
            <Route path="/editUser/:id" element={<EditUser />} />
            <Route path="/borrowBook/:id" element={<BorrowBook />} />
          </Routes>
        </Router>
      </UsersProvider>
    </BooksProvider>
  );
}

export default App;
