import { AccordionItem, Accordion as AccordionNextUI } from '@nextui-org/react';

interface Props {
  value: string | Set<string | number>;
  setValue: React.Dispatch<React.SetStateAction<'all' | Set<string | number>>>;
  items: {
    title: string;
    content: string;
  }[];
}

export default function Accordion({ value, setValue, items, ...props }: Props) {
  return (
    <AccordionNextUI
      selectionMode="multiple"
      className="bg-transparent border-grayBorder border !px-0 rounded-[.3125rem] overflow-hidden"
      selectedKeys={value}
      onSelectionChange={setValue}
      itemClasses={{
        title: 'text-white text-h4',
        heading: 'bg-background2  ',
        content: 'pl-[1.875rem] py-2.5 pr-2.5 text-base',
      }}
      {...props}
    >
      {items.map((item, index) => (
        <AccordionItem
          classNames={{ trigger: 'px-[1.875rem] py-2.5 ' }}
          key={index}
          hideIndicator
          aria-label={item.title}
          title={item.title}
        >
          {item.content}
        </AccordionItem>
      ))}
    </AccordionNextUI>
  );
}
