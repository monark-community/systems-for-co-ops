
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, LogOut } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const ConnectWalletButton = () => {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard" || location.pathname === "/profile";
  const [isConnected, setIsConnected] = useState(isDashboard);
  const [userAlias] = useState("John Doe");
  const [walletAddress] = useState("0x742d35Cc6634C0532925a3b8D5c");
  const navigate = useNavigate();

  const handleConnect = () => {
    setIsConnected(true);
    navigate("/dashboard");
  };

  const handleLogout = () => {
    setIsConnected(false);
    navigate("/");
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  if (isConnected) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center space-x-2 h-10 px-4 pr-6">
            <Avatar className="h-6 w-6">
              <AvatarFallback className="text-xs bg-gradient-to-br from-blue-600 to-green-600 text-white">
                {userAlias.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="text-left">
              <div className="text-sm font-medium leading-tight">{userAlias}</div>
              <div className="text-xs text-muted-foreground leading-tight">{walletAddress.slice(0, 10)}</div>
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={handleProfile}>
            <User className="h-4 w-4 mr-2" />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Button variant="outline" onClick={handleConnect}>
      Connect Wallet
    </Button>
  );
};

export default ConnectWalletButton;
