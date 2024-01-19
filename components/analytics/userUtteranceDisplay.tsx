import React from 'react';


function breakTextIntoLines(text: string, maxWordsPerLine : number) {
    // Split text into individual words
    const words = text.split(' ');

    // Initialize an array to hold the lines
    const lines = [];

    // Iterate over the words and group them into lines
    for (let i = 0; i < words.length; i += maxWordsPerLine) {
        lines.push(words.slice(i, i + maxWordsPerLine).join(' '));
    }

    // Return the lines
    return lines;
}

function TextDisplay({ text, maxWordsPerLine } : propType) {
    // Break the text into lines
    const lines = breakTextIntoLines(text, maxWordsPerLine);

    return (
        <div>
            {lines.map((line, index) => (
                <React.Fragment key={index}>
                    {line}
                    <br />
                </React.Fragment>
            ))}
        </div>
    );
}

type propType = {
    text: string,
    maxWordsPerLine : number
}
const UserUtteranceDisplay = ({text,maxWordsPerLine} : propType) => {
    return <TextDisplay text={text} maxWordsPerLine={maxWordsPerLine} />;
}

export default UserUtteranceDisplay;
