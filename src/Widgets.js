import React from 'react';
import './Widgets.css';
import SearchIcon from '@material-ui/icons/Search'
import {

    // eslint-disable-next-line
    TwitterTimelineEmbed,
    // eslint-disable-next-line
    TwitterShareButton,
    // eslint-disable-next-line
    TwitterTweeEmbed,
    // eslint-disable-next-line
    TwitterTweetEmbed,
} from "react-twitter-embed"

function Widgets() {
    return (
        <div className = "widgets">
            <div className = "widgets_input">
                <SearchIcon className = "widgets_searchIcon" />
                <input type = "text" placeholder = "Search Twitter" />

            </div>
        </div>

    )
}

export default Widgets;
