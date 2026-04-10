// async function sendRegistrationData(
//   email: string,
//   password: string,
//   nickname: string,
// ) {
//   const firstResponse = await axios.post(
//     "http://26.132.220.182:5173/registration",
//     JSON.parse(
//       JSON.stringify({
//         email,
//         password,
//         username: nickname,
//       }),
//     ),
//     {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     },
//   );

//   if (firstResponse.status === 200) {
//     const authResponse = await axios.post(
//       "http://26.132.220.182:5173/auth",
//       JSON.parse(
//         JSON.stringify({
//           email,
//           password,
//         }),
//       ),
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         withCredentials: true,
//       },
//     );

//     if (authResponse.status === 200) {
//       const authResponse = await axios.get(
//         "http://26.132.220.182:5173/auth",
//         { withCredentials: true },
//       );

//       console.log(authResponse.data);
//     }
//   }
// }
