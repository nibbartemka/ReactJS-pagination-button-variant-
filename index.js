import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const LIST = ['Питер', 'Бенджамин', 'Паркер', '(англ. Peter Benjamin Parker)',
    'обычный парнишка', 'который однажды был укушен', 'радиоактивным пауком'];

function MyComponent (props) {
    const wordList = props.list;
    const totalWords = wordList.length;
    const n = props.n;
    const [curWord, setCurWord] = React.useState(n);

    function press() {
        let newValue = (curWord + n > totalWords) ? totalWords : curWord + n;
        setCurWord(newValue);
    }

    return (
        <>
            {
                (curWord < totalWords) &&
                <>
                    {
                        wordList.slice(0, curWord)
                                .map((item, index) => <p key = {index}>{item}</p>)
                    }
                    <input type = "button" value = "Показать еще" onClick={() => press()}/>
                </>
            }
            {
                (curWord >= totalWords) &&
                <>
                    {
                        wordList.slice(0, curWord)
                                .map((item, index) => <p key = {index}>{item}</p>)
                    }
                </>
            }
        </>
    );
}

root.render(<MyComponent list = {LIST} n = {2} />);

reportWebVitals();
