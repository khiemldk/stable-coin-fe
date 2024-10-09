'use client';

import { TableBody, TableProps, TableRow } from '@nextui-org/react';

import { cn } from '@/lib/utils';

import { TableRowSkeleton } from './skeleton/table-row-skeleton';

interface Props extends Omit<TableProps, 'children'> {
  headers: { width?: string; title: string }[];
  body?: string[][];
  children?: any;
  className?: string;
  isLoading?: boolean;
}
interface TableRowProps {
  children: React.ReactNode;
  index: number;
  className?: string;
}
interface TableCellProps {
  children: React.ReactNode;
  index: number;
  className?: string;
  headers: { width?: string; title: string }[];
}
interface TableHeaderRowProps {
  children: React.ReactNode;
  className?: string;
}
interface TableHeaderProps {
  children: React.ReactNode;
  className?: string;
  index: number;
  header: { width?: string; title: string };
}

const TableHeaderRow = ({ children, className }: TableHeaderRowProps) => (
  <div
    className={cn(
      'flex items-center rounded-[1.25rem] gap-4  bg-transparent border border-grayBorder px-5 py-3',
      className
    )}
  >
    {children}
  </div>
);

const TableHeader = ({ children, className, index, header }: TableHeaderProps) => (
  <p key={index} className={cn('text-base  font-bold  text-gray ', className)} style={{ width: header.width }}>
    {children}
  </p>
);

const TableRows = ({ children, index, className }: TableRowProps) => (
  <div
    key={index}
    className={cn('flex items-center gap-4  w-fit rounded-[1.25rem] bg-background2 py-3 px-5', className)}
  >
    {children}
  </div>
);

const TableCell = ({ children, className, index, headers }: TableCellProps) => (
  <p
    key={index}
    className={cn('text-base font-bold break-all text-white', className)}
    style={{ width: headers[index].width }}
  >
    {children}
  </p>
);

const Table = ({ headers, body = [], children, isLoading, ...props }: Props) => {
  return (
    <div className="flex flex-col gap-5 container overflow-x-auto w-fit">
      <TableHeaderRow>
        {headers &&
          headers.map((header, index) => (
            <TableHeader key={index} index={index} header={header}>
              {header.title}
            </TableHeader>
          ))}
      </TableHeaderRow>
      {isLoading && <TableRowSkeleton />}
      {body ? (
        <div className="flex flex-col gap-5">
          {body.map((row, index) => (
            <TableRows key={index} index={index}>
              {row.map((cell, index) => (
                <TableCell key={index} index={index} headers={headers}>
                  {cell}
                </TableCell>
              ))}
            </TableRows>
          ))}
        </div>
      ) : (
        children
      )}
    </div>
  );
};
export { Table, TableHeader, TableHeaderRow, TableCell, TableBody, TableRows };
