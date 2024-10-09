import { type ForwardRefExoticComponent, type RefAttributes, type SVGProps } from 'react';
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  LucideArrowUpRightFromCircle,
  LucideArrowUpRightFromSquare,
} from 'lucide-react';

import arrowLeft from './svg/ArrowLeft.svg';
import arrowRight from './svg/ArrowRight.svg';
import calendar from './svg/Calendar.svg';
import coinbase from './svg/Coinbase.svg';
import discord from './svg/DiscordLogo.svg';
import dotSvg from './svg/Dot.svg';
import envelopeSimple from './svg/EnvelopeSimple.svg';
import ethereum from './svg/Ethereum.svg';
import eye from './svg/Eye.svg';
import eyeSlash from './svg/EyeSlash.svg';
import globe from './svg/Globe.svg';
import instagram from './svg/InstagramLogo.svg';
import list from './svg/List.svg';
import lockKey from './svg/LockKey.svg';
import magnifyingGlass from './svg/MagnifyingGlass.svg';
import metamask from './svg/Metamask.svg';
import plus from './svg/Plus.svg';
import rocket from './svg/Rocket.svg';
import rocketLaunch from './svg/RocketLaunch.svg';
import storefront from './svg/Storefront.svg';
import success from './svg/Success.svg';
import trendUp from './svg/TrendUp.svg';
import twitter from './svg/TwitterLogo.svg';
import user from './svg/User.svg';
import userCircle from './svg/UserCircle.svg';
import wallet from './svg/Wallet.svg';
import walletConnect from './svg/WalletConnect.svg';
import youtube from './svg/YoutubeLogo.svg';

const IconList = {
  arrowLeft,
  arrowRight,
  coinbase,
  instagram,
  calendar,
  twitter,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  discord,
  youtube,
  copy: Copy,
  envelopeSimple,
  eye,
  eyeSlash,
  globe,
  list,
  lockKey,
  magnifyingGlass,
  metamask,
  plus,
  rocket,
  rocketLaunch,
  storefront,
  trendUp,
  user,
  userCircle,
  wallet,
  walletConnect,
  dotSvg,
  ethereum,
  copyCheck: Check,
  success,
  link: LucideArrowUpRightFromSquare,
};

type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ComponentAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;
interface IconProps extends ComponentAttributes {
  size?: string | number;
  absoluteStrokeWidth?: boolean;
}

export type Icon = ForwardRefExoticComponent<IconProps>;

export const Icons = IconList as Record<keyof typeof IconList, Icon>;
