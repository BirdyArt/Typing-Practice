import { useEffect, useState } from 'react';

const Paragraph = () => {
  const [currentText, setCurrentText] = useState(null);
  const [clickText, setClickText] = useState("Click to start");
  const [currentKey, setCurrentKey] = useState(0);
  const [text, setText] = useState(null);

  const handleKeyDown = (e) => {
    if (e.key === text[currentKey].props.children) {
      setText(currentText.split('').map((el,i) => i <= currentKey ? <span style={{backgroundColor: "green"}} key={i}>{el}</span> : <span style={{backgroundColor: "white"}} key={i}>{el}</span> ));
      setCurrentKey(currentKey + 1);
    }
  }

  const handleOnclick = () => {
    setClickText("");
    setText(currentText.split('').map((el,i) => <span key={i}>{el}</span>));
  }

  useEffect(() => {
    fetch("http://metaphorpsum.com/paragraphs/2/4")
    .then(resp => resp.text())
    .then(setCurrentText)
  }, [])

  return (
    <div className="paragraph" tabIndex="0" onClick={handleOnclick} onKeyDown={handleKeyDown}>
      <p className="text">{text}</p>
      <h2>{clickText}</h2>
    </div>
  )
}

export default Paragraph;