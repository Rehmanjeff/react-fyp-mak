import React from 'react'
import './TweetBox.css'
import {Avatar, Button} from "@material-ui/core"

function TweetBox() {
    return (
        <div className = "tweetBox">
            <form>
                <div className= "tweetBox_input"onClick={event =>  window.location.href='/ProfileHeader'} >
                
                <Avatar src="https://www.google.com/search?q=no+dp+png&tbm=isch&ved=2ahUKEwjRnIGWr877AhWCyAIHHZtIA1IQ2-cCegQIABAA&oq=no+dp+png&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgQIABBDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoECCMQJ1DNA1jHCGDUCWgAcAB4AIAB5AGIAYkFkgEDMi0zmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=3ViDY5G6OIKRi-gPm5GNkAU&bih=952&biw=1903&rlz=1C1CHBF_enPK992PK992&hl=en#imgrc=H6pHpB03ZEAgeM" />
                <input placeholder = "What's Happening?" type="text"  />
                </div>
                <div className= "tweetBox_imageInput">
                <input placeholder = "Optional: Enter image URL" type="text"  />
                </div>
                <Button className = "tweetBox_tweetButton">Tweet</Button>
            </form>
            
        </div>
    )
}

export default TweetBox
