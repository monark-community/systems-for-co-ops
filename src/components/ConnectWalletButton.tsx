
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useWallet } from "@/contexts/WalletContext";

const ConnectWalletButton = () => {
  const { isConnected, userAlias, walletAddress, connect, disconnect } = useWallet();
  const navigate = useNavigate();

  const handleConnect = () => {
    connect();
    navigate("/dashboard");
  };

  const handleLogout = () => {
    disconnect();
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
