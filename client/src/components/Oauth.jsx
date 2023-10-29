// import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
// import { app } from "../firebase";
// import {useDispatch} from 'react-redux'

// const Oauth = () => {
//   const dispatch = useDispatch()
//   const handleGoogleClick = async () => {
//     try {
//       const provider = new GoogleAuthProvider();
//       const auth = getAuth(app);
//       const result = await signInWithPopup(auth, provider);

//       const res = await fetch("/api/auth/google", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: result.user.displayName,
//           email: result.user.email,
//           password: result.user.password,
//         }),
//       });
//       const data = await res.json();
//       dispatch(signInSuccess(data))
//     } catch (error) {}
//   };
//   return (
//     <div>
//       <button
//         onClick={handleGoogleClick}
//         className="bg-red-700 text-center p-3 text-white w-[28rem] rounded cursor-pointer"
//       >
//         CONTINUE WITH GOOGLE
//       </button>
//     </div>
//   );
// };

// export default Oauth;
