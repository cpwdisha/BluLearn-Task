import React from 'react';
import { AiOutlineHome, AiOutlineShop, AiOutlineDollarCircle, AiOutlineBarChart, AiOutlineUser, AiOutlineMore, AiOutlineSetting } from 'react-icons/ai';

function SidebarItem({ icon, text, active }) {
  return (
    <li>
      
        <a href="#"
        className={`flex items-center p-2 rounded-lg transition-all duration-200 ease-in-out
          ${active 
            ? 'bg-[#6457e9] text-white' 
            : 'text-[#b3abff] hover:bg-[#6457e9] hover:text-white'
          }`}
      >
        <span className="text-xl mr-3">{icon}</span>
        {text}
      </a>
    </li>
  );
}

function Sidebar() {
  return (
    <nav className="w-64 bg-[#5043e3] text-white p-6 flex flex-col h-full">
      <ul className="space-y-2 flex-grow">
        <SidebarItem icon={<AiOutlineHome />} text="Home" />
        <SidebarItem icon={<AiOutlineShop />} text="My Store" active />
        <SidebarItem icon={<AiOutlineDollarCircle />} text="Income" />
        <SidebarItem icon={<AiOutlineBarChart />} text="Analytics" />
        <SidebarItem icon={<AiOutlineUser />} text="Customers" />
        <SidebarItem icon={<AiOutlineMore />} text="More" />
      </ul>
      <div className="mt-auto">
        <SidebarItem icon={<AiOutlineSetting />} text="Settings" />
        <div className="flex items-center mt-4">
          <img src="https://i.pravatar.cc/300" alt="User" className="w-8 h-8 rounded-full mr-3" />
          <span>Disha</span>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;