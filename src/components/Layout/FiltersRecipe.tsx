import * as React from 'react';
import { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Recipe } from 'store/types/food-types';

interface Props {
    recipes: Recipe[];
}

const FiltersRecipe = ({recipes}: Props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
            fasdfsdf
        </DropdownToggle>
        <DropdownMenu >
            <div className="variants1">
                {recipes.map(((recipe, i) => {
                    return (
                        <DropdownItem className="dropItem" key={i}>
                           {recipe.name}
                        </DropdownItem>
                    )
                }))
                }
            </div>
        </DropdownMenu>
      </Dropdown>
    );
  }


  
  export default FiltersRecipe;