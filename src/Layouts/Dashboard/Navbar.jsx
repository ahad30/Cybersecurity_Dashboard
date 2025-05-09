import { Button } from "antd";
import React, { useContext } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Navbar = ({
  setIsSidebarOpen,
  isSidebarOpen,
}) => {
  const navigate = useNavigate();
  const { user, loading , logOut } = useContext(AuthContext);
  console.log(user);

  const handleSignOut = () => {
    logOut()
        .then(() => {
          toast.success('log out successfully')
          navigate('/')
        })
        .catch()
}

  return (
    <>
      <div className="border-gray-200 px-4 lg:px-6 py-3 bg-[#121c34]">
        <div className="flex justify-between items-center lg:order-2 sticky z-40 top-0">
          <div>
            {isSidebarOpen === false && (
              <button
                className="lg:hidden"
                onClick={() => setIsSidebarOpen((prev) => !prev)}
              >
                <IoIosArrowDroprightCircle size={25} className="text-white" />
              </button>
            )}

            <p className="text-[#E0E0E0] hidden lg:block">Cybersecurity Dashboard</p>
          </div>
          {/* profile */}
          <div className="flex items-center gap-2">
           <p className="text-white">{user?.displayName}</p>
               <Button onClick={handleSignOut} className={`bg-[#59C6D2] text-white`}>Log out</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
