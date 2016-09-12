angular.module('ingredient-check')
.controller('search', ['$scope', 'appFactory', function($scope, appFactory){
  $scope.searchQuery;
  $scope.roundNumber = function (number) {
    return Math.floor(number, -1);
  }
  $scope.sendQuery = function(query) {
    console.log(query);

    appFactory.sendQueryToEdamam(query);
  }
// image, label, source,  sourceIcon, url, yield(servings), ingredients

  $scope.exampleData =
  [{
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_0d9ad74158ad875bd6a891ed44b5c05f",
        "label": "Mapo Tofu (Japanese Style)",
        "image": "https://www.edamam.com/web-img/d8b/d8b60533c3fbd6ec88c7049d9c7c1e21.jpg",
        "source": "No Recipes",
        "sourceIcon": "http://www.norecipes.com/favicon.ico",
        "url": "http://norecipes.com/blog/2012/01/07/mapo-tofu-recipe/",
        "shareAs": "http://www.edamam.com/recipe/mapo-tofu-japanese-style-0d9ad74158ad875bd6a891ed44b5c05f/mapo+tofu",
        "yield": 4,
        "dietLabels": [
          "Low-Carb"
        ],
        "healthLabels": [
          "Dairy-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Fish-Free"
        ],
        "cautions": [
          "Gluten",
          "Wheat"
        ],
        "ingredientLines": [
          "1/3 cup sake",
          "2 tbsps oyster sauce",
          "1 tbs red miso",
          "1 tsp soy sauce",
          "1 tsp sesame oil",
          "1 tsp tobanjan",
          "1 tsp sugar",
          "1 tsps cornstarch",
          "1 tbs sesame oil",
          "3 scallions, white part minced, green part sliced",
          "1 tbsp minced ginger",
          "1 large clove garlic, minced",
          "1/2 lb ground pork",
          "14 oz pack of silken tofu, drained and sliced into 1″ cubes"
        ],
        "ingredients": [
          {
            "text": "1/3 cup sake",
            "quantity": 0.33333334,
            "measure": "cup",
            "food": "sake",
            "weight": 77.5973
          },
          {
            "text": "2 tbsps oyster sauce",
            "quantity": 2,
            "measure": "tbsp",
            "food": "oyster sauce",
            "weight": 36
          },
          {
            "text": "1 tbs red miso",
            "quantity": 1,
            "measure": "tbsp",
            "food": "miso",
            "weight": 17.435963
          },
          {
            "text": "1 tsp soy sauce",
            "quantity": 1,
            "measure": "tsp",
            "food": "soy sauce",
            "weight": 5.3
          },
          {
            "text": "1 tsp sesame oil",
            "quantity": 1,
            "measure": "tsp",
            "food": "sesame oil",
            "weight": 4.5
          },
          {
            "text": "1 tsp sugar",
            "quantity": 1,
            "measure": "tsp",
            "food": "sugar",
            "weight": 4.2
          },
          {
            "text": "1 tsps cornstarch",
            "quantity": 1,
            "measure": "tsp",
            "food": "cornstarch",
            "weight": 2.6
          },
          {
            "text": "1 tbs sesame oil",
            "quantity": 1,
            "measure": "tbsp",
            "food": "sesame oil",
            "weight": 13.6
          },
          {
            "text": "3 scallions, white part minced, green part sliced",
            "quantity": 3,
            "measure": "scallion",
            "food": "scallions",
            "weight": 45
          },
          {
            "text": "1 tbsp minced ginger",
            "quantity": 1,
            "measure": "tbsp",
            "food": "minced ginger",
            "weight": 6
          },
          {
            "text": "1 large clove garlic, minced",
            "quantity": 1,
            "measure": "clove",
            "food": "garlic",
            "weight": 3.8999999
          },
          {
            "text": "1/2 lb ground pork",
            "quantity": 0.5,
            "measure": "lb",
            "food": "ground pork",
            "weight": 226.796
          },
          {
            "text": "14 oz pack of silken tofu, drained and sliced into 1″ cubes",
            "quantity": 14,
            "measure": "oz",
            "food": "tofu",
            "weight": 396.9
          }
        ],
        "calories": 1245.325428221,
        "totalWeight": 839.8292629,
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1245.325428221,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 84.0001237758,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 24.072930581819996,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 33.69779634119,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 19.61447441576,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 31.768024373039996,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 6.0593419999,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 8.933629705,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 75.22186536833999,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 163.29312,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2117.7584066229997,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 896.378803729,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 219.32134021500002,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1490.173366899,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 9.847357577,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 9.04874211164,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 949.061019017,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 27.73335852,
            "unit": "µg_RAE"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 12.394171968800002,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.9461331665000001,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.8940635147900001,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 11.3256604663,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.26837312847,
            "unit": "mg"
          },
          "FOL": {
            "label": "Folic Acid (B9)",
            "quantity": 125.782632967,
            "unit": "µg"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 1.7491207704,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 0.56105359622,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 110.3182371573,
            "unit": "µg"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 62.26627141105,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 129.23095965507693,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 120.36465290909999,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 10.58934145768,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 24.2373679996,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 150.44373073667998,
            "unit": "%"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 54.431039999999996,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 88.23993360929165,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 89.63788037289999,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 54.830335053750005,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 42.5763819114,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 54.70754209444445,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 60.324947410933326,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 135.58014557385715,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 3.08148428,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 20.656953281333337,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 129.7422111,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 52.5919714582353,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 56.6283023315,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 63.418656423499996,
            "unit": "%"
          },
          "FOL": {
            "label": "Folic Acid (B9)",
            "quantity": 31.445658241749996,
            "unit": "%"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 29.15201284,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.8052679810999996,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 137.89779644662502,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 84.0001237758,
            "hasRDI": true,
            "daily": 129.23095965507693,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 24.072930581819996,
                "hasRDI": true,
                "daily": 120.36465290909999,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 33.69779634119,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 19.61447441576,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 31.768024373039996,
            "hasRDI": true,
            "daily": 10.58934145768,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 25.708682373139997,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 6.0593419999,
                "hasRDI": true,
                "daily": 24.2373679996,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 8.933629705,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 75.22186536833999,
            "hasRDI": true,
            "daily": 150.44373073667998,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 163.29312,
            "hasRDI": true,
            "daily": 54.431039999999996,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 2117.7584066229997,
            "hasRDI": true,
            "daily": 88.23993360929165,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 896.378803729,
            "hasRDI": true,
            "daily": 89.63788037289999,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 219.32134021500002,
            "hasRDI": true,
            "daily": 54.830335053750005,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 1490.173366899,
            "hasRDI": true,
            "daily": 42.5763819114,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 9.847357577,
            "hasRDI": true,
            "daily": 54.70754209444445,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 9.04874211164,
            "hasRDI": true,
            "daily": 60.324947410933326,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 949.061019017,
            "hasRDI": true,
            "daily": 135.58014557385715,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 27.73335852,
            "hasRDI": true,
            "daily": 3.08148428,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 12.394171968800002,
            "hasRDI": true,
            "daily": 20.656953281333337,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 1.9461331665000001,
            "hasRDI": true,
            "daily": 129.7422111,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.8940635147900001,
            "hasRDI": true,
            "daily": 52.5919714582353,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 11.3256604663,
            "hasRDI": true,
            "daily": 56.6283023315,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 1.26837312847,
            "hasRDI": true,
            "daily": 63.418656423499996,
            "unit": "mg"
          },
          {
            "label": "Folic Acid (B9)",
            "tag": "FOL",
            "schemaOrgTag": null,
            "total": 125.782632967,
            "hasRDI": true,
            "daily": 31.445658241749996,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 1.7491207704,
            "hasRDI": true,
            "daily": 29.15201284,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 0.56105359622,
            "hasRDI": true,
            "daily": 2.8052679810999996,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 110.3182371573,
            "hasRDI": true,
            "daily": 137.89779644662502,
            "unit": "µg"
          }
        ]
      },
      "bookmarked": false,
      "bought": false
    },
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_7ee88e8b8ed1bcce328d370f71784b01",
        "label": "Vegetarian Mapo Tofu with Peas",
        "image": "https://www.edamam.com/web-img/54c/54c344ca0fb1ab80d42925beb842bec5.jpg",
        "source": "Serious Eats",
        "sourceIcon": "http://www.seriouseats.com/favicon.ico",
        "url": "http://www.seriouseats.com/recipes/2013/01/vegetarian-mapo-tofu-with-peas-recipe.html",
        "shareAs": "http://www.edamam.com/recipe/vegetarian-mapo-tofu-with-peas-7ee88e8b8ed1bcce328d370f71784b01/mapo+tofu",
        "yield": 4,
        "dietLabels": [
          "High-Fiber",
          "Low-Carb"
        ],
        "healthLabels": [
          "Vegan",
          "Vegetarian",
          "Dairy-Free",
          "Egg-Free",
          "Tree-Nut-Free",
          "Fish-Free",
          "Shellfish-Free"
        ],
        "cautions": [
          "Gluten",
          "Wheat"
        ],
        "ingredientLines": [
          "1/4 cup vegetable oil",
          "3 medium garlic cloves grated on a microplane grater (about 1 tablespoon)",
          "1 tablespoon fresh ginger, peeled and grated on a microplane grater",
          "1 tablespoon plus 1 teaspoon sichuan peppercorns, finely ground in a spice grinder or mortar and pestle",
          "1 tablespoon fermented chili bean paste",
          "1 tablespoon garlic red chili sauce (sambal oelek)",
          "2 tablespoons shaoxing wine",
          "1 tablespoon dark soy sauce",
          "1/2 cup vegetable broth",
          "2 teaspoons potato starch or 1 1/2 teaspoons cornstarch combined with 3 tablespoons cold water",
          "2 pounds medium to firm silken tofu, cut into 1/2-inch cubes",
          "1 cup frozen green peas",
          "3 large scallions, white and green parts, thinly sliced",
          "1/2 cup chopped fresh cilantro leaves"
        ],
        "ingredients": [
          {
            "text": "1/4 cup vegetable oil",
            "quantity": 0.25,
            "measure": "cup",
            "food": "vegetable oil",
            "weight": 55.202
          },
          {
            "text": "3 medium garlic cloves grated on a microplane grater (about 1 tablespoon)",
            "quantity": 1,
            "measure": "tbsp",
            "food": "garlic",
            "weight": 8.622876
          },
          {
            "text": "1 tablespoon fresh ginger, peeled and grated on a microplane grater",
            "quantity": 1,
            "measure": "tbsp",
            "food": "fresh ginger",
            "weight": 6
          },
          {
            "text": "1 tablespoon plus 1 teaspoon sichuan peppercorns, finely ground in a spice grinder or mortar and pestle",
            "quantity": 1,
            "measure": "tbsp",
            "food": "peppercorns",
            "weight": 6.9
          },
          {
            "text": "1 tablespoon plus 1 teaspoon sichuan peppercorns, finely ground in a spice grinder or mortar and pestle",
            "quantity": 1,
            "measure": "tsp",
            "food": "peppercorns",
            "weight": 2.3
          },
          {
            "text": "1 tablespoon fermented chili bean paste",
            "quantity": 1,
            "measure": "tbsp",
            "food": "bean",
            "weight": 12.6
          },
          {
            "text": "1 tablespoon garlic red chili sauce (sambal oelek)",
            "quantity": 1,
            "measure": "tbsp",
            "food": "red chili sauce",
            "weight": 28.8
          },
          {
            "text": "2 tablespoons shaoxing wine",
            "quantity": 2,
            "measure": "tbsp",
            "food": "wine",
            "weight": 29.92541
          },
          {
            "text": "1 tablespoon dark soy sauce",
            "quantity": 1,
            "measure": "tbsp",
            "food": "soy sauce",
            "weight": 16
          },
          {
            "text": "1/2 cup vegetable broth",
            "quantity": 0.5,
            "measure": "cup",
            "food": "vegetable broth",
            "weight": 113.5
          },
          {
            "text": "2 teaspoons potato starch or 1 1/2 teaspoons cornstarch combined with 3 tablespoons cold water",
            "quantity": 2,
            "measure": "tsp",
            "food": "potato starch",
            "weight": 5.2
          },
          {
            "text": "2 pounds medium to firm silken tofu, cut into 1/2-inch cubes",
            "quantity": 2,
            "measure": "lb",
            "food": "tofu",
            "weight": 907.184
          },
          {
            "text": "1 cup frozen green peas",
            "quantity": 1,
            "measure": "cup",
            "food": "peas",
            "weight": 145
          },
          {
            "text": "3 large scallions, white and green parts, thinly sliced",
            "quantity": 3,
            "measure": "large",
            "food": "scallions",
            "weight": 75
          },
          {
            "text": "1/2 cup chopped fresh cilantro leaves",
            "quantity": 0.5,
            "measure": "cup",
            "food": "cilantro",
            "weight": 8
          }
        ],
        "calories": 1406.39402518145,
        "totalWeight": 1420.2342859999999,
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1406.39402518145,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 94.44912077995,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 11.7091389008,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.4195352,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 50.983626887599996,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 26.2128103024,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 66.9290622069,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 22.58668694984,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 16.9266639119,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 89.47771077705,
            "unit": "g"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 1820.930809185,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 2018.873450638,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 458.24126104199996,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2464.573965655,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 20.98795361062,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 10.527718162589998,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1384.2716338209998,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 128.2876368695,
            "unit": "µg_RAE"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 100.92148631744999,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.0614118131644998,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.907660841386,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 5.174102306929999,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.1880338807075002,
            "unit": "mg"
          },
          "FOL": {
            "label": "Folic Acid (B9)",
            "quantity": 375.21290038,
            "unit": "µg"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.013997127585000001,
            "unit": "µg"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 13.104952700799997,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 256.133392048,
            "unit": "µg"
          }
        },
        "totalDaily": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 70.31970125907249,
            "unit": "%"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 145.30633966146152,
            "unit": "%"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 58.545694504,
            "unit": "%"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 22.3096874023,
            "unit": "%"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 90.34674779936,
            "unit": "%"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 178.95542155410004,
            "unit": "%"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 75.87211704937499,
            "unit": "%"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 201.88734506379998,
            "unit": "%"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 114.56031526049999,
            "unit": "%"
          },
          "K": {
            "label": "Potassium",
            "quantity": 70.41639901871429,
            "unit": "%"
          },
          "FE": {
            "label": "Iron",
            "quantity": 116.59974228122223,
            "unit": "%"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 70.1847877506,
            "unit": "%"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 197.7530905458571,
            "unit": "%"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 14.25418187438889,
            "unit": "%"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 168.20247719575,
            "unit": "%"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 70.76078754429999,
            "unit": "%"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 53.39181419917647,
            "unit": "%"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 25.870511534649996,
            "unit": "%"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 59.40169403537501,
            "unit": "%"
          },
          "FOL": {
            "label": "Folic Acid (B9)",
            "quantity": 93.803225095,
            "unit": "%"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.0034992818962500003,
            "unit": "%"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 65.52476350399999,
            "unit": "%"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 320.16674006000005,
            "unit": "%"
          }
        },
        "digest": [
          {
            "label": "Fat",
            "tag": "FAT",
            "schemaOrgTag": "fatContent",
            "total": 94.44912077995,
            "hasRDI": true,
            "daily": 145.30633966146152,
            "unit": "g",
            "sub": [
              {
                "label": "Saturated",
                "tag": "FASAT",
                "schemaOrgTag": "saturatedFatContent",
                "total": 11.7091389008,
                "hasRDI": true,
                "daily": 58.545694504,
                "unit": "g"
              },
              {
                "label": "Trans",
                "tag": "FATRN",
                "schemaOrgTag": "transFatContent",
                "total": 0.4195352,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Monounsaturated",
                "tag": "FAMS",
                "schemaOrgTag": null,
                "total": 50.983626887599996,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Polyunsaturated",
                "tag": "FAPU",
                "schemaOrgTag": null,
                "total": 26.2128103024,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Carbs",
            "tag": "CHOCDF",
            "schemaOrgTag": "carbohydrateContent",
            "total": 66.9290622069,
            "hasRDI": true,
            "daily": 22.3096874023,
            "unit": "g",
            "sub": [
              {
                "label": "Carbs (net)",
                "tag": "CHOCDF.net",
                "schemaOrgTag": null,
                "total": 44.34237525706,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              },
              {
                "label": "Fiber",
                "tag": "FIBTG",
                "schemaOrgTag": "fiberContent",
                "total": 22.58668694984,
                "hasRDI": true,
                "daily": 90.34674779936,
                "unit": "g"
              },
              {
                "label": "Sugars",
                "tag": "SUGAR",
                "schemaOrgTag": "sugarContent",
                "total": 16.9266639119,
                "hasRDI": false,
                "daily": 0,
                "unit": "g"
              }
            ]
          },
          {
            "label": "Protein",
            "tag": "PROCNT",
            "schemaOrgTag": "proteinContent",
            "total": 89.47771077705,
            "hasRDI": true,
            "daily": 178.95542155410004,
            "unit": "g"
          },
          {
            "label": "Cholesterol",
            "tag": "CHOLE",
            "schemaOrgTag": "cholesterolContent",
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "mg"
          },
          {
            "label": "Sodium",
            "tag": "NA",
            "schemaOrgTag": "sodiumContent",
            "total": 1820.930809185,
            "hasRDI": true,
            "daily": 75.87211704937499,
            "unit": "mg"
          },
          {
            "label": "Calcium",
            "tag": "CA",
            "schemaOrgTag": null,
            "total": 2018.873450638,
            "hasRDI": true,
            "daily": 201.88734506379998,
            "unit": "mg"
          },
          {
            "label": "Magnesium",
            "tag": "MG",
            "schemaOrgTag": null,
            "total": 458.24126104199996,
            "hasRDI": true,
            "daily": 114.56031526049999,
            "unit": "mg"
          },
          {
            "label": "Potassium",
            "tag": "K",
            "schemaOrgTag": null,
            "total": 2464.573965655,
            "hasRDI": true,
            "daily": 70.41639901871429,
            "unit": "mg"
          },
          {
            "label": "Iron",
            "tag": "FE",
            "schemaOrgTag": null,
            "total": 20.98795361062,
            "hasRDI": true,
            "daily": 116.59974228122223,
            "unit": "mg"
          },
          {
            "label": "Zinc",
            "tag": "ZN",
            "schemaOrgTag": null,
            "total": 10.527718162589998,
            "hasRDI": true,
            "daily": 70.1847877506,
            "unit": "mg"
          },
          {
            "label": "Phosphorus",
            "tag": "P",
            "schemaOrgTag": null,
            "total": 1384.2716338209998,
            "hasRDI": true,
            "daily": 197.7530905458571,
            "unit": "mg"
          },
          {
            "label": "Vitamin A",
            "tag": "VITA_RAE",
            "schemaOrgTag": null,
            "total": 128.2876368695,
            "hasRDI": true,
            "daily": 14.25418187438889,
            "unit": "µg"
          },
          {
            "label": "Vitamin C",
            "tag": "VITC",
            "schemaOrgTag": null,
            "total": 100.92148631744999,
            "hasRDI": true,
            "daily": 168.20247719575,
            "unit": "mg"
          },
          {
            "label": "Thiamin (B1)",
            "tag": "THIA",
            "schemaOrgTag": null,
            "total": 1.0614118131644998,
            "hasRDI": true,
            "daily": 70.76078754429999,
            "unit": "mg"
          },
          {
            "label": "Riboflavin (B2)",
            "tag": "RIBF",
            "schemaOrgTag": null,
            "total": 0.907660841386,
            "hasRDI": true,
            "daily": 53.39181419917647,
            "unit": "mg"
          },
          {
            "label": "Niacin (B3)",
            "tag": "NIA",
            "schemaOrgTag": null,
            "total": 5.174102306929999,
            "hasRDI": true,
            "daily": 25.870511534649996,
            "unit": "mg"
          },
          {
            "label": "Vitamin B6",
            "tag": "VITB6A",
            "schemaOrgTag": null,
            "total": 1.1880338807075002,
            "hasRDI": true,
            "daily": 59.40169403537501,
            "unit": "mg"
          },
          {
            "label": "Folic Acid (B9)",
            "tag": "FOL",
            "schemaOrgTag": null,
            "total": 375.21290038,
            "hasRDI": true,
            "daily": 93.803225095,
            "unit": "µg"
          },
          {
            "label": "Vitamin B12",
            "tag": "VITB12",
            "schemaOrgTag": null,
            "total": 0,
            "hasRDI": false,
            "daily": 0,
            "unit": "µg"
          },
          {
            "label": "Vitamin D",
            "tag": "VITD",
            "schemaOrgTag": null,
            "total": 0.013997127585000001,
            "hasRDI": true,
            "daily": 0.0034992818962500003,
            "unit": "µg"
          },
          {
            "label": "Vitamin E",
            "tag": "TOCPHA",
            "schemaOrgTag": null,
            "total": 13.104952700799997,
            "hasRDI": true,
            "daily": 65.52476350399999,
            "unit": "mg"
          },
          {
            "label": "Vitamin K",
            "tag": "VITK1",
            "schemaOrgTag": null,
            "total": 256.133392048,
            "hasRDI": true,
            "daily": 320.16674006000005,
            "unit": "µg"
          }
        ]
      },
      "bookmarked": false,
      "bought": false
    }];
    console.log($scope.exampleData);
    $scope.exampleData = appFactory.deleteUnessaryRecipeData($scope.exampleData);
    console.log($scope.exampleData);
}])
.animation('.ingredients', function() {
	var NG_HIDE_CLASS = 'ng-hide';
	return {
		beforeAddClass: function(element, className, done) {
			if(className === NG_HIDE_CLASS) {
        console.log('HELLO THRE')
				element.slideUp(done);
			}
		},
		removeClass: function(element, className, done) {
			if(className === NG_HIDE_CLASS) {
        console.log('HELLO THRE')
				element.hide().slideDown(done);
			}
		}
	}
})
.animation('.moreInfo', function() {
	var NG_HIDE_CLASS = 'ng-hide';
	return {
		beforeAddClass: function(element, className, done) {
			if(className === NG_HIDE_CLASS) {
        console.log('HELLO THRE')
				element.slideUp(done);
			}
		},
		removeClass: function(element, className, done) {
			if(className === NG_HIDE_CLASS) {
        console.log('HELLO THRE')
				element.hide().slideDown(done);
			}
		}
	}
});
