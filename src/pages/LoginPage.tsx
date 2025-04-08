import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom"; // Only if using React Router

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md space-y-6 bg-white shadow-xl rounded-2xl p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Log in to your account</h2>
          <p className="mt-1 text-sm text-gray-500">Welcome back to BridgeFi 👋</p>
        </div>

        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <Input id="email" name="email" type="email" required autoComplete="email" className="mt-1" />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Input id="password" name="password" type="password" required autoComplete="current-password" className="mt-1" />
          </div>

          <Button type="submit" className="w-full bg-bridge-green hover:bg-bridge-green-800 text-white rounded-full">
            Sign in
          </Button>
        </form>

        <div className="text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-bridge-green-700 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
