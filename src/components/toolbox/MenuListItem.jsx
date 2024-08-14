import React from 'react'
import Link from 'next/link';

const MenuListItem = ({ menuData }) => {
  return (
    menuData?.map(menuItem => 
      <Link key={menuItem.urlLabel} href={menuItem.url}>
        <li key={menuItem.urlLabel} className="px-4 py-2 ml-2 border-b-2 border-transparent hover:border-[#E55E19]">{menuItem.urlLabel}</li>
      </Link>
    )
  );
};

export default MenuListItem;