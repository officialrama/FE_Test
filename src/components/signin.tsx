'use client'

import { fetchApiLogin } from "@/fetchApi/homeApi";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useHooksJasaMarga } from '@/app/hooks/inputhooks';

const SignIn = () => {
  const router = useRouter();
  const { input, handleChange } = useHooksJasaMarga()
  const {
    data,
    mutate: server_login,
  } = useMutation({
    mutationFn: fetchApiLogin,
    onSuccess: (data) => {
          localStorage.setItem('token', data.token);
          router.push('/dashboard');
      },
      onError: (error) => {
        console.error("Login failed:", error);
      }
    });
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
                        <div>
                            <label id="username" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Username</label>
                            <input type="username" name="username" id="username" placeholder="masukkan username" value={input.username} onChange={handleChange}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div className="mt-6">
                            <div className="flex justify-between mb-2">
                                <label id="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                            </div>
                            <input type="password" name="password" id="password" placeholder="masukkan password" value={input.password} onChange={handleChange}
                             className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                            onClick={() => server_login(input)}
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
  