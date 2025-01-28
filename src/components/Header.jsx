import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';

const Header = ({ onMenuClick, isSidebarOpen }) => {
  return (
    <header className={`w-full bg-[#003950] py-4 transition-all duration-300`}>
      <div className="px-6">
        <nav className="flex justify-end items-center gap-4">
          <Button 
            variant="ghost" 
            className="text-white hover:bg-[#004d6b] flex items-center gap-2"
            onClick={onMenuClick}
          >
            <span>Menu</span>
            <Menu className="w-5 h-5" />
          </Button>
          
          <Button 
            className="bg-[#008BBF] hover:bg-[#0099cc] text-white border-none rounded-full px-6"
          >
            Contact Us
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;