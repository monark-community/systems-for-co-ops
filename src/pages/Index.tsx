import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, Vote, Wallet, Shield, FileText, TrendingUp, DollarSign, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Index = () => {
  const [progressValue, setProgressValue] = useState(0);
  const [showCards, setShowCards] = useState([false, false, false, false]);

  useEffect(() => {
    // Animate progress bar
    const timer = setTimeout(() => {
      setProgressValue(53);
    }, 500);

    // Animate treasury cards one by one
    const cardTimers = [
      setTimeout(() => setShowCards(prev => [true, ...prev.slice(1)]), 300),
      setTimeout(() => setShowCards(prev => [prev[0], true, ...prev.slice(2)]), 600),
      setTimeout(() => setShowCards(prev => [...prev.slice(0, 2), true, prev[3]]), 900),
      setTimeout(() => setShowCards(prev => [...prev.slice(0, 3), true]), 1200),
    ];

    return () => {
      clearTimeout(timer);
      cardTimers.forEach(clearTimeout);
    };
  }, []);

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

      {/* Demo Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800">
              DEMO FEATURES
            </Badge>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              See CoopDAO in Action
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These examples showcase how cooperatives use our platform to manage their operations transparently and efficiently.
            </p>
          </div>

          <div className="space-y-24">
            {/* Treasury Management Demo */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Treasury Management</h4>
                </div>
                <p className="text-gray-600 text-lg">
                  Track funds, allocate budgets, and manage expenses with complete transparency. 
                  Every transaction is recorded on-chain and requires community approval.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Multi-signature security for all transactions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Real-time budget tracking and reporting</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Automated expense approval workflows</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className={`bg-gradient-to-br from-green-50 to-green-100 border-green-200 transition-all duration-500 ${showCards[0] ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
                  <CardHeader className="pb-3">
                    <CardDescription className="text-green-700">Total Treasury</CardDescription>
                    <CardTitle className="text-2xl text-green-800">$45,230</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-green-600">Example: Community Garden Co-op</p>
                  </CardContent>
                </Card>
                <Card className={`bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 transition-all duration-500 ${showCards[1] ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
                  <CardHeader className="pb-3">
                    <CardDescription className="text-blue-700">Monthly Budget</CardDescription>
                    <CardTitle className="text-2xl text-blue-800">$8,500</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-blue-600">Allocated for operations</p>
                  </CardContent>
                </Card>
                <Card className={`bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 transition-all duration-500 ${showCards[2] ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
                  <CardHeader className="pb-3">
                    <CardDescription className="text-purple-700">Active Proposals</CardDescription>
                    <CardTitle className="text-2xl text-purple-800">5</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-purple-600">Awaiting member votes</p>
                  </CardContent>
                </Card>
                <Card className={`bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 transition-all duration-500 ${showCards[3] ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
                  <CardHeader className="pb-3">
                    <CardDescription className="text-orange-700">Pending Payments</CardDescription>
                    <CardTitle className="text-2xl text-orange-800">$4,200</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-orange-600">Ready for execution</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Proposal Voting Demo */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg text-blue-900">Equipment Purchase Proposal</CardTitle>
                        <CardDescription className="mt-2 text-blue-700">
                          Example: New gardening tools for community garden
                        </CardDescription>
                      </div>
                      <Badge className="bg-blue-200 text-blue-800">Active</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-blue-700">Requested Amount:</span>
                        <span className="font-semibold text-lg text-blue-900">$2,500</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm text-blue-700">
                          <span>Votes: 24 / 45 members</span>
                          <span>Time left: 3 days</span>
                        </div>
                        <Progress value={progressValue} className="h-2 transition-all duration-1000 ease-out" />
                      </div>
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">Vote Yes</Button>
                        <Button size="sm" variant="outline" className="flex-1 border-blue-300">Vote No</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Vote className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Democratic Proposal System</h4>
                </div>
                <p className="text-gray-600 text-lg">
                  Members can submit proposals for funding, policy changes, or new initiatives. 
                  The community votes based on predetermined rules and thresholds.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Submit proposals with detailed budgets</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Transparent voting with real-time results</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">Automatic execution upon approval</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Member Management Demo */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Member Management</h4>
                </div>
                <p className="text-gray-600 text-lg">
                  Wallet-based membership with role assignments and participation tracking. 
                  Build trust through transparent contribution metrics and reputation systems.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Decentralized identity verification</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Role-based permissions and voting weights</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">Participation tracking and rewards</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <Card className="text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                    <CardContent className="p-4">
                      <div className="w-8 h-8 bg-purple-200 rounded-full mx-auto mb-2 flex items-center justify-center animate-bounce">
                        <span className="text-sm font-semibold text-purple-700">45</span>
                      </div>
                      <p className="text-xs text-purple-600">Active Members</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                    <CardContent className="p-4">
                      <div className="w-8 h-8 bg-green-200 rounded-full mx-auto mb-2 flex items-center justify-center animate-pulse">
                        <span className="text-sm font-semibold text-green-700">12</span>
                      </div>
                      <p className="text-xs text-green-600">Core Members</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
                    <CardContent className="p-4">
                      <div className="w-8 h-8 bg-yellow-200 rounded-full mx-auto mb-2 flex items-center justify-center animate-bounce">
                        <span className="text-sm font-semibold text-yellow-700">8</span>
                      </div>
                      <p className="text-xs text-yellow-600">New Members</p>
                    </CardContent>
                  </Card>
                </div>
                <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-semibold">JD</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Jane Doe</p>
                          <p className="text-sm text-gray-600">Core Member • 89% participation</p>
                        </div>
                      </div>
                      <Badge className="bg-indigo-100 text-indigo-800">Active</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Proposals */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800">
              EXAMPLE PROPOSALS
            </Badge>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Active Community Proposals
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sample proposals showing how cooperatives make decisions together through transparent voting processes.
            </p>
          </div>
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
