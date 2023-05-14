import axios from "axios"

const Auth = () => {

    const login = async (email, password) => {

        const errorResponse = { message: '' };
        try {
            let response = await axios.post("http://127.0.0.1:8000/accounts/api/token/", {username: email, password: password})
            if (response.status == 200) {

                if (response.data.is_verified === true) {

                    let responsee = await fetch('http://127.0.0.1:8000/accounts/api/token/refresh/', {
                        method:'POST',
                        headers:{
                            'Content-Type':'application/json'
                        },
                        body:JSON.stringify({'refresh':response.data.refresh})
                    })

                    let data = await responsee.json()
                    return data
                }else{

                    errorResponse.message = 'user cannot be validated with given credentials'
                }
            }else{
                errorResponse.message = 'No data available'
            }
        } catch (err) {
            errorResponse.message = err.message
        }

        return errorResponse
    };

    const logout = async (token, tokenRefresh) => {

        try {

            let response = await axios.post('http://127.0.0.1:8000/accounts/api/logout/', { refresh: tokenRefresh },{ headers: {"Authorization" : `Bearer ${token}`} });
            if(response.status == 200){

                localStorage.removeItem('dynoAuthRefreshToken')
                localStorage.removeItem('dynoAuthToken')
            }

            return response;
        } catch (err) {

            return err.response;
        }
    };

    const signup = async (data) => {

        try {

            let response = await axios.post('http://127.0.0.1:8000/accounts/api/register/', { username: data.username, email: data.email, first_name: data.firstName, last_name: data.lastName, date_of_birth: data.dob, phone_number: data.phoneNumber, password: data.password, password2: data.password2 });
            return response;
        } catch (err) {

            return err.response;
        }
    };

    return {
        login,
        logout,
        signup
    }
};

export default Auth;