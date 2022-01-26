const userData = [
  {
    id: '111',
    name: 'Peter',
    favorites: {
      food: ['burgers', 'pizza'],
      activites: ['basketball', "baseball"]
    },
  },
  {
    id: '222',
    name: 'John',
    favorites: {
      food: ['burgers', 'tacos'],
      activites: ['football', "golf"]
    },
  },
  {
    id: '333',
    name: 'Mary',
    favorites: {
      food: ['pizza', 'tacos', 'fried chicken'],
      activites: ['volleyball', "softball"]
    },
  }
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]
const userFavoriteCount = userData.map(user => ({
  id: user.id,
  favoriteFoods: user.favorites.food.length
}));

console.log('Question 5:', userFavoriteCount);

// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

const likePizza = userData.reduce((accumulator, user) => {
  if (user.favorites.food.includes('pizza')) {
    return [...accumulator, user.name];
  };
  return accumulator;
}, []);

console.log('Question 6:', likePizza)

// 7. Show us an example of a switch statement being used
for (var x = 1; x <= 20; x++) {
  switch (true) {
    case x % 5 === 0 && x % 3 === 0:
      console.log(x, 'FizzBuzz');
      break;
    case x % 5 === 0:
      console.log(x, 'Fizz');
      break;
    case x % 3 == 0:
      console.log(x, 'Buzz');
      break;
  }
};