/** JAVASCRIPT MAP, REDUCER E FILTER */

const users = [
  { id: 1, name: "Marcelo", age: 45, houses: 1, city: "Lisbon" },
  { id: 2, name: "David", age: 25, houses: 3, city: "Paris" },
  { id: 3, name: "Maria", age: 31, houses: 6, city: "London" },
  { id: 4, name: "Rony", age: 30, houses: 2, city: "Lisbon" },
  { id: 5, name: "Eric", age: 27, houses: 1, city: "São Paulo" },
  { id: 6, name: "Guilherme", age: 27, houses: 3, city: "São Paulo" },
];

/** map */
const userIDs = users.map(
  (user, index) => `${index} : ${user.id} - ${user.name}`
);

console.log(userIDs);

/** reduce */
const sumOfHouses = users.reduce(
  (acumulator, user) => acumulator + user.houses,
  0
);

console.log(sumOfHouses);

const cityWithUsers = users.reduce((acc, user) => {
  if (!acc[user.city]) {
    acc[user.city] = [user];
  } else {
    acc[user.city].push(user);
  }

  return acc;
}, {});

console.log(cityWithUsers);

/** filter */
const usersGreaterThan20 = users.filter((user) => {
  return user.age > 20 && user.houses >= 2;
});

console.log(usersGreaterThan20);
