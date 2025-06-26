
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CoopSelector = () => {
  const currentCoop = "Greenwood Residential Cooperative";

  return (
    <Select defaultValue="greenwood-coop">
      <SelectTrigger className="w-auto border-0 p-0 h-auto bg-transparent hover:bg-gray-50 focus:ring-0">
        <div className="text-left">
          <SelectValue />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="greenwood-coop" className="cursor-pointer">
          <div className="py-1">
            <p className="font-medium text-sm">{currentCoop}</p>
          </div>
        </SelectItem>
        <SelectItem value="oakview-coop" className="cursor-pointer">
          <div className="py-1">
            <p className="font-medium text-sm">Oakview Housing Cooperative</p>
          </div>
        </SelectItem>
        <SelectItem value="riverside-coop" className="cursor-pointer">
          <div className="py-1">
            <p className="font-medium text-sm">Riverside Community Cooperative</p>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default CoopSelector;
