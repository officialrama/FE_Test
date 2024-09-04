'use client'

import { fetchApiLogin } from "@/fetchApi/homeApi";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();

  const {
    mutate: server_login,
  } = useMutation({
    mutationFn: fetchApiLogin,
    onSuccess: () => {
        router.push('/dashboard')
    }
  })
    return (
      <>
      
        <div className="bg-white dark:bg-gray-900">
    <div className="flex justify-center h-screen">
        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
            <div className="flex-1">
                <div className="text-center">
                    <div className="flex justify-center mx-auto">
                    </div>
                    <img src="/pt-jasa-marga.png" />
                </div>
                <div className="mt-8">
                    <form>
                        <div>
                            <label id="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Username</label>
                            <input type="email" name="email" id="email" placeholder="example@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div className="mt-6">
                            <div className="flex justify-between mb-2">
                                <label id="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                <a href="#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</a>
                            </div>
                            <input type="password" name="password" id="password" placeholder="Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </form>
                    <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                            onClick={() => server_login({ username:'Super Admin', password:'password12345'})}
                            >
                                Login
                            </button>
                        </div>
                </div>
            </div>
        </div>
        <div className="hidden bg-cover lg:block lg:w-2/3" style={{backgroundImage: "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)"}}>
            <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            </div>
        </div>
    </div>
</div>
      </>
    );
  }

  export default SignIn
  