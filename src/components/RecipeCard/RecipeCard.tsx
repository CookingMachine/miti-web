import React from "react";
import { Recipe } from "store/types/food-types";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import img from './food.jpg';

interface OwnProps {
    recipe: Recipe;
}

const RecipeCard = ({recipe}: OwnProps) => {
    return (
        <Card className='recipe-card'>
            <CardImg top width="100%" src={img} alt={recipe.name} />
            <CardBody>
                <CardTitle>
                    {recipe.name}
                </CardTitle>
                <CardSubtitle>
                    <span>{recipe.time} минут</span>
                    <span>{recipe.portions}</span>
                    <span>{recipe.views}</span>
                </CardSubtitle>
                <CardText>
                    {recipe.description}
                </CardText>
            </CardBody>
        </Card>
    )
}

export default RecipeCard;