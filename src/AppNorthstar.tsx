/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import "./App.css";
import {
    Avatar as StardustAvatar,
    Provider,
    teamsTheme,
} from "@fluentui/react-northstar";

const getImages = () => {
    const avatars = [];
    const names = [
        "Alpha",
        "Bravo",
        "Charlie",
        "Delta",
        "Echo",
        "Foxtrot",
        "Golf",
        "Hotel",
        "India",
        "Juliett",
        "Kilo",
        "Lima",
        "Mike",
        "November",
        "Oscar",
        "Papa",
        "Quebec",
        "Romeo",
        "Sierra",
        "Tango",
        "Uniform",
        "Victor",
        "Whiskey",
        "Xray",
        "Yankee",
        "Zulu",
    ];
    for (let index = 0; index < 306; index++) {
        const firstName = index / 25 > 0 ? index / 25 : index;
        const lastName = index % 25;
        const name = `${names[Math.floor(firstName)]} ${names[lastName]}`;
        const image = (
            <div
                style={{
                    width: "64px",
                    height: "64px",
                    justifyContent: "center",
                    display: "flex",
                }}
            >
                <StardustAvatar
                    image={{
                        src: `https://teams.microsoft.com/api/mt/part/dogfood/beta/users/defaultProfilePictureV2?displayName=${name}`,
                    }}
                    size={"larger"}
                />
            </div>
        );
        avatars.push(image);
    }

    return (
        <Provider theme={teamsTheme}>
            {<div className="grid-wrapper">{avatars}</div>}
        </Provider>
    );
};

const App = () => getImages();

export default App;
