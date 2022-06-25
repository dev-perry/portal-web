function AuthForm() : JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center w-[480px] h-[550px] rounded border-2 border-[#E6E6E6] bg-[#FFFFFF]">
      <p className="text-3xl font-bold">Account Login</p>
      <p className="font-regular text-base">
        Enter your credentials to access your account{' '}
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
        <p className="font-semibold text-sm text-left">Forgot password</p>
        <button className="h-12 w-96 bg-[#427A5B] rounded-lg font-semibold text-[#FFFFFF] text-xl">
          Login
        </button>
        <div className="inline-flex items-center space-x-2">
      <hr style={{
            color: '#000000',
            backgroundColor: '#000000',
            height: 2,
            width: 36
        }}
        /> 
        <p>Or Sign In With</p>
        <hr style={{
            color: '#000000',
            backgroundColor: '#000000',
            height: 2,
            width: 36
        }}
        />
        </div>
        <button className="h-12 w-28 border-2 border-[#D4D4D4] rounded-lg font-bold">
          <span>
            <i className="fa-brands fa-google pr-2" style={{color: "#797979"}}></i>Google
          </span>
        </button>
      </div>
    </div>
  );
}

export default AuthForm;
