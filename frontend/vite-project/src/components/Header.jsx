import { useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CgLogIn } from "react-icons/cg";
import LogoutComponent from "./Logout.jsx"
import { GiPlagueDoctorProfile } from "react-icons/gi";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()
  const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true,
        },
        {
            name: 'Login',
            slug: "/login",
            active: !authStatus,
        },
        {
            name: 'Register',
            slug: "/register",
            active: !authStatus
        },
        {
            name: 'Logout',
            slug: "/logout",
            active: authStatus
        }
    ]
    
  return (
    <>
      <nav className="bg-[#020618] text-white shadow-lg fixed top-0 left-0 w-full z-50">
        <div className="mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-16">

            {/* Left: Logo */}
            <div className="flex items-center space-x-2">
              <Link to="/" className="flex items-center gap-2">
                <GiPlagueDoctorProfile size={28} className="text-purple-500" />
                <span className="text-2xl font-bold text-purple-500">SmartDoc</span>
              </Link>
            </div>

            {/* Right: Nav Links + Button */}
            <div className="flex items-center space-x-6">
              <ul className="flex space-x-6">
                {navItems.map(
                  (item) =>
                    item.active && (
                      <li key={item.name}>
                        <a
                          onClick={() => navigate(item.slug)}
                          className="cursor-pointer text-gray-300 hover:text-purple-400 px-3 py-2 text-sm font-medium"
                        >
                          {item.name}
                        </a>
                      </li>
                    )
                )}
              </ul>
              {authStatus ? (
                <LogoutComponent />
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="flex items-center gap-2 bg-purple-500 px-5 py-2 rounded-md text-white font-semibold hover:bg-purple-600"
                >
                  Sign In <CgLogIn />
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Header;