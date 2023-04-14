import React from 'react'
import './Post.css'
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";



function Post({
    DisplayName,
    username,
    verified,
    text,
    avatar }) {
    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar src="https://www.google.com/search?q=no+dp+png&tbm=isch&ved=2ahUKEwjRnIGWr877AhWCyAIHHZtIA1IQ2-cCegQIABAA&oq=no+dp+png&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgQIABBDMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoECCMQJ1DNA1jHCGDUCWgAcAB4AIAB5AGIAYkFkgEDMi0zmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=3ViDY5G6OIKRi-gPm5GNkAU&bih=952&biw=1903&rlz=1C1CHBF_enPK992PK992&hl=en#imgrc=H6pHpB03ZEAgeM" />

            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>
                            Twitter User {" "}
                            <span className="post__headerSpecial" >
                                <VerifiedUserIcon className="post_badge" />
                            </span>
                        </h3>
                    </div>
                    <div className="post_headerDescription">
                        <p>Here user tweets text will be displayed</p>
                    </div>
                </div>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                <div className="post_footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
            </div>
        </div>
    )
}

export default Post;
