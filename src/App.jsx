import { useState } from 'react';

import './App.css';

function App() {
    return (
        <>
            <dib>
                <img
                    class="profilePhoto"
                    src="data:image/jpeg;base64,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"
                />
                <h1>It's me!</h1>
                <h2>
                    I'm a full-stack web developer dedicated to making online
                    dreams a reality.
                </h2>
                <p>
                    The standard Lorem Ipsum passage, used since the 1500s
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                </p>
                <br />
                <p>
                    The standard Lorem Ipsum passage, used since the 1500s
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                </p>
            </dib>
        </>
    );
}

export default App;
