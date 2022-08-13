function AuthForm() : JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center w-[480px] h-[550px] rounded border-2 border-[#E6E6E6] bg-[#FFFFFF]">
      <p className="text-3xl font-bold">Account Login</p>
      <p className="font-regular text-base">
        Enter your credentials to access your account
      </p>
      <div className="flex flex-col items-center mt-6 space-y-5">
        <input
          type="email"
          className="rounded-lg h-12 w-96 text-base font-regular border-[#D4D4D4] border-2"
          placeholder="Email"
        />
        <input
          type="password"
          className="rounded-lg h-12 w-96 text-base font-regular border-[#D4D4D4] border-2"
          placeholder="Password"
        />
        <button className="h-12 w-96 bg-[#427A5B] rounded-lg font-semibold text-[#FFFFFF] text-xl">
          Login
        </button>
      </div>
    </div>
  );
}

export default AuthForm;
