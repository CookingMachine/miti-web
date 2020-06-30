import { Recipe, Category } from "./types/food-types"

namespace mocks {
    export const categoriesMock: Category[] = [
        {
            name: 'Закуски',
            id: 'snacks',
            description: 'Описание категории Закуски'
        },
        {
            name: 'Салаты',
            id: 'salads',
            description: 'Описание категории Салаты'
        },
        {
            name: 'Супы',
            id: 'soups',
            description: 'Описание категории Супы'
        },
        {
            name: 'Выпечка',
            id: 'bakery',
            description: 'Описание категории Выпечка'
        },
        {
            name: 'Десерты',
            id: 'deserts',
            description: 'Описание категории Десерты'
        },
        {
            name: 'Напитки',
            id: 'beverages',
            description: 'Описание категории Напитки'
        },
        {
            name: 'Соусы',
            id: 'sauces',
            description: 'Описание категории Соусы'
        },
        {
            name: 'Заготовки',
            id: 'blanks',
            description: 'Описание категории Заготовки'
        },
        {
            name: 'Второе блюда',
            id: 'secondaryFoods',
            description: 'Описание категории Второе блюда'
        }
    ]
    
    export const recipesMock: Recipe[] = enumerate(10).map(i => ({
        id: i,
        name: `Recipe ${i}`,
        description: `description ${i}`,
        imageUrl: '',
        time: i * 10,
        portions: i + 1,
        views: Math.pow(10, i),
    }))

    function enumerate(count: number) {
        const array: number[] = [];
        for (let i = 0; i < count; i++) {
            array.push(i);
        }
        return array;
    }
}

export default mocks