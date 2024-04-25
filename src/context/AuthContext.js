import {createContext, useState, useEffect} from "react";
// import * as jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom';
const swal = require('sweetalert2')


const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [authTokens, setAuthTokens] = useState(() =>
        localStorage.getItem("authTokens")
            ? JSON.parse(localStorage.getItem("authTokens"))
            : null
    );
    

    const [user] = useState(() => 
        localStorage.getItem("authTokens")
           
    );


    const [loading, setLoading] = useState(true);


    const loginUser = async (username, password) => {
        const response = await fetch("http://127.0.0.1:8000/api/login/", {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                username, password
            })
        })
        const data = await response.json()
        console.log(data);

        if(response.status === 200){
            console.log("Logged In");
            setAuthTokens(data)
            // setUser(jwt_decode(data.access))

            localStorage.setItem("authTokens", JSON.stringify(data))
            navigate("/");
            swal.fire({
                title: "Login Successful",
                icon: "success",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            })

        } else {    
            console.log(response.status);
            console.log("there was a server issue");
            swal.fire({
                title: "Username or passowrd does not exists",
                icon: "error",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            })
        }
    }

    const registerUser = async ( username, first_name, last_name, password, email, phone) => {
        const response = await fetch("http://127.0.0.1:8000/api/register/", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                username, first_name, last_name, password, email, phone
            })
        })
        const data = await response.json()
        console.log(data);
        if(response.status === 201){
            console.log("Registration Successful");
            setAuthTokens(data)
            // setUser(jwt_decode(data.access))
            localStorage.setItem("authTokens", JSON.stringify(data))
            navigate("/");
            swal.fire({
                title: "Registration Successful And Loged In",
                icon: "success",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            })
        } else {
            console.log(response.status);
            console.log("there was a server issue");
            swal.fire({
                title: "An Error Occured " + response.status,
                icon: "error",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            })
        }
    }

    const logoutUser = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/logout/", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${authTokens.access}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ refresh: authTokens.refresh })
            });
            if (response.status === 204) {
                console.log("Logged out successfully");
                setAuthTokens(null);
                localStorage.removeItem("authTokens");
                localStorage.clear();
                navigate("/");
                swal.fire({
                    title: "You have been logged out",
                    icon: "success",
                    toast: true,
                    timer: 6000,
                    position: 'top-right',
                    timerProgressBar: true,
                    showConfirmButton: false,
                });
            } else {
                console.error("Logout failed");
                swal.fire({
                    title: "Logout failed",
                    text: "An error occurred while logging out",
                    icon: "error",
                    toast: true,
                    timer: 6000,
                    position: 'top-right',
                    timerProgressBar: true,
                    showConfirmButton: false,
                });
            }
        } catch (error) {
            console.error("Error logging out:", error);
            swal.fire({
                title: "An Error Occurred",
                text: "Logout failed",
                icon: "error",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            });
        }
    }

    const resetPassword = async (email) => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/password-reset/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            });

            if (response.status === 200) {
                console.log("Password reset successful");
                swal.fire({
                    title: "Password Reset Successful",
                    icon: "success",
                    toast: true,
                    timer: 6000,
                    position: 'top-right',
                    timerProgressBar: true,
                    showConfirmButton: false,
                });
            } else {
                console.error("Password reset failed");
                swal.fire({
                    title: "Password Reset Failed",
                    icon: "error",
                    toast: true,
                    timer: 6000,
                    position: 'top-right',
                    timerProgressBar: true,
                    showConfirmButton: false,
                });
            }
        } catch (error) {
            console.error("Error resetting password:", error);
            swal.fire({
                title: "An Error Occurred",
                text: "Password reset failed",
                icon: "error",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            });
        }
    }

    const contextData = {
        user, 
        resetPassword,
        authTokens,
        setAuthTokens,
        registerUser,
        loginUser,
        logoutUser,
    }

    useEffect(() => {
        // if (authTokens) {
        //     setUser(jwt_decode(authTokens.access))
        // }
        setLoading(false)
    }, [authTokens, loading])

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    )

}