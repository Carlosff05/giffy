import React from "react";
import { Link } from "wouter";

import { CategoryTitle, CategoryList, CategoryListItem, CategoryLink } from "./styles";

export default function Category({ name, options = [] }) {
  return (
    <div className='Category'>
      <CategoryTitle>{name}</CategoryTitle>
      <CategoryList>
        {options.map((singleOption, index) => (
          <CategoryListItem key={singleOption} index={index}>
            <CategoryLink to={`/search/${singleOption}`}>
              {singleOption}
            </CategoryLink>
          </CategoryListItem>
        ))}
      </CategoryList>
    </div>
  );
}