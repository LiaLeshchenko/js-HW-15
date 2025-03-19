// // Завдання 1

// // Отримати загальну суму балансу (поле balance) всіх користувачів.

// const calculateTotalBalance = (users) => {
//   const total = users.reduce((acc, user) => user.balance + acc, 0);

//   return total;
// };

// console.log("1.", calculateTotalBalance(users)); // 20916

// // Завдання 2

// // Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

// const getUsersWithFriend = (users, friendName) => {
//   const filteredUsers = users.filter((user) =>
//     user.friends.includes(friendName)
//   );

//   return filteredUsers.map((user) => user.name);
// };

// console.log("2.", getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]

// console.log("2.", getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

// // Завдання 3

// // Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)

// const getNamesSortedByFriendsCount = (users) => {
//   return users

//     .toSorted((a, b) => a.friends.length - b.friends.length)

//     .map((user) => user.name);
// };

// console.log("3.", getNamesSortedByFriendsCount(users));

// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
