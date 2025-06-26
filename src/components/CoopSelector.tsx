
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Building2 } from "lucide-react";

const CoopSelector = () => {
  const currentCoop = "Greenwood Residential Cooperative";
  const currentAddress = "1247 Maple Street, Portland, OR 97205";

  return (
    <Select defaultValue="greenwood-coop">
      <SelectTrigger className="w-auto min-w-[280px] border-0 p-0 h-auto bg-transparent hover:bg-gray-50 focus:ring-0">
        <div className="flex items-center space-x-2">
          <Building2 className="h-4 w-4 text-gray-600" />
          <div className="text-left">
            <SelectValue />
          </div>
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="greenwood-coop" className="cursor-pointer">
          <div className="py-1">
            <p className="font-medium text-sm">{currentCoop}</p>
            <p className="text-xs text-gray-600">{currentAddress}</p>
          </div>
        </SelectItem>
        <SelectItem value="oakview-coop" className="cursor-pointer">
          <div className="py-1">
            <p className="font-medium text-sm">Oakview Housing Cooperative</p>
            <p className="text-xs text-gray-600">892 Oak Boulevard, Portland, OR 97201</p>
          </div>
        </SelectItem>
        <SelectItem value="riverside-coop" className="cursor-pointer">
          <div className="py-1">
            <p className="font-medium text-sm">Riverside Community Cooperative</p>
            <p className="text-xs text-gray-600">456 River Drive, Portland, OR 97210</p>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default CoopSelector;
