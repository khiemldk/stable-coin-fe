'use client';

import React, { useState } from 'react';
import {
  Button,
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NavbarNextUI,
  Tooltip,
} from '@nextui-org/react';

import { shortenWalletAddress } from '@/lib/utils';

import { Logo } from './logo';
import { HStack } from './ui/h-stack';
import { Show } from './ui/show';
import { StyledButton } from './ui/styled-button';

interface NavLinkItemProps {
  label: string;
  href: any;
}
export const navLinkItems: NavLinkItemProps[] = [
  {
    label: 'Marketplace',
    href: '#',
  },
];
const EXAMPLE_ADDRESS = '0x07e34d718c314ae363ba74dccc5e15c46410dcaf665a9bd122ea963d79d887c4';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isLogin, setIsLogin] = useState(false);

  return (
    <NavbarNextUI
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: 'bg-transparent  w-screen',
        wrapper: 'px-0 container sm:pl-[3.625rem] sm:pr-[1.5625rem] pl-5 pr-5 max-w-[1280px]',
        item: ['flex', 'relative', 'cursor-pointer', 'h-full', 'w-fit', 'items-center', 'group'],
      }}
      isBlurred={false}
      maxWidth="2xl"
      height={'4.875rem'}
      className="group  w-screen bg-background2 px-0"
    >
      <NavbarContent>
        <NavbarMenuToggle
          style={{ color: 'white' }}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navLinkItems.map((item, index) => (
          <NavbarItem key={item.label}>
            <Link className="text-base bg-gradient-2 w-fit bg-clip-text text-transparent" href={item?.href}>
              {item?.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Show when={!isLogin}>
            <StyledButton
              className="!px-2 sm:!px-[3.125rem] font-medium"
              variant="solid"
              size="sm"
              onClick={() => setIsLogin(true)}
            >
              Connect Wallet
            </StyledButton>
          </Show>
          <Show when={isLogin}>
            <HStack className="gap-2.5 hidden lg:flex">
              <div className="w-[3.125rem] aspect-square rounded-full bg-default-300" />
              <p className="text-gray text-sm">{shortenWalletAddress(EXAMPLE_ADDRESS)}</p>
            </HStack>
            <Tooltip content={<p className="w-52 break-all ">{EXAMPLE_ADDRESS}</p>} className="lg:hidden flex">
              <div className="w-[3.125rem] aspect-square rounded-full bg-default-300 lg:hidden flex" />
            </Tooltip>
          </Show>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {navLinkItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className=" text-h5 bg-gradient-2 w-fit bg-clip-text text-transparent" href="#" size="lg">
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarNextUI>
  );
}
