/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import AuthForm from '../components/AuthForm';

const Auth: NextPage = () => {
  return (
    <div className="bg-[#F2F2F2] h-screen flex flex-col items-center justify-center relative">
        <div className="w-52 h-20 absolute left-16 top-12">
        <img src="/portal-logo.png" alt="Vostome Portal Logo" />
        </div>         
     <AuthForm/>
    </div>
  );
};

export default Auth;