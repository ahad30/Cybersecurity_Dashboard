import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';
import { FiEyeOff } from "react-icons/fi";
import { AuthContext } from '../../../Providers/AuthProvider';
import { toast } from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { createUser, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        if (password.length < 6) {
            toast.error('Password should be at least 6 characters or longer and a uppercase and lowercase');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Your password should have at least one upper case characters.');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.error('Your password should have at least one lower case characters.');
            return;
        }

        setIsLoading(true);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                
                // Update user profile
                return updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                }).then(() => {
                    logOut();
                    toast.success('Registered Successfully');
                    navigate('/login');
                });
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message || 'Email already in use');
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl">Register Here!</h1>
            </div>

            <form onSubmit={handleRegister} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <div className="form-control">
                        <input
                            type="text"
                            name='name'
                            required
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter name"
                        />
                    </div>
                </div>

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
                    <label htmlFor="name" className="sr-only">Photo Url</label>
                    <div className="form-control">
                        <input
                            type="text"
                            name='photo'
                            required
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Photo Url"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="sr-only">Password</label>
                    <div className="form-control relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name='password'
                            required
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter password"
                        />
                        {showPassword ? (
                            <FiEyeOff
                                size={35}
                                className="absolute inset-y-2 right-0 pr-4 cursor-pointer"
                                onClick={() => setShowPassword(false)}
                            />
                        ) : (
                            <FaEye
                                size={35}
                                className="absolute inset-y-2 right-0 pr-4 cursor-pointer"
                                onClick={() => setShowPassword(true)}
                            />
                        )}
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                        Already registered?
                        <Link to="/login">
                            <button className="underline">Log in</button>
                        </Link>
                    </p>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white flex items-center justify-center min-w-[120px] ${isLoading ? 'opacity-75' : ''}`}
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
                            'Register'
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Register;