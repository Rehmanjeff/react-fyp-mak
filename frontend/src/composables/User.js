import axios from "axios"

const User = () => {

    const profile = async (token, username = '') => {

        try {

           if(username == ''){

             let response = await axios.get('http://127.0.0.1:8000/accounts/api/followers-list/', { headers: {"Authorization" : `Bearer ${token}`} });
             return response;
           }else{

            let response = await axios.get('http://127.0.0.1:8000/accounts/api/user/' + username + '/', { headers: {"Authorization" : `Bearer ${token}`} });
            return response;
           }
        }catch(err){

            return err;
        }
    };

    const follow = async (userId, token) => {
      try {
        
        const response = await axios.post(`http://127.0.0.1:8000/accounts/api/follow-user/${userId}/`, {}, { headers: {"Authorization" : `Bearer ${token}`} });
        return response;
      }catch(err){

          return err;
      }
    };

    const unfollow = async (token, id) => {

        try {

            let response = await axios.delete('http://127.0.0.1:8000/accounts/api/followers-list/'+id+'/', { headers: {"Authorization" : `Bearer ${token}`} });
            return response;
        }catch(err){

            return err;
        }
    };

    const update = async (token, data) => {

        try {
            
            let response = await axios.put('http://127.0.0.1:8000/accounts/api/user/update/',{first_name : data.first_name, last_name: data.last_name, phone_number:data.phone_number, is_private:data.is_private}, { headers: {"Authorization" : `Bearer ${token}`} });
            return response;
        } catch (err) {

            return err.response;
        }
    };

    const account = async (token) => {
       
        try {
            
          const response = await axios.get('http://127.0.0.1:8000/accounts/api/account/', {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
      
          return response;
        } catch (err) {
           
          return err.response;
        }
      };

    return {
        profile,
        unfollow,
        update,
        account,
        follow
    }
};

export default User;