import { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from '../../../Providers/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = e => {
        e.preventDefault();
        setIsLoading(true);
        
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Logged in successfully');
                navigate(location?.state ? location.state : '/admin/home');
            })
            .catch(error => {
                toast.error("Invalid email or password");
                console.error(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    const handleGoogleSignIn = () => {

        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                toast.success('Logged in successfully');
                navigate(location?.state ? location.state : '/admin/home');
            })
            .catch(error => {
                console.error(error);
                toast.error("Google login failed");
            })
            .finally(() => {
   
            });
    }

    const handleGithubSignIn = () => {
        setIsLoading(true);
        signInWithGithub()
            .then(result => {
                console.log(result.user);
                toast.success('Logged in successfully');
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                toast.error("Github login failed");
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Log in here!</h1>
            </div>

            <form onSubmit={handleLogin} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <div className="form-control">
                        <input
                            type="email"
                            name='email'
                            required
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter email"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="sr-only">Password</label>
                    <div className="form-control">
                        <input
                            type="password"
                            name='password'
                            required
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter password"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                        No account?
                        <Link to="/register">    
                            <button className="underline" href="#">Register</button>
                        </Link>
                    </p>

                    <button
                        type="submit"
                        className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white flex items-center justify-center"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                            </>
                        ) : (
                            'Log in'
                        )}
                    </button>
                </div>
                <p className='text-center font-bold text-xl'>Or log in with</p>
            </form>
            
            <div className='flex gap-3 justify-center mt-3'>
                <button 
                    onClick={handleGoogleSignIn}
                    disabled={isLoading}
                    className={isLoading ? "opacity-50 cursor-not-allowed" : ""}
                >
                    <FaGoogle size={25} />
                </button>
                {/* <button 
                    onClick={handleGithubSignIn}
                    disabled={isLoading}
                    className={isLoading ? "opacity-50 cursor-not-allowed" : ""}
                >
                    <FaGithub size={25} />
                </button> */}
            </div>
        </div>
    )
}

export default Login;