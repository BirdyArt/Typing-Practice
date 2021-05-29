import { useEffect, useState } from 'react';

const Paragraph = () => {
  const [currentText, setCurrentText] = useState(null);
  const [clickText, setClickText] = useState("Click to start");
  const [currentKey, setCurrentKey] = useState(0);
  const [text, setText] = useState(null);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    fetch("http://metaphorpsum.com/paragraphs/1/3")
    .then(resp => resp.text())
    .then(setCurrentText)
    console.log(resp => resp)
  }, [flag])
  
  const handleKeyDown = (e) => {
    if (e.key === text[currentKey].props.children) {
      setText(currentText.split('').map((el,i) => i <= currentKey ? <span style={{backgroundColor: "green"}} key={i}>{el}</span> : <span style={{backgroundColor: "white"}} key={i}>{el}</span> ));
      setCurrentKey(currentKey + 1);
    }
  }

  const handleRestart = () => {
    console.log(currentText)
    setClickText("Click to restart");
    setText(currentText.split('').map((el,i) => <span key={i}>{el}</span>));
    setCurrentKey(0);
        console.log('hi')

  };

  const handleGenerate = () => {
    setFlag(!flag);
    setText(currentText.split('').map((el,i) => <span key={i}>{el}</span>));
  }

  return (
    <div className="paragraph" tabIndex="0" onKeyDown={handleKeyDown}>
      <p className="text">{text}</p>
      <h2 onClick={handleRestart}>{clickText}</h2>
      <h2 onClick={handleGenerate}>Jump to next lesson</h2>
    </div>
  )
}

export default Paragraph;