
import {
  BarChart3,
  Layers3,
  Handshake,
  ShieldCheck,
  MapPin,
  TrendingUp,
  CircleDollarSign,
  Cpu,
  CreditCard,
  Globe2,
  Target,
  Search,
  UsersRound,
  FileText,
  Zap,
  Database,
  Workflow,
  Heart,
  CalendarCheck,
  BriefcaseBusiness,
  Sparkles
} from 'lucide-react';

const ICONS = {
  chart: BarChart3,
  layers: Layers3,
  handshake: Handshake,
  shield: ShieldCheck,
  pin: MapPin,
  trending: TrendingUp,
  coins: CircleDollarSign,
  cpu: Cpu,
  credit: CreditCard,
  globe: Globe2,
  chess: Target,
  search: Search,
  users: UsersRound,
  file: FileText,
  zap: Zap,
  database: Database,
  gear: Workflow,
  heart: Heart,
  calendar: CalendarCheck,
  briefcase: BriefcaseBusiness,
  target: Target,
  sparkle: Sparkles
};

export default function Icon({ name, size = 24, ...rest }) {
  const Component = ICONS[name] || Sparkles;

  return (
    <Component
      size={size}
      strokeWidth={1.65}
      {...rest}
    />
  );
}
