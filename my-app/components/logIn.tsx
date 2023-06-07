import netlifyIdentity from 'netlify-identity-widget';
import { User } from 'netlify-identity-widget';
import { useState, useEffect } from "react";

export const LogIn = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // Initialize Netlify Identity
        netlifyIdentity.init();
    
        // Event listener for user change
        netlifyIdentity.on('login', (user: User) => {
            setUser(user);
        });
        
        netlifyIdentity.on('logout', () => {
            setUser(null);
        });
    
        // Open login modal on initial load
        // netlifyIdentity.open();
    }, []);

    const handleLogin = () => {
        netlifyIdentity.logout();
        netlifyIdentity.close();
        netlifyIdentity.open();
    };
    
    const handleLogout = () => {
        netlifyIdentity.logout();
    };

    return(
    <div className="h-screen grid grid-cols content-center bg-slate-950">
        <header className="flex justify-center pt-4">
            <img className="w-70 h-28 max-sm:w-70 max-sm:h-24" src="/GloryGas_title.png" />
        </header>
        <div className="flex justify-center">
            <button onClick={handleLogin} className="w-24 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-sm">Login</button>
        </div>
    </div>
    )
}

    