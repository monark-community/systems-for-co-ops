
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, ChevronRight, Check, X } from "lucide-react";
import { Link } from "react-router-dom";

interface Proposal {
  id: number;
  title: string;
  description?: string;
  status: string;
  votes: number;
  totalVotes: number;
  amount?: string;
  createdAt: string;
  category: string;
}

interface ProposalCardProps {
  proposal: Proposal;
  showVoting?: boolean;
  userVote?: 'agree' | 'deny' | null;
  onVote?: (proposalId: number, vote: 'agree' | 'deny') => void;
}

const ProposalCard = ({ proposal, showVoting = false, userVote, onVote }: ProposalCardProps) => {
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
    if (onVote) {
      onVote(proposal.id, vote);
    }
  };

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
          <p className="text-xs text-gray-500 mt-1 flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {formatDate(proposal.createdAt)}
          </p>
          {proposal.description && (
            <p className="text-sm text-gray-600 mt-2">{proposal.description}</p>
          )}
        </div>
        <Badge className={getBadgeClass(proposal.status)}>
          {proposal.status.charAt(0).toUpperCase() + proposal.status.slice(1)}
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
                  ? 'bg-green-100 text-green-800 hover:bg-green-200 border-green-300' 
                  : 'border'
              }`}
              variant="outline"
              onClick={() => handleVote('agree')}
            >
              <Check className="h-4 w-4 mr-1" />
              {userVote === 'agree' ? 'Agreed' : 'Agree'}
            </Button>
            <Button 
              size="sm" 
              className={`flex-1 ${
                userVote === 'deny' 
                  ? 'bg-red-100 text-red-800 hover:bg-red-200 border-red-300' 
                  : 'border'
              }`}
              variant="outline"
              onClick={() => handleVote('deny')}
            >
              <X className="h-4 w-4 mr-1" />
              {userVote === 'deny' ? 'Denied' : 'Deny'}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProposalCard;
