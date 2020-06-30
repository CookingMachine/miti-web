import React from "react";
import { Recipe } from "store/types/food-types";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from "@fortawesome/free-regular-svg-icons";
import img from './food.jpg';

interface OwnProps {
    recipe: Recipe;
}

const RecipeCard = ({recipe}: OwnProps) => {
    return (
        <div className="recipe-card">
            <Card className='card-box'>
                <CardImg top width="100%" src={img} alt={recipe.name} />
                <CardBody>
                    <CardTitle>
                        {recipe.name}
                    </CardTitle>
                    <CardSubtitle>
                        <span>
                            <FontAwesomeIcon icon={faClock} />
                            {recipe.time} мин.
                        </span>
                        <span>{recipe.portions}</span>
                        <span>{recipe.views}</span>
                    </CardSubtitle>
                    <CardText>
                        {recipe.description}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default RecipeCard;