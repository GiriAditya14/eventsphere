// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import Layout from '../components/Layout';
// import AuthForm from '../components/AuthForm';
// import { useAuth } from '../contexts/AuthContext';

// const Login = () => {
//   const [loading, setLoading] = useState(false);
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleLogin = async (data) => {
//     setLoading(true);
//     try {
//       await login(data.email, data.password);
//       navigate('/dashboard');
//     } catch (error) {
//       console.error('Login error:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Layout>
//       <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
//         <div className="bg-gray-900 py-4 px-6">
//           <h2 className="text-2xl font-bold text-white">Sign In</h2>
//         </div>
//         <div className="p-6">
//           <AuthForm isLogin={true} onSubmit={handleLogin} />
          
//           <div className="mt-4 text-center text-sm">
//             <p className="text-gray-600">
//               Don't have an account?{' '}
//               <Link to="/signup" className="text-red-500 hover:text-red-600">
//                 Sign up here
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Login;
// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import Layout from '../components/Layout';
// // import AuthForm from '../components/AuthForm';
// // import { useAuth } from '../contexts/AuthContext';

// // const Login = () => {
// //   const [loading, setLoading] = useState(false);
// //   const { login } = useAuth();
// //   const navigate = useNavigate();

// //   const handleLogin = async (data) => {
// //     setLoading(true);
// //     try {
// //       await login(data.email, data.password);
// //       navigate('/dashboard');
// //     } catch (error) {
// //       console.error('Login error:', error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <Layout>
// //       <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
// //         <div className="bg-primary-600 py-4 px-6">
// //           <h2 className="text-2xl font-bold  text-gray-500">Sign In</h2>
// //         </div>
// //         <div className="p-6">
// //           <AuthForm isLogin={true} onSubmit={handleLogin} />
          
// //           <div className="mt-4 text-center text-sm">
// //             <p className="text-gray-600">
// //               Don't have an account?{' '}
// //               <Link to="/signup" className="text-primary-600 text-gray-500 hover:text-primary-800">
// //                 Sign up here
// //               </Link>
// //             </p>
// //           </div>
// //         </div>
// //       </div>
// //     </Layout>
// //   );
// // };

// // export default Login;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import AuthForm from '../components/AuthForm';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    setLoading(true);
    try {
      await login(data.email, data.password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center bg-[#f0f8ff] py-12">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg transform transition-all hover:shadow-2xl p-8">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#05445e] to-[#189ab4] text-white text-center py-4 rounded-t-xl">
            <h2 className="text-2xl font-semibold">Sign In</h2>
          </div>

          {/* Form Section */}
          <div className="p-6">
            <AuthForm isLogin={true} onSubmit={handleLogin} />

            {/* Sign Up Link */}
            <div className="mt-4 text-center text-sm">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <Link 
                  to="/signup" 
                  className="text-[#189ab4] font-semibold hover:text-[#75e6da] transition"
                >
                  Sign up here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
