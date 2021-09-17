import * as React from 'react';
import { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Category } from 'store/types/food-types';

interface Props {
    categories: Category[];
}

const FiltersCategory = ({categories}: Props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
            fasdfsdf
        </DropdownToggle>
        <DropdownMenu>
            <div className="variants1">
                {categories.map(((category, i) => {
                    return (
                        <DropdownItem className="dropItem" key={i}>
                           {category.name}
                        </DropdownItem>
                    )
                }))
                }
            </div>
        </DropdownMenu>
      </Dropdown>
    );
  }


  
  export default FiltersCategory;