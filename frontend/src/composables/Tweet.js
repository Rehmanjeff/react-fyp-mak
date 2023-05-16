import axios from "axios"

const Tweet = () => {

    const token = localStorage.getItem('dynoAuthToken')
    const createTweet = async (tweet) => {

        try {

            let response = await axios.post('http://127.0.0.1:8000/social/api/get-tweet/tweet/', { text: tweet }, { headers: {"Authorization" : `Bearer ${token}`} });
            return response;
        } catch (err) {

            return err;
        }
    };

    const userHomeFeed = async () => {

        try {

            let response = await axios.get('http://127.0.0.1:8000/social/api/tweet/', { headers: {"Authorization" : `Bearer ${token}`} });
            return response;
        } catch (err) {

            return err;
        }
    };

    const userProfileTweets = async () => {

        try {

            let response = await axios.get('http://127.0.0.1:8000/social/api/tweet/profile', { headers: {"Authorization" : `Bearer ${token}`} });
            return response;
        } catch (err) {

            return err;
        }
    };

    const userLikedTweets = async () => {

        try {

            let response = await axios.get('http://127.0.0.1:8000/social/api/tweet/profile/liked', { headers: {"Authorization" : `Bearer ${token}`} });
            return response;
        } catch (err) {

            return err;
        }
    };

    const toggleLikeTweet = async (id, action) => {

        try {

            if(action == 'like'){

                let response = await axios.post('http://127.0.0.1:8000/social/api/tweet-like/' + id + '/', {}, { headers: {"Authorization" : `Bearer ${token}`} });
                return response;
            }else if(action == 'unlike'){

                let response = await axios.delete('http://127.0.0.1:8000/social/api/tweet-like/' + id + '/', { headers: {"Authorization" : `Bearer ${token}`} });
                return response;
            }
        }catch(err){

            return err;
        }
    };

    return {
        createTweet,
        userHomeFeed,
        userProfileTweets,
        userLikedTweets,
        toggleLikeTweet
    }
};

export default Tweet;