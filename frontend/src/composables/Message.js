import axios from "axios"

const Message = () => {

    const partnerList = async (token) => {
      try {
        
        const response = await axios.get('http://127.0.0.1:8000/messsages/api/chats/users/',  { headers: {"Authorization" : `Bearer ${token}`} });
        return response;
      }catch(err){

          return err;
      }
    };
   
    const messageChat = async (token,userId ) => {
      try {
        
        const response = await axios.get("http://127.0.0.1:8000/messsages/api/chats/message/"+userId+'/',  { headers: {"Authorization" : `Bearer ${token}`} });
        return response;
      }catch(err){

          return err;
      }
    };

    const postChat = async (token, userId, data) => {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/messsages/api/user-chat/" + userId + "/",
          data,  // Send the data object directly
          { headers: { "Authorization": `Bearer ${token}` } }
        );
        return response;
      } catch (err) {
        return err;
      }
    };
    
    const getUserId = async (token, username ) => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/messsages/api/user/" + username + "/",{ headers: { "Authorization": `Bearer ${token}` } });
        return response;
      } catch (err) {
        return err;
      }
    };


    return {
      
        partnerList,
        messageChat,
        postChat,
        getUserId
    }
};

export default Message;