# TastyTrails

## Description

### Explanation of the code

**Navigation**
This code sets up a navigation structure for each native app using react navigation. It defines stack navigator with three screens - welcome, recipe list and recipe detail.


**Welcome Screen**
It displays an image, caption and a button for exploring of the app when clicked.

![Welcome Screen](1.jpg)

**Recipe List Screen**
It displays a list of recipes with search at the top. It includes components for the header, search, categories, recipe cards.

![Recipe List Screen](2.jpg)

**Recipe Detail Screen**
It displays details of a recipe. It includes navigation elements, recipe image, name, description and some extra details like time, difficulty, ingredients and steps.

**Constant.js**
This code defines constants for colors, recipe categories, list of recipes, each containing name, image, steps, ingredients etc. Whatever the content we want to write we can add it here.

![Constant.js](3.jpg)

**RecipeCard**
This code defines a reusable component (RecipeCard) to display recipe cards using a FlatList, iterating over the recipeList data. The useNavigation from React Navigation allows navigation to the recipe detail screen upon press. The layout is structured with two columns and vertical scrolling disabled for better user experience.

**Search**
This code defines a reusable component (SearchFilter) for a search input field with an icon. It accepts placeholder text. 

**Categories**
This code defines a component (CategoriesFilter) displaying categories horizontally using a ScrollView. It maps over the categories constant, rendering each category as a view with styling. Each category name is displayed within a Text component with blue color and a specified font size. Horizontal scrolling is enabled with showsHorizontalScrollIndicator={false}.