import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Vote, Wallet, Plus, FileText, Clock, ChevronRight, Check, X, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ConnectWalletButton from "@/components/ConnectWalletButton";

const Dashboard = () => {
  const navigate = useNavigate();
  const userAlias = "John Doe";
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [votes, setVotes] = useState<Record<number, 'agree' | 'deny' | null>>({});

  const handleVote = (proposalId: number, vote: 'agree' | 'deny') => {
    setVotes(prev => ({
      ...prev,
      [proposalId]: prev[proposalId] === vote ? null : vote
    }));
  };

  const activeProposals = [
    {
      id: 1,
      title: "Community Garden Equipment Purchase",
      description: "Funding for new gardening tools and equipment for our community garden project",
      status: "active",
      votes: 24,
      totalVotes: 45,
      amount: "$2,500",
      createdAt: "2024-12-20T10:30:00Z",
      category: "Infrastructure"
    },
    {
      id: 2,
      title: "Monthly Food Distribution Coordinator",
      description: "Hire part-time coordinator for our monthly food distribution program",
      status: "active",
      votes: 18,
      totalVotes: 45,
      amount: "$1,800/month",
      createdAt: "2024-12-19T14:15:00Z",
      category: "Personnel"
    }
  ];

  const myProposals = [
    {
      id: 3,
      title: "Equipment Maintenance Fund",
      status: "active",
      votes: 12,
      totalVotes: 45,
      createdAt: "2024-12-18T09:00:00Z",
      category: "Maintenance"
    },
    {
      id: 4,
      title: "Community Event Sponsorship",
      status: "passed",
      votes: 38,
      totalVotes: 45,
      createdAt: "2024-12-15T16:45:00Z",
      category: "Events"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getBadgeVariant = (status: string) => {
    switch (status) {
      case 'active': return 'default';
      case 'passed': return 'secondary';
      case 'denied': return 'destructive';
      case 'abandoned': return 'outline';
      default: return 'default';
    }
  };

  const getBadgeClass = (status: string) => {
    switch (status) {
      case 'active': return 'bg-black text-white border-black';
      case 'passed': return 'bg-green-100 text-green-800 border-green-300';
      case 'denied': return 'bg-red-100 text-red-800 border-red-300';
      case 'abandoned': return 'bg-gray-100 text-gray-600 border-gray-300';
      default: return '';
    }
  };

  const ProposalCard = ({ proposal, showVoting = false }: { proposal: any, showVoting?: boolean }) => {
    const userVote = votes[proposal.id];
    
    return (
      <div className="border rounded-lg p-4">
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <Link 
              to={`/proposal/${proposal.id}`}
              className="hover:underline"
            >
              <h4 className="font-semibold flex items-center gap-1">
                {proposal.title}
                <ChevronRight className="h-4 w-4" />
              </h4>
            </Link>
            {proposal.description && (
              <p className="text-sm text-gray-600 mt-1">{proposal.description}</p>
            )}
            <p className="text-xs text-gray-500 mt-2">
              <Clock className="h-3 w-3 inline mr-1" />
              {formatDate(proposal.createdAt)}
            </p>
          </div>
          <Badge className={getBadgeClass(proposal.status)}>
            {proposal.status}
          </Badge>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Votes: {proposal.votes} / {proposal.totalVotes}</span>
            {proposal.amount && <span>Amount: {proposal.amount}</span>}
          </div>
          <Progress value={(proposal.votes / proposal.totalVotes) * 100} className="h-2" />
          {showVoting && (
            <div className="flex gap-2 pt-2">
              <Button 
                size="sm" 
                className={`flex-1 ${
                  userVote === 'agree' 
                    ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                    : ''
                }`}
                variant={userVote === 'agree' ? 'outline' : 'default'}
                onClick={() => handleVote(proposal.id, 'agree')}
              >
                {userVote === 'agree' && <Check className="h-4 w-4 mr-1" />}
                Agree
              </Button>
              <Button 
                size="sm" 
                className={`flex-1 ${
                  userVote === 'deny' 
                    ? 'bg-red-100 text-red-800 hover:bg-red-200' 
                    : ''
                }`}
                variant={userVote === 'deny' ? 'outline' : 'outline'}
                onClick={() => handleVote(proposal.id, 'deny')}
              >
                {userVote === 'deny' && <X className="h-4 w-4 mr-1" />}
                Deny
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  };

  const recentActivity = [
    {
      id: 1,
      action: "Voted on",
      proposal: "Community Garden Equipment",
      time: "2 hours ago",
      type: "vote"
    },
    {
      id: 2,
      action: "Created proposal",
      proposal: "Equipment Maintenance Fund",
      time: "2 days ago",
      type: "create"
    },
    {
      id: 3,
      action: "Payment executed",
      proposal: "Monthly Coordinator Salary",
      time: "3 days ago",
      type: "payment"
    }
  ];

  const memberStats = {
    totalMembers: 45,
    activeProposals: 5,
    myVotingPower: "2.2%",
    participationRate: "87%"
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
                <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-sm text-gray-600">Welcome back, {userAlias}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button asChild>
                <Link to="/proposal/new">
                  <Plus className="h-4 w-4 mr-2" />
                  New Proposal
                </Link>
              </Button>
              <ConnectWalletButton />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Members</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{memberStats.totalMembers}</div>
              <p className="text-xs text-muted-foreground">Active cooperative members</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Proposals</CardTitle>
              <Vote className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{memberStats.activeProposals}</div>
              <p className="text-xs text-muted-foreground">Requiring your vote</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">My Voting Power</CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{memberStats.myVotingPower}</div>
              <p className="text-xs text-muted-foreground">Based on participation</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Participation Rate</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{memberStats.participationRate}</div>
              <p className="text-xs text-muted-foreground">Last 30 days</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search proposals..."
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
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="passed">Passed</SelectItem>
              <SelectItem value="denied">Denied</SelectItem>
              <SelectItem value="abandoned">Abandoned</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="proposals" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="proposals">Active Proposals</TabsTrigger>
            <TabsTrigger value="my-proposals">My Proposals</TabsTrigger>
            <TabsTrigger value="treasury">Treasury</TabsTrigger>
            <TabsTrigger value="activity">Recent Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="proposals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Proposals Requiring Your Vote</CardTitle>
                <CardDescription>Review and vote on active cooperative proposals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeProposals.map((proposal) => (
                  <ProposalCard key={proposal.id} proposal={proposal} showVoting={true} />
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="my-proposals" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Proposals</CardTitle>
                <CardDescription>Track the status of proposals you've submitted</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {myProposals.map((proposal) => (
                  <ProposalCard key={proposal.id} proposal={proposal} />
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="treasury" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Treasury Management</CardTitle>
                <CardDescription>Overview of cooperative funds and spending</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Current Balance</h4>
                    <div className="text-3xl font-bold text-green-600">$45,230</div>
                    <p className="text-sm text-gray-600">Available for new proposals</p>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold">Monthly Allocation</h4>
                    <div className="text-3xl font-bold">$8,500</div>
                    <Progress value={65} className="h-2" />
                    <p className="text-sm text-gray-600">65% of monthly budget allocated</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold mb-4">Recent Transactions</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm">Website Redesign Initiative</span>
                      <span className="text-sm font-medium text-green-600">-$3,200</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm">Monthly Coordinator Payment</span>
                      <span className="text-sm font-medium text-green-600">-$1,800</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm">Member Contribution - Alice</span>
                      <span className="text-sm font-medium text-blue-600">+$500</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your participation in cooperative governance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center space-x-4 py-3 border-b last:border-b-0">
                      <div className="flex-shrink-0">
                        {activity.type === 'vote' && <Vote className="h-5 w-5 text-blue-600" />}
                        {activity.type === 'create' && <Plus className="h-5 w-5 text-green-600" />}
                        {activity.type === 'payment' && <Wallet className="h-5 w-5 text-purple-600" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          {activity.action} "{activity.proposal}"
                        </p>
                        <p className="text-xs text-gray-600 flex items-center mt-1">
                          <Clock className="h-3 w-3 mr-1" />
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
