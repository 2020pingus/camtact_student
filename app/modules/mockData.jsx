import avatarImage from '../../resources/avatar_example.jpg';

const user = {
  username: '정승욱',
  email: 'example123@naver.com',
  role: '응시자',
  organization: '숭실대학교 소프트웨어학부',
  avatar: avatarImage,
};

// function makeDataGenerator(items) {
//   let itemIndex = 0;
//   return function getNextData() {
//     const item = items[itemIndex % items.length];
//     itemIndex += 1;
//     return { ...item, id: itemIndex };
//   };
// }

// export const getNextUser = makeDataGenerator(user);
