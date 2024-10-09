'use client';

import React from 'react';
import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Modal as ModalNextUI,
  ModalProps,
  useDisclosure,
} from '@nextui-org/react';

import { cn } from '@/lib/utils';

interface Props extends Omit<ModalProps, 'children'> {
  children?: React.ReactNode;
  header?: string | React.ReactNode;
  body?: string | React.ReactNode;
  footer?: string | React.ReactNode;
}
export default function Modal({ ...props }: Props) {
  const { isOpen, onClose } = useDisclosure();

  return (
    <>
      <ModalNextUI
        isOpen={props?.isOpen || isOpen}
        onClose={props.onClose || onClose}
        closeButton={false}
        className={cn(
          'w-[21rem] h-fit over overflow-scroll bg-white-01 text-white shadow-medium border-neutral-02 border my-auto',
          props?.className
        )}
        {...props}
        classNames={{
          closeButton:
            'active:bg-transparent hover:bg-transparent text-white w-4 h-4 text-sm mr-4 mt-3 font-normal hidden',
        }}
      >
        <ModalContent className="px-3 py-5">
          {props?.children || (
            <>
              <ModalHeader className="text-sm p-0 mb-3 uppercase">{props?.header}</ModalHeader>
              <ModalBody className="p-0">{props.body}</ModalBody>
              <ModalFooter className="p-0">{props?.footer}</ModalFooter>
            </>
          )}
        </ModalContent>
      </ModalNextUI>
    </>
  );
}
