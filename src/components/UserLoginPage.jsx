import React from 'react';
import './UserLoginPage.css';
import { useSupabaseClient } from './SupabaseContext';

function UserLoginPage() {
  const supabase = useSupabaseClient();

  const handleGoogleSignIn = async () => {
    if (!supabase) {
      console.error("Supabase client is not initialized.");
      return;
    }
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });

      if (error) {
        console.error("Error signing in with Google:", error.message);
        alert("Error signing in with Google: " + error.message);
      }
      // After successful sign-in, Supabase will handle redirecting back to your app
    } catch (error) {
      console.error("Unexpected error during Google sign-in:", error);
      alert("Unexpected error during Google sign-in.");
    }
  };

  return (
    <div className="user-login-page">
      <h2>User Login</h2>
      <div className="user-login-form">
        <button onClick={handleGoogleSignIn} className="google-login-button">
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default UserLoginPage;
