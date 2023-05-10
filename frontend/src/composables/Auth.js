import axios from "axios"

const Auth = () => {

    const login = async (email, password) => {
        try {
            let response = await axios.post("http://127.0.0.1:8000/accounts/api/token/", {username: email, password: password})
            if (response.status == 200) {
                return response.data
            }else{
                return 'No data available'
            }
        } catch (err) {
            return err.message
        }
    };

    return {
        login
    }
};

export default Auth;