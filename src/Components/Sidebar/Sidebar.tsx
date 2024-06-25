import React, { useState, useEffect } from 'react';
import { SidebarContainer, AccordionItemText } from './Sidebar.styled';
import { sideBarItems } from './consts';
import AccordionItem from '../AccordionItem/AccordionItem';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [isActive, setIsActive] = useState('');
  const location = useLocation();

  useEffect(() => {
    sideBarItems.forEach((item, index) => {
      item.items.forEach((subItem, subIndex) => {
        if (location.pathname === subItem.path) {
          setIsActive(`${subIndex}-${index}`);
        }
      });
    });
  }, [location.pathname]);

  return (
    <SidebarContainer>
      {sideBarItems.map((item, index) => (
        <AccordionItem key={index} title={item.title}>
          {item.items.map((subItem, subIndex) => (
            <AccordionItemText
              key={subIndex}
              isActive={isActive === `${subIndex}-${index}`}
              onClick={() => setIsActive(`${subIndex}-${index}`)}
            >
              <Link to={subItem.path}>{subItem.name}</Link>
            </AccordionItemText>
          ))}
        </AccordionItem>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
