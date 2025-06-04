
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Vote, Wallet, Plus, FileText, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const userRole = "Member"; // This would come from authentication context
  
  const myProposals = [
    {
      id: 1,
      title: "Equipment Maintenance Fund",
      status: "active",
      votes: 12,
      totalVotes: 45,
      createdAt: "2 days ago"
    },
    {
      id: 2,
      title: "Community Event Sponsorship",
      status: "passed",
      votes: 38,
      totalVotes: 45,
      createdAt: "1 week ago"
    }
  ];

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
                <h1 className="text-xl font-bold text-gray-900">CoopDAO Dashboard</h1>
                <p className="text-sm text-gray-600">Welcome back, Member</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline">{userRole}</Badge>
              <Button asChild>
                <Link to="/proposal/new">
                  <Plus className="h-4 w-4 mr-2" />
                  New Proposal
                </Link>
              </Button>
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
                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold">Community Garden Equipment Purchase</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Funding for new gardening tools and equipment for our community garden project
                      </p>
                    </div>
                    <Badge>Active</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Votes: 24 / 45</span>
                      <span>Amount: $2,500</span>
                    </div>
                    <Progress value={53} className="h-2" />
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="flex-1">Vote Yes</Button>
                      <Button size="sm" variant="outline" className="flex-1">Vote No</Button>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold">Monthly Food Distribution Coordinator</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Hire part-time coordinator for our monthly food distribution program
                      </p>
                    </div>
                    <Badge>Active</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Votes: 18 / 45</span>
                      <span>Amount: $1,800/month</span>
                    </div>
                    <Progress value={40} className="h-2" />
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="flex-1">Vote Yes</Button>
                      <Button size="sm" variant="outline" className="flex-1">Vote No</Button>
                    </div>
                  </div>
                </div>
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
                  <div key={proposal.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-semibold">{proposal.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">Created {proposal.createdAt}</p>
                      </div>
                      <Badge variant={proposal.status === 'passed' ? 'default' : 'secondary'}>
                        {proposal.status}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Votes: {proposal.votes} / {proposal.totalVotes}</span>
                        <span>{Math.round((proposal.votes / proposal.totalVotes) * 100)}% approval</span>
                      </div>
                      <Progress value={(proposal.votes / proposal.totalVotes) * 100} className="h-2" />
                    </div>
                  </div>
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
