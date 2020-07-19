import React from "react";

import "./style.css";


import PropTypes from "prop-types";





export default function Profile(props) {
    Profile.defaultProps = {
        name: "MarwaBENSAAD",
        bio: "Computer Science",
        profession: "Developpeur",
    };

    Profile.propTypes = {

        name: PropTypes.string,
        bio: PropTypes.string,
        profession: PropTypes.string
    };
    return (
        <div>

            <h1>{props.data.name}</h1>

            <h1>{props.data.bio}</h1>
            <h1>{props.data.profession}</h1>

        </div>






    );
}
