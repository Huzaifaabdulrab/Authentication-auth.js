'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const LoginForm = () => {
  const { data: session } = useSession();

  return (
    <header className="bg-blue-100 min-h-screen flex flex-col justify-center items-center">
      {session ? (
        <div className="text-center border border-">
          <p className="text-xl font-semibold mb-4">
            Welcome, <span className="text-blue-600">{session.user?.name}</span>
          </p>
          <button
            onClick={() => signOut()}
            className="bg-red-500 text-white py-2 px-6 rounded-lg shadow hover:bg-red-600 transition duration-200"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="text-center items-center flex flex-col pt-24 space-y-4 border border-white shadow-xl w-96 h-96 rounded-md ">
          <p className="text-2xl text-gray-700 font-bold">Sign in to your account</p>
          <button
            onClick={() => signIn('google')}
            className="flex items-center justify-center gap-2 bg-white text-gray-800 border border-gray-300 py-2 px-4 rounded-lg shadow hover:bg-gray-100 transition duration-200 w-64"
          >
            <FcGoogle size={20} />
            Sign In with Google
          </button>
          <button
            onClick={() => signIn('github')}
            className="flex items-center justify-center gap-2 bg-gray-800 text-white py-2 px-4 rounded-lg shadow hover:bg-gray-900 transition duration-200 w-64"
          >
            <FaGithub size={20} />
            Sign In with GitHub
          </button>
        </div>
      )}
    </header>
  );
};

export default LoginForm;
