
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Users, ArrowLeft, Search, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ConnectWalletButton from "@/components/ConnectWalletButton";

const Members = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const members = [
    {
      id: 1,
      name: "John Doe",
      alias: "JD",
      unitNumber: "12A", 
      votingPower: "2.8%",
      unitValue: "$485,000",
      joinedDate: "Jan 2024",
      role: "Secretary"
    },
    {
      id: 2,
      name: "Sarah Chen",
      alias: "SC",
      unitNumber: "5B",
      votingPower: "3.2%",
      unitValue: "$550,000",
      joinedDate: "Mar 2023",
      role: "Board Member"
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      alias: "MR",
      unitNumber: "8C",
      votingPower: "2.1%",
      unitValue: "$365,000",
      joinedDate: "Aug 2023",
      role: "Treasurer"
    },
    {
      id: 4,
      name: "Emily Johnson",
      alias: "EJ",
      unitNumber: "15A",
      votingPower: "2.9%",
      unitValue: "$495,000",
      joinedDate: "Dec 2022",
      role: "Member"
    },
    {
      id: 5,
      name: "David Kim",
      alias: "DK",
      unitNumber: "3D",
      votingPower: "1.8%",
      unitValue: "$315,000",
      joinedDate: "Jun 2024",
      role: "Member"
    },
    {
      id: 6,
      name: "Lisa Thompson",
      alias: "LT",
      unitNumber: "22B",
      votingPower: "4.1%",
      unitValue: "$705,000",
      joinedDate: "Feb 2022",
      role: "President"
    },
    {
      id: 7,
      name: "James Wilson",
      alias: "JW",
      unitNumber: "7A",
      votingPower: "2.3%",
      unitValue: "$395,000",
      joinedDate: "Sep 2023",
      role: "Member"
    },
    {
      id: 8,
      name: "Maria Garcia",
      alias: "MG",
      unitNumber: "11C",
      votingPower: "2.6%",
      unitValue: "$445,000",
      joinedDate: "Apr 2024",
      role: "Member"
    },
    {
      id: 9,
      name: "Robert Brown",
      alias: "RB",
      unitNumber: "18D",
      votingPower: "3.5%",
      unitValue: "$605,000",
      joinedDate: "Nov 2021",
      role: "Vice President"
    },
    {
      id: 10,
      name: "Amanda Davis",
      alias: "AD",
      unitNumber: "4B",
      votingPower: "2.4%",
      unitValue: "$415,000",
      joinedDate: "Jul 2023",
      role: "Member"
    }
  ];

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.unitNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getRoleBadgeClass = (role: string) => {
    switch (role) {
      case 'President': return 'bg-purple-100 text-purple-800 border-purple-300';
      case 'Vice President': return 'bg-blue-100 text-blue-800 border-blue-300';
      case 'Secretary': return 'bg-green-100 text-green-800 border-green-300';
      case 'Treasurer': return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'Board Member': return 'bg-indigo-100 text-indigo-800 border-indigo-300';
      default: return 'bg-gray-100 text-gray-600 border-gray-300';
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
                <p className="text-sm text-gray-600">Cooperative member directory</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <ConnectWalletButton />
            </div>
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
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search members by name or unit..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 max-w-md"
            />
          </div>

          {/* Members Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member) => (
              <Card key={member.id} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-gradient-to-br from-blue-600 to-green-600 text-white">
                        {member.alias}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription>Unit {member.unitNumber}</CardDescription>
                    </div>
                  </div>
                  <Badge className={getRoleBadgeClass(member.role)}>
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Voting Power:</span>
                    <span className="font-medium">{member.votingPower}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Unit Value:</span>
                    <span className="font-medium">{member.unitValue}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Member Since:</span>
                    <span className="font-medium">{member.joinedDate}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredMembers.length === 0 && (
            <div className="text-center py-8">
              <User className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No members found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Members;
