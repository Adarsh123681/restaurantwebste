export interface menu {
  id: number,
  name: string
  price: number,
  category: string,
  mainImage: string,
  images: string[]
}

const menuItem: menu[] = [
  {
    "id": 1,
    "name": "Margherita Pizza",
    "price": 12.99,
    "category": "Pizza",
    "mainImage": "https://example.com/images/margherita-pizza.jpg",
    "images": [
      "https://example.com/images/margherita-pizza-1.jpg",
      "https://example.com/images/margherita-pizza-2.jpg"
    ]
  },
  {
    "id": 2,
    "name": "Pepperoni Pizza",
    "price": 14.99,
    "category": "Pizza",
    "mainImage": "https://example.com/images/pepperoni-pizza.jpg",
    "images": [
      "https://example.com/images/pepperoni-pizza-1.jpg",
      "https://example.com/images/pepperoni-pizza-2.jpg"
    ]
  },
  {
    "id": 3,
    "name": "BBQ Chicken Pizza",
    "price": 16.99,
    "category": "Pizza",
    "mainImage": "https://example.com/images/bbq-chicken-pizza.jpg",
    "images": [
      "https://example.com/images/bbq-chicken-pizza-1.jpg",
      "https://example.com/images/bbq-chicken-pizza-2.jpg"
    ]
  },
  {
    "id": 4,
    "name": "Caesar Salad",
    "price": 10.99,
    "category": "Salad",
    "mainImage": "https://example.com/images/caesar-salad.jpg",
    "images": [
      "https://example.com/images/caesar-salad-1.jpg",
      "https://example.com/images/caesar-salad-2.jpg"
    ]
  },
  {
    "id": 5,
    "name": "Greek Salad",
    "price": 11.99,
    "category": "Salad",
    "mainImage": "https://example.com/images/greek-salad.jpg",
    "images": [
      "https://example.com/images/greek-salad-1.jpg",
      "https://example.com/images/greek-salad-2.jpg"
    ]
  },
  {
    "id": 6,
    "name": "Chicken Alfredo",
    "price": 15.99,
    "category": "Pasta",
    "mainImage": "https://example.com/images/chicken-alfredo.jpg",
    "images": [
      "https://example.com/images/chicken-alfredo-1.jpg",
      "https://example.com/images/chicken-alfredo-2.jpg"
    ]
  },
  {
    "id": 7,
    "name": "Spaghetti Carbonara",
    "price": 13.99,
    "category": "Pasta",
    "mainImage": "https://example.com/images/spaghetti-carbonara.jpg",
    "images": [
      "https://example.com/images/spaghetti-carbonara-1.jpg",
      "https://example.com/images/spaghetti-carbonara-2.jpg"
    ]
  },
  {
    "id": 8,
    "name": "Lasagna",
    "price": 14.99,
    "category": "Pasta",
    "mainImage": "https://example.com/images/lasagna.jpg",
    "images": [
      "https://example.com/images/lasagna-1.jpg",
      "https://example.com/images/lasagna-2.jpg"
    ]
  },
  {
    "id": 9,
    "name": "Chicken Tikka Masala",
    "price": 18.99,
    "category": "Indian",
    "mainImage": "https://example.com/images/chicken-tikka-masala.jpg",
    "images": [
      "https://example.com/images/chicken-tikka-masala-1.jpg",
      "https://example.com/images/chicken-tikka-masala-2.jpg"
    ]
  },
  {
    "id": 10,
    "name": "Butter Chicken",
    "price": 17.99,
    "category": "Indian",
    "mainImage": "https://example.com/images/butter-chicken.jpg",
    "images": [
      "https://example.com/images/butter-chicken-1.jpg",
      "https://example.com/images/butter-chicken-2.jpg"
    ]
  },
  {
    "id": 11,
    "name": "Paneer Butter Masala",
    "price": 15.99,
    "category": "Indian",
    "mainImage": "https://example.com/images/paneer-butter-masala.jpg",
    "images": [
      "https://example.com/images/paneer-butter-masala-1.jpg",
      "https://example.com/images/paneer-butter-masala-2.jpg"
    ]
  },
  {
    "id": 12,
    "name": "Sushi Platter",
    "price": 24.99,
    "category": "Japanese",
    "mainImage": "https://example.com/images/sushi-platter.jpg",
    "images": [
      "https://example.com/images/sushi-platter-1.jpg",
      "https://example.com/images/sushi-platter-2.jpg"
    ]
  },
  {
    "id": 13,
    "name": "Ramen Bowl",
    "price": 13.99,
    "category": "Japanese",
    "mainImage": "https://example.com/images/ramen-bowl.jpg",
    "images": [
      "https://example.com/images/ramen-bowl-1.jpg",
      "https://example.com/images/ramen-bowl-2.jpg"
    ]
  },
  {
    "id": 14,
    "name": "Tempura",
    "price": 12.99,
    "category": "Japanese",
    "mainImage": "https://example.com/images/tempura.jpg",
    "images": [
      "https://example.com/images/tempura-1.jpg",
      "https://example.com/images/tempura-2.jpg"
    ]
  },
  {
    "id": 15,
    "name": "Pad Thai",
    "price": 14.99,
    "category": "Thai",
    "mainImage": "https://example.com/images/pad-thai.jpg",
    "images": [
      "https://example.com/images/pad-thai-1.jpg",
      "https://example.com/images/pad-thai-2.jpg"
    ]
  },
  {
    "id": 16,
    "name": "Green Curry",
    "price": 13.99,
    "category": "Thai",
    "mainImage": "https://example.com/images/green-curry.jpg",
    "images": [
      "https://example.com/images/green-curry-1.jpg",
      "https://example.com/images/green-curry-2.jpg"
    ]
  },
  {
    "id": 17,
    "name": "Tom Yum Soup",
    "price": 11.99,
    "category": "Thai",
    "mainImage": "https://example.com/images/tom-yum-soup.jpg",
    "images": [
      "https://example.com/images/tom-yum-soup-1.jpg",
      "https://example.com/images/tom-yum-soup-2.jpg"
    ]
  },
  {
    "id": 18,
    "name": "Burrito",
    "price": 10.99,
    "category": "Mexican",
    "mainImage": "https://example.com/images/burrito.jpg",
    "images": [
      "https://example.com/images/burrito-1.jpg",
      "https://example.com/images/burrito-2.jpg"
    ]
  },
  {
    "id": 19,
    "name": "Tacos",
    "price": 9.99,
    "category": "Mexican",
    "mainImage": "https://example.com/images/tacos.jpg",
    "images": [
      "https://example.com/images/tacos-1.jpg",
      "https://example.com/images/tacos-2.jpg"
    ]
  },
  {
    "id": 20,
    "name": "Nachos",
    "price": 8.99,
    "category": "Mexican",
    "mainImage": "https://example.com/images/nachos.jpg",
    "images": [
      "https://example.com/images/nachos-1.jpg",
      "https://example.com/images/nachos-2.jpg"
    ]
  },
  {
    "id": 21,
    "name": "Cheeseburger",
    "price": 11.99,
    "category": "American",
    "mainImage": "https://example.com/images/cheeseburger.jpg",
    "images": [
      "https://example.com/images/cheeseburger-1.jpg",
      "https://example.com/images/cheeseburger-2.jpg"
    ]
  },
  {
    "id": 22,
    "name": "Hot Dog",
    "price": 8.99,
    "category": "American",
    "mainImage": "https://example.com/images/hot-dog.jpg",
    "images": [
      "https://example.com/images/hot-dog-,
        "https://example.com/images/hot-dog-,
    ]
  }
]

export default menuItem