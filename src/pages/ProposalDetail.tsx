
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, ArrowLeft, Clock, Check, X, MessageSquare, User } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import ConnectWalletButton from "@/components/ConnectWalletButton";

const ProposalDetail = () => {
  const { id } = useParams();
  const [userVote, setUserVote] = useState<'agree' | 'deny' | null>(null);

  // Mock proposal data - in a real app, this would be fetched based on the ID
  const proposal = {
    id: parseInt(id || '1'),
    title: "Community Garden Equipment Purchase",
    description: "This proposal aims to fund the purchase of new gardening tools and equipment for our community garden project. The equipment will include shovels, rakes, watering systems, and protective gear for volunteers.",
    status: "active",
    votes: 24,
    totalVotes: 45,
    amount: "$2,500",
    createdAt: "2024-12-20T10:30:00Z",
    category: "Infrastructure",
    author: "Alice Johnson",
    authorWallet: "0x1234567890abcdef",
    discussion: [
      {
        id: 1,
        author: "Bob Smith",
        wallet: "0xabcdef1234567890",
        message: "This is a great initiative. Our current tools are getting worn out.",
        timestamp: "2024-12-20T14:20:00Z"
      },
      {
        id: 2,
        author: "Carol Davis",
        wallet: "0x9876543210fedcba",
        message: "I suggest we also consider composting equipment in this proposal.",
        timestamp: "2024-12-20T16:45:00Z"
      }
    ]
  };

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

  const getBadgeClass = (status: string) => {
    switch (status) {
      case 'active': return 'bg-black text-white border-black';
      case 'passed': return 'bg-green-100 text-green-800 border-green-300';
      case 'denied': return 'bg-red-100 text-red-800 border-red-300';
      case 'abandoned': return 'bg-gray-100 text-gray-600 border-gray-300';
      default: return '';
    }
  };

  const handleVote = (vote: 'agree' | 'deny') => {
    setUserVote(userVote === vote ? null : vote);
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
                <h1 className="text-xl font-bold text-gray-900">Proposal Details</h1>
                <p className="text-sm text-gray-600">Review and vote on this proposal</p>
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
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Proposal Header */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2">{proposal.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {formatDate(proposal.createdAt)}
                    </span>
                    <span>Category: {proposal.category}</span>
                    <span>Amount: {proposal.amount}</span>
                  </div>
                </div>
                <Badge className={getBadgeClass(proposal.status)}>
                  {proposal.status}
                </Badge>
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-sm bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                    {proposal.author.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{proposal.author}</p>
                  <p className="text-xs text-gray-600">{proposal.authorWallet.slice(0, 12)}...</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">{proposal.description}</p>
              
              {/* Voting Progress */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Current Votes: {proposal.votes} / {proposal.totalVotes}</span>
                  <span>{Math.round((proposal.votes / proposal.totalVotes) * 100)}% participation</span>
                </div>
                <Progress value={(proposal.votes / proposal.totalVotes) * 100} className="h-3" />
              </div>

              {/* Voting Buttons */}
              {proposal.status === 'active' && (
                <div className="flex gap-4">
                  <Button 
                    className={`flex-1 ${
                      userVote === 'agree' 
                        ? 'bg-green-100 text-green-800 hover:bg-green-200 border-green-300' 
                        : ''
                    }`}
                    variant={userVote === 'agree' ? 'outline' : 'default'}
                    onClick={() => handleVote('agree')}
                  >
                    {userVote === 'agree' && <Check className="h-4 w-4 mr-2" />}
                    Agree
                  </Button>
                  <Button 
                    className={`flex-1 ${
                      userVote === 'deny' 
                        ? 'bg-red-100 text-red-800 hover:bg-red-200 border-red-300' 
                        : ''
                    }`}
                    variant="outline"
                    onClick={() => handleVote('deny')}
                  >
                    {userVote === 'deny' && <X className="h-4 w-4 mr-2" />}
                    Deny
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Discussion */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Discussion ({proposal.discussion.length})
              </CardTitle>
              <CardDescription>Community comments and feedback</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {proposal.discussion.map((comment) => (
                  <div key={comment.id} className="flex gap-3 p-4 bg-gray-50 rounded-lg">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-sm">
                        {comment.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-sm">{comment.author}</span>
                        <span className="text-xs text-gray-500">{comment.wallet.slice(0, 8)}...</span>
                        <span className="text-xs text-gray-500">{formatDate(comment.timestamp)}</span>
                      </div>
                      <p className="text-sm text-gray-700">{comment.message}</p>
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

export default ProposalDetail;
