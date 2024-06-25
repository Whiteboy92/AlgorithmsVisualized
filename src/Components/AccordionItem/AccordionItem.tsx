import React, { useState } from 'react';
import { AccordionItemTitle, AccordionItemContent, ExpandMoreIcon } from './AccordionItem.styled';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <AccordionItemTitle onClick={() => setIsOpen(!isOpen)}>
        {title}
        <ExpandMoreIcon>{isOpen ? 'expand_less' : 'expand_more'}</ExpandMoreIcon>
      </AccordionItemTitle>
      {isOpen && <AccordionItemContent>{children}</AccordionItemContent>}
    </div>
  );
};

export default AccordionItem;
