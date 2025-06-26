
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, ArrowLeft, Wallet, Vote, Calendar } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import ConnectWalletButton from "@/components/ConnectWalletButton";

const MemberProfile = () => {
  const { id } = useParams();
  
  const members = [
    {
      id: 1,
      name: "John Doe",
      alias: "JD",
      unitNumber: "12A",
      votingPower: "2.8%",
      unitValue: "$485,000",
      joinedDate: "Jan 2024",
      role: "Secretary",
      walletAddress: "0x742d35Cc6634C0532925a3b8D5c",
      proposalsCreated: 12,
      recentActivity: [
        { action: "Voted on 'Community Garden Equipment'", time: "2 hours ago", type: "vote" },
        { action: "Created proposal 'Equipment Maintenance Fund'", time: "2 days ago", type: "proposal" }
      ]
    },
    {
      id: 2,
      name: "Sarah Chen",
      alias: "SC",
      unitNumber: "5B",
      votingPower: "3.2%",
      unitValue: "$550,000",
      joinedDate: "Mar 2023",
      role: "Board Member",
      walletAddress: "0x8f3e2a9b4c7d1e0f5a6b8c9d2e3f4a5b",
      proposalsCreated: 8,
      recentActivity: [
        { action: "Voted on 'Elevator Modernization'", time: "1 day ago", type: "vote" },
        { action: "Commented on 'Rooftop Solar Panel Installation'", time: "3 days ago", type: "comment" }
      ]
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      alias: "MR",
      unitNumber: "8C",
      votingPower: "2.1%",
      unitValue: "$365,000",
      joinedDate: "Aug 2023",
      role: "Treasurer",
      walletAddress: "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d",
      proposalsCreated: 15,
      recentActivity: [
        { action: "Created proposal 'Budget Review 2024'", time: "5 hours ago", type: "proposal" },
        { action: "Voted on 'Emergency Maintenance Fund'", time: "1 day ago", type: "vote" }
      ]
    },
    {
      id: 4,
      name: "Emily Johnson",
      alias: "EJ",
      unitNumber: "15A",
      votingPower: "2.9%",
      unitValue: "$495,000",
      joinedDate: "Dec 2022",
      role: "Member",
      walletAddress: "0x9e8d7c6b5a49382716059e4d3c2b1a09",
      proposalsCreated: 5,
      recentActivity: [
        { action: "Voted on 'Pet Policy Update'", time: "4 hours ago", type: "vote" },
        { action: "Created proposal 'Community Room Renovation'", time: "1 week ago", type: "proposal" }
      ]
    },
    {
      id: 5,
      name: "David Kim",
      alias: "DK",
      unitNumber: "3D",
      votingPower: "1.8%",
      unitValue: "$315,000",
      joinedDate: "Jun 2024",
      role: "Member",
      walletAddress: "0x2f1e0d9c8b7a6958473625148392a1b0",
      proposalsCreated: 3,
      recentActivity: [
        { action: "Voted on 'Bike Storage Improvement'", time: "6 hours ago", type: "vote" },
        { action: "Joined the cooperative", time: "5 months ago", type: "join" }
      ]
    },
    {
      id: 6,
      name: "Lisa Thompson",
      alias: "LT",
      unitNumber: "22B",
      votingPower: "4.1%",
      unitValue: "$705,000",
      joinedDate: "Feb 2022",
      role: "President",
      walletAddress: "0x7a6b5c4d3e2f1a0b9c8d7e6f5a4b3c2d",
      proposalsCreated: 25,
      recentActivity: [
        { action: "Created proposal 'Annual Meeting Schedule'", time: "3 hours ago", type: "proposal" },
        { action: "Voted on 'Security System Upgrade'", time: "1 day ago", type: "vote" }
      ]
    },
    {
      id: 7,
      name: "James Wilson",
      alias: "JW",
      unitNumber: "7A",
      votingPower: "2.3%",
      unitValue: "$395,000",
      joinedDate: "Sep 2023",
      role: "Member",
      walletAddress: "0x3e2d1c0b9a8756473625148392a1b0c9",
      proposalsCreated: 7,
      recentActivity: [
        { action: "Voted on 'Laundry Room Upgrade'", time: "8 hours ago", type: "vote" },
        { action: "Created proposal 'Guest Parking Rules'", time: "4 days ago", type: "proposal" }
      ]
    },
    {
      id: 8,
      name: "Maria Garcia",
      alias: "MG",
      unitNumber: "11C",
      votingPower: "2.6%",
      unitValue: "$445,000",
      joinedDate: "Apr 2024",
      role: "Member",
      walletAddress: "0x8d7c6b5a49382716059e4d3c2b1a0918",
      proposalsCreated: 4,
      recentActivity: [
        { action: "Voted on 'Building Entrance Renovation'", time: "12 hours ago", type: "vote" },
        { action: "Created proposal 'Children Play Area Safety'", time: "6 days ago", type: "proposal" }
      ]
    },
    {
      id: 9,
      name: "Robert Brown",
      alias: "RB",
      unitNumber: "18D",
      votingPower: "3.5%",
      unitValue: "$605,000",
      joinedDate: "Nov 2021",
      role: "Vice President",
      walletAddress: "0x5c4b3a29182716059e4d3c2b1a091827",
      proposalsCreated: 18,
      recentActivity: [
        { action: "Created proposal 'Winter Maintenance Plan'", time: "1 hour ago", type: "proposal" },
        { action: "Voted on 'HVAC System Replacement'", time: "2 days ago", type: "vote" }
      ]
    },
    {
      id: 10,
      name: "Amanda Davis",
      alias: "AD",
      unitNumber: "4B",
      votingPower: "2.4%",
      unitValue: "$415,000",
      joinedDate: "Jul 2023",
      role: "Member",
      walletAddress: "0x1b0a918273645e4d3c2b1a091827364d",
      proposalsCreated: 6,
      recentActivity: [
        { action: "Voted on 'Recycling Program Enhancement'", time: "10 hours ago", type: "vote" },
        { action: "Created proposal 'Monthly Social Events'", time: "1 week ago", type: "proposal" }
      ]
    }
  ];

  const member = members.find(m => m.id === parseInt(id || "1"));
  
  if (!member) {
    return <div>Member not found</div>;
  }

  const monthsSinceMember = member.joinedDate === "Jan 2024" ? 11 : 
                           member.joinedDate === "Mar 2023" ? 21 :
                           member.joinedDate === "Aug 2023" ? 16 :
                           member.joinedDate === "Dec 2022" ? 24 :
                           member.joinedDate === "Jun 2024" ? 6 :
                           member.joinedDate === "Feb 2022" ? 34 :
                           member.joinedDate === "Sep 2023" ? 15 :
                           member.joinedDate === "Apr 2024" ? 8 :
                           member.joinedDate === "Nov 2021" ? 37 :
                           member.joinedDate === "Jul 2023" ? 17 : 12;

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
                <h1 className="text-xl font-bold text-gray-900">Member Profile</h1>
                <p className="text-sm text-gray-600">{member.name} - Unit {member.unitNumber}</p>
              </div>
            </div>
            <div className="flex items-center">
              <ConnectWalletButton />
            </div>
          </div>
        </div>
      </header>

      {/* Secondary Navigation */}
      <div className="bg-white/60 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-2">
          <Button variant="ghost" size="sm" asChild>
            <Link to="/members">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Members
            </Link>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Profile Header */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="text-xl bg-gradient-to-br from-blue-600 to-green-600 text-white">
                    {member.alias}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-2xl">{member.name}</CardTitle>
                  <CardDescription className="flex items-center space-x-2 mt-2">
                    <Wallet className="h-4 w-4" />
                    <span>{member.walletAddress}</span>
                  </CardDescription>
                  <div className="flex items-center space-x-2 mt-2">
                    <Badge>{member.role}</Badge>
                    <Badge variant="outline">Unit {member.unitNumber}</Badge>
                    <Badge variant="outline">Active</Badge>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Proposals Created</CardTitle>
                <Vote className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{member.proposalsCreated}</div>
                <p className="text-xs text-muted-foreground">Active contributor</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Voting Power</CardTitle>
                <Wallet className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{member.votingPower}</div>
                <p className="text-xs text-muted-foreground">Unit value: {member.unitValue}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Member Since</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{member.joinedDate}</div>
                <p className="text-xs text-muted-foreground">{monthsSinceMember} months ago</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest actions by {member.name} in the cooperative</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {member.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 py-3 border-b last:border-b-0">
                    <div className="flex-shrink-0">
                      <Vote className={`h-5 w-5 ${
                        activity.type === 'vote' ? 'text-blue-600' : 
                        activity.type === 'proposal' ? 'text-green-600' : 
                        'text-gray-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-gray-600">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
