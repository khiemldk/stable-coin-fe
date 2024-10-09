import { FC } from 'react';
import { Icons } from '@/assets/icons';

import { cn } from '@/lib/utils';
import { useCopy } from '@/hooks/useCopy';

interface ListItemProps {
  label: string;
  value: string;
  copyValue: string;
  className?: string;
}

export const ListItem: FC<ListItemProps> = ({ label, value, copyValue, className }) => {
  const [copied, copy] = useCopy();
  return (
    <div className={cn('flex items-center justify-between mb-4', className)}>
      <div>
        <p className="text-neutral-03 text-medium font-medium">{label}</p>
        <p className="text-small text-neutral-03">{value}</p>
      </div>
      <div onClick={() => copy(copyValue)} className="cursor-pointer">
        {copied ? <Icons.copyCheck size={16} color="green" /> : <Icons.copy size={16} />}
      </div>
    </div>
  );
};
