import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-green-600">FoodWastage</h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-600 hover:text-green-600">Home</Link>
        <Link to="/donate" className="text-gray-600 hover:text-green-600">Donate</Link>
        <Link to="/dashboard" className="text-gray-600 hover:text-green-600">Dashboard</Link>
        <Link to="/login" className="text-gray-600 hover:text-green-600">Login</Link>
        <Link to="/register" className="text-gray-600 hover:text-green-600">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
