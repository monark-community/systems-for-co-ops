import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft, 
  Clock, 
  User, 
  DollarSign, 
  Users, 
  Check, 
  X,
  MessageCircle,
  Calendar,
  Tag
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import ConnectWalletButton from "@/components/ConnectWalletButton";
import CoopSelector from "@/components/CoopSelector";

const ProposalDetail = () => {
  const { id } = useParams();
  const [userVote, setUserVote] = useState<'agree' | 'deny' | null>(null);

  const handleVote = (vote: 'agree' | 'deny') => {
    setUserVote(userVote === vote ? null : vote);
  };

  // Mock data - in a real app, this would be fetched based on the ID
  const proposal = {
    id: parseInt(id || "1"),
    title: "Rooftop Garden Installation",
    description: "Install a community rooftop garden with raised beds, irrigation system, and tool storage for all residents to enjoy. This proposal includes the purchase of soil, seeds, gardening tools, and a small storage shed. The garden will be maintained by volunteer residents and will provide fresh produce for the community.",
    longDescription: `This comprehensive rooftop garden project will transform our unused rooftop space into a thriving community garden. The project includes:

• Installation of 12 raised garden beds (4x8 feet each)
• Automatic drip irrigation system with timer controls
• Weather-resistant storage shed for tools and supplies
• Composting area for organic waste
• Seating area with benches for community gatherings
• Safety railings and non-slip walkways

The garden will be managed by a volunteer committee of residents and will operate on a seasonal basis from April through October. All residents will have access to participate in planting, maintenance, and harvesting activities.`,
    status: "active",
    votes: 24,
    totalVotes: 45,
    amount: "$8,500",
    createdAt: "2024-12-20T10:30:00Z",
    category: "Infrastructure",
    proposer: {
      name: "Sarah Chen",
      unit: "5B",
      avatar: "SC",
      id: "sarah-chen"
    },
    timeline: [
      { date: "2024-12-20", event: "Proposal submitted", status: "completed" },
      { date: "2024-12-22", event: "Board review", status: "completed" },
      { date: "2024-12-25", event: "Community discussion period", status: "current" },
      { date: "2025-01-05", event: "Voting deadline", status: "upcoming" },
      { date: "2025-01-10", event: "Implementation begins", status: "upcoming" }
    ],
    comments: [
      {
        id: 1,
        author: "Michael Rodriguez",
        unit: "8C",
        content: "This is a fantastic idea! I'm happy to volunteer for the maintenance committee.",
        timestamp: "2024-12-21T14:30:00Z",
        avatar: "MR",
        memberId: "michael-rodriguez"
      },
      {
        id: 2,
        author: "Emily Johnson",
        unit: "15A",
        content: "I love the composting component. Will this include education about sustainable gardening practices?",
        timestamp: "2024-12-21T16:45:00Z",
        avatar: "EJ",
        memberId: "emily-johnson"
      }
    ],
    supporters: [
      { name: "John Doe", unit: "12A", avatar: "JD", id: "john-doe" },
      { name: "Michael Rodriguez", unit: "8C", avatar: "MR", id: "michael-rodriguez" },
      { name: "Emily Johnson", unit: "15A", avatar: "EJ", id: "emily-johnson" },
      { name: "David Kim", unit: "3D", avatar: "DK", id: "david-kim" }
    ]
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
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

  const getTimelineStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'current': return 'bg-blue-500';
      case 'upcoming': return 'bg-gray-300';
      default: return 'bg-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Proposal Details</h1>
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
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Proposal Header */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <CardTitle className="text-2xl mb-2">{proposal.title}</CardTitle>
                  <p className="text-sm text-gray-500 flex items-center mb-2">
                    <Clock className="h-4 w-4 mr-1" />
                    Submitted on {formatDate(proposal.createdAt)}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      Proposed by{' '}
                      <Link 
                        to={`/member/${proposal.proposer.id}`}
                        className="hover:underline text-blue-600 ml-1"
                      >
                        {proposal.proposer.name}
                      </Link>{' '}
                      (Unit {proposal.proposer.unit})
                    </div>
                    <div className="flex items-center">
                      <Tag className="h-4 w-4 mr-1" />
                      {proposal.category}
                    </div>
                    {proposal.amount && (
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {proposal.amount}
                      </div>
                    )}
                  </div>
                </div>
                <Badge className={getBadgeClass(proposal.status)}>
                  {proposal.status.charAt(0).toUpperCase() + proposal.status.slice(1)}
                </Badge>
              </div>
              <CardDescription className="text-base leading-relaxed">
                {proposal.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Voting Section */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">Current Voting Status</h3>
                    <span className="text-sm text-gray-600">
                      {proposal.votes} of {proposal.totalVotes} votes cast
                    </span>
                  </div>
                  <Progress value={(proposal.votes / proposal.totalVotes) * 100} className="h-3" />
                  
                  {proposal.status === 'active' && (
                    <div className="flex gap-4 pt-2">
                      <Button 
                        className={`flex-1 ${
                          userVote === 'agree' 
                            ? 'bg-green-100 text-green-800 hover:bg-green-200 border-green-300' 
                            : 'border'
                        }`}
                        variant="outline"
                        onClick={() => handleVote('agree')}
                      >
                        <Check className="h-4 w-4 mr-2" />
                        {userVote === 'agree' ? 'Agreed' : 'Agree'}
                      </Button>
                      <Button 
                        className={`flex-1 ${
                          userVote === 'deny' 
                            ? 'bg-red-100 text-red-800 hover:bg-red-200 border-red-300' 
                            : 'border'
                        }`}
                        variant="outline"
                        onClick={() => handleVote('deny')}
                      >
                        <X className="h-4 w-4 mr-2" />
                        {userVote === 'deny' ? 'Denied' : 'Deny'}
                      </Button>
                    </div>
                  )}
                </div>

                <Separator />

                {/* Detailed Description */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Detailed Description</h3>
                  <div className="prose prose-sm max-w-none">
                    {proposal.longDescription.split('\n').map((paragraph, index) => (
                      <p key={index} className="mb-3 text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Timeline */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Project Timeline
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {proposal.timeline.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`w-3 h-3 rounded-full mt-1.5 ${getTimelineStatusColor(item.status)}`} />
                    <div className="flex-1">
                      <p className="font-medium">{item.event}</p>
                      <p className="text-sm text-gray-600">{new Date(item.date).toLocaleDateString()}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Supporters */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Current Supporters ({proposal.supporters.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                {proposal.supporters.map((supporter, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-gradient-to-br from-blue-600 to-green-600 text-white text-xs">
                        {supporter.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <Link 
                        to={`/member/${supporter.id}`}
                        className="font-medium hover:underline text-blue-600"
                      >
                        {supporter.name}
                      </Link>
                      <p className="text-gray-600">Unit {supporter.unit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Comments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageCircle className="h-5 w-5 mr-2" />
                Community Discussion ({proposal.comments.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {proposal.comments.map((comment) => (
                  <div key={comment.id} className="flex space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-gradient-to-br from-blue-600 to-green-600 text-white">
                        {comment.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <Link 
                          to={`/member/${comment.memberId}`}
                          className="font-medium text-sm hover:underline text-blue-600"
                        >
                          {comment.author}
                        </Link>
                        <p className="text-xs text-gray-500">Unit {comment.unit}</p>
                        <p className="text-xs text-gray-500">•</p>
                        <p className="text-xs text-gray-500">{formatDate(comment.timestamp)}</p>
                      </div>
                      <p className="text-sm text-gray-700">{comment.content}</p>
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
