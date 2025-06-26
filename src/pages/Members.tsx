import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Users, 
  ArrowLeft, 
  Search, 
  Calendar, 
  Wallet,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ConnectWalletButton from "@/components/ConnectWalletButton";
import CoopSelector from "@/components/CoopSelector";

interface Member {
  id: string;
  name: string;
  unit: string;
  role: string;
  votingPower: string;
  memberSince: string;
  status: 'active' | 'inactive';
  avatar: string;
}

const mockMembers: Member[] = [
  {
    id: "john-doe",
    name: "John Doe",
    unit: "12A",
    role: "Secretary",
    votingPower: "2.8%",
    memberSince: "Jan 2024",
    status: "active",
    avatar: "JD"
  },
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    unit: "5B",
    role: "Board Member",
    votingPower: "3.2%",
    memberSince: "Mar 2023",
    status: "active",
    avatar: "SC"
  },
  {
    id: "michael-rodriguez",
    name: "Michael Rodriguez",
    unit: "8C",
    role: "Treasurer",
    votingPower: "2.1%",
    memberSince: "Aug 2023",
    status: "active",
    avatar: "MR"
  },
  {
    id: "emily-johnson",
    name: "Emily Johnson",
    unit: "15A",
    role: "Member",
    votingPower: "1.9%",
    memberSince: "Dec 2022",
    status: "active",
    avatar: "EJ"
  },
  {
    id: "david-kim",
    name: "David Kim",
    unit: "3D",
    role: "Vice President",
    votingPower: "4.1%",
    memberSince: "Feb 2022",
    status: "active",
    avatar: "DK"
  },
  {
    id: "lisa-thompson",
    name: "Lisa Thompson",
    unit: "22B",
    role: "Member",
    votingPower: "2.3%",
    memberSince: "Jun 2023",
    status: "active",
    avatar: "LT"
  },
  {
    id: "robert-wilson",
    name: "Robert Wilson",
    unit: "7F",
    role: "President",
    votingPower: "3.7%",
    memberSince: "Jan 2021",
    status: "active",
    avatar: "RW"
  },
  {
    id: "maria-garcia",
    name: "Maria Garcia",
    unit: "18C",
    role: "Member",
    votingPower: "2.6%",
    memberSince: "Sep 2023",
    status: "active",
    avatar: "MG"
  },
  {
    id: "james-brown",
    name: "James Brown",
    unit: "11E",
    role: "Member",
    votingPower: "1.8%",
    memberSince: "Nov 2022",
    status: "inactive",
    avatar: "JB"
  },
  {
    id: "jennifer-davis",
    name: "Jennifer Davis",
    unit: "4A",
    role: "Member",
    votingPower: "2.4%",
    memberSince: "Apr 2023",
    status: "active",
    avatar: "JD"
  }
];

const Members = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const membersPerPage = 10;
  
  const filteredMembers = mockMembers.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.unit.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || member.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredMembers.length / membersPerPage);
  const startIndex = (currentPage - 1) * membersPerPage;
  const endIndex = startIndex + membersPerPage;
  const currentMembers = filteredMembers.slice(startIndex, endIndex);

  const handleMemberClick = (memberId: string) => {
    navigate(`/member/${memberId}`);
  };

  const getRoleBadgeClass = (role: string) => {
    switch (role.toLowerCase()) {
      case 'president':
        return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'vice president':
        return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'treasurer':
        return 'bg-green-100 text-green-800 border-green-300';
      case 'secretary':
        return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'board member':
        return 'bg-indigo-100 text-indigo-800 border-indigo-300';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Members</h1>
                <CoopSelector />
              </div>
            </div>
            <ConnectWalletButton />
          </div>
        </div>
      </header>

      {/* Secondary Navigation */}
      <div className="bg-white/60 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-2">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/dashboard">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Search and Filter */}
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Members</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Members Table */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Cooperative Members</span>
                <span className="text-sm font-normal text-gray-600">
                  {filteredMembers.length} members total
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 border-b font-medium text-sm text-gray-700">
                <div className="col-span-4">Member</div>
                <div className="col-span-2">Role</div>
                <div className="col-span-3">Voting Power</div>
                <div className="col-span-3">Member Since</div>
              </div>

              {/* Table Body */}
              <div className="divide-y">
                {currentMembers.map((member) => (
                  <div
                    key={member.id}
                    className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50 cursor-pointer transition-colors"
                    onClick={() => handleMemberClick(member.id)}
                  >
                    {/* Member Info */}
                    <div className="col-span-4 flex items-center space-x-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-gradient-to-br from-blue-600 to-green-600 text-white">
                          {member.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-gray-900">{member.name}</p>
                        <p className="text-sm text-gray-500">Unit {member.unit}</p>
                      </div>
                    </div>

                    {/* Role */}
                    <div className="col-span-2 flex items-center">
                      <Badge className={getRoleBadgeClass(member.role)} variant="outline">
                        {member.role}
                      </Badge>
                    </div>

                    {/* Voting Power */}
                    <div className="col-span-3 flex items-center text-sm">
                      <Wallet className="h-4 w-4 mr-2 text-gray-400" />
                      <span className="font-medium">{member.votingPower}</span>
                    </div>

                    {/* Member Since */}
                    <div className="col-span-3 flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                      <span>{member.memberSince}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between px-6 py-4 border-t bg-gray-50">
                <div className="text-sm text-gray-600">
                  Showing {startIndex + 1} to {Math.min(endIndex, filteredMembers.length)} of {filteredMembers.length} results
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Button>
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentPage(page)}
                        className="w-8 h-8 p-0"
                      >
                        {page}
                      </Button>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Members;
