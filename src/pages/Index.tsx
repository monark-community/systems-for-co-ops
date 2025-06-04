
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, Vote, Wallet, Shield, FileText, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const mockProposals = [
    {
      id: 1,
      title: "Community Garden Equipment Purchase",
      description: "Funding for new gardening tools and equipment for our community garden project",
      amount: "$2,500",
      votes: 24,
      totalMembers: 45,
      status: "active",
      timeLeft: "3 days"
    },
    {
      id: 2,
      title: "Monthly Food Distribution Coordinator",
      description: "Hire part-time coordinator for our monthly food distribution program",
      amount: "$1,800/month",
      votes: 18,
      totalMembers: 45,
      status: "active",
      timeLeft: "5 days"
    },
    {
      id: 3,
      title: "Website Redesign Initiative",
      description: "Update our cooperative's website to better serve our community",
      amount: "$3,200",
      votes: 31,
      totalMembers: 45,
      status: "passed",
      timeLeft: "Completed"
    }
  ];

  const treasuryStats = {
    totalFunds: "$45,230",
    monthlyBudget: "$8,500",
    activeProposals: 5,
    pendingPayments: "$4,200"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">CoopDAO</h1>
                <p className="text-sm text-gray-600">Cooperative Governance Platform</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" asChild>
                <Link to="/dashboard">Dashboard</Link>
              </Button>
              <Button asChild>
                <Link to="/join">Join Cooperative</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Decentralized Operating System
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
              for Cooperatives
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Organize transparently without bureaucratic overhead. Enable wallet-based membership, 
            proposal voting, and shared treasury management for your cooperative community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600">
              Start Your Cooperative
            </Button>
            <Button size="lg" variant="outline">
              View Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Everything Your Cooperative Needs
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Vote className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Democratic Voting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Submit proposals and vote based on agreed-upon rules. Every member's voice matters in shaping your cooperative's future.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Wallet className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Shared Treasury</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Manage funds transparently with multi-signature security. Track expenses and ensure accountable financial management.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Secure & Transparent</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Smart contracts ensure fair governance while maintaining complete transparency and security for all cooperative operations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Treasury Overview */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Treasury Overview
          </h3>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Funds</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{treasuryStats.totalFunds}</div>
                <p className="text-xs text-muted-foreground">Available for allocation</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Budget</CardTitle>
                <Wallet className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{treasuryStats.monthlyBudget}</div>
                <p className="text-xs text-muted-foreground">Allocated this month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Proposals</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">{treasuryStats.activeProposals}</div>
                <p className="text-xs text-muted-foreground">Awaiting votes</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">{treasuryStats.pendingPayments}</div>
                <p className="text-xs text-muted-foreground">Ready for execution</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Active Proposals */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Current Proposals
          </h3>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {mockProposals.map((proposal) => (
              <Card key={proposal.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{proposal.title}</CardTitle>
                      <CardDescription className="mt-2">{proposal.description}</CardDescription>
                    </div>
                    <Badge 
                      variant={proposal.status === 'passed' ? 'default' : 'secondary'}
                      className={proposal.status === 'passed' ? 'bg-green-100 text-green-800' : ''}
                    >
                      {proposal.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Requested Amount:</span>
                      <span className="font-semibold text-lg">{proposal.amount}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Votes: {proposal.votes} / {proposal.totalMembers}</span>
                        <span>Time left: {proposal.timeLeft}</span>
                      </div>
                      <Progress 
                        value={(proposal.votes / proposal.totalMembers) * 100} 
                        className="h-2"
                      />
                    </div>

                    {proposal.status === 'active' && (
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" className="flex-1">Vote Yes</Button>
                        <Button size="sm" variant="outline" className="flex-1">Vote No</Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <Users className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">CoopDAO</span>
          </div>
          <p className="text-gray-400 mb-4">
            Empowering cooperatives through decentralized governance and transparent decision-making.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
            <a href="#" className="hover:text-white transition-colors">Community</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
