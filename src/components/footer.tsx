import React from 'react';
import { Icons } from '@/assets/icons';
import { Button } from '@nextui-org/button';

import { EXPLORE } from '@/lib/const';

import { Logo } from './logo';
import { container } from './primitives';
import { HStack } from './ui/h-stack';
import { Input } from './ui/input';
import { StyledButton } from './ui/styled-button';
import { VStack } from './ui/v-stack';

const SOCIAL_ICONS = [<Icons.discord />, <Icons.twitter />, <Icons.instagram />, <Icons.youtube />];
const Footer = () => {
  return (
    <footer className="py-10 px-10 sm:px-[7.2056rem] bg-background2 flex flex-col gap-[1.875rem]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-4 container">
        <VStack className="col-span-1 lg:col-span-4 gap-[1.875rem]">
          <Logo />
          <VStack className="text-base text-grayFooter" spacing={20}>
            <p className="hover:text-white cursor-pointer">A best NFT marketplace</p>
            <VStack className="gap-[15px]">
              <p className="hover:text-white cursor-pointer">Join our community</p>
              <HStack className="gap-2.5 text-grayIcon">
                {SOCIAL_ICONS.map((item, index) => (
                  <button className="hover:text-white" key={index}>
                    {item}
                  </button>
                ))}
              </HStack>
            </VStack>
          </VStack>
        </VStack>

        <VStack className="col-span-1 lg:col-span-3 gap-[1.5625rem]">
          <p className="text-h5 text-white">Explore</p>
          <VStack className="text-base text-grayFooter" spacing={20}>
            {EXPLORE.map((item, index) => (
              <p className="hover:text-white cursor-pointer" key={index}>
                {item}
              </p>
            ))}
          </VStack>
        </VStack>

        <VStack className="col-span-1 sm:col-span-2 lg:col-span-5 gap-[1.5625rem]">
          <p className="text-h5 text-white">Join our weekly digest</p>
          <VStack className="text-base text-grayFooter" spacing={20}>
            <p className="max-w-full break-words sm:w-[20.625rem]">
              Get exclusive promotions & updates straight to your inbox.
            </p>
            <Input
              fullWidth
              wrapClassName="max-w-[26.25rem]"
              className="max-w-[26.25rem]  !bg-white h-[3.75rem] rounded-2xl text-base !text-black2"
              placeholder="Enter your email here"
              suffixClassName="right-0"
              suffix={
                <StyledButton className="rounded-2xl text-base" size="md">
                  Subscribe
                </StyledButton>
              }
            />
          </VStack>
        </VStack>
      </div>
    </footer>
  );
};

export default Footer;
