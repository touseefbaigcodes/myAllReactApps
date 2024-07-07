import React, {useState} from 'react'

export default function Txtutility(props) {
    const [text, settext] = useState('');

  const [txt, settxt] = useState({
    backgroundColor: 'white',
  })



  const Handlechange = (event) => {
    settext(event.target.value);
  };

  const UpperCase = () => {
    settext(text.toUpperCase());
    props.showalert("Uppercase clicked","success")
  };
  
  const lowerCase = () => {
    settext(text.toLowerCase());
    props.showalert("uppercase","success");
  };

  const cleartxt = () => {
    settext('');
  };

  const removeExtraSpaces = () => {
    let newText = text.replace(/\s+/g, ' ');
    settext(newText);
  };

  const copytxt = () => {
    const txt = document.getElementById('exampleFormControlTextarea1');
    txt.select();
    document.execCommand('copy');
  };

  
  const convertToSentenceCase = () => {
    const sentences = text.split('. ');

    const updatedText = sentences
      .map((sentence) => {
        if (sentence.length > 0) {
          return sentence.charAt(0).toUpperCase() + sentence.slice(1);
        }
        return sentence;
      })
      .join('. ');

    settext(updatedText);
  };

  return (
    <div className="container-fluid">
    <div className="container mb-3">
      <label htmlFor="exampleFormControlTextarea1" className="form-label ms-3">
        <h4>Enter the Text to Analyze below</h4>
      </label>
      <div className="container mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          rows="4"
          onChange={Handlechange}
          style={{backgroundColor: txt.backgroundColor==='white'? '#ede5e5': '#151818'}}          ></textarea>
      </div>
      <div className="container">
        <button
          type="button"
          className="btn btn-danger me-1"
          onClick={UpperCase}
        >
          UpperCase
        </button>
        <button
          type="button"
          className="btn btn-primary me-1"
          onClick={convertToSentenceCase}
        >
          Copy SentenceCase
        </button>
        <button
          type="button"
          className="btn btn-secondary me-1"
          onClick={copytxt}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-success me-1"
          onClick={lowerCase}
        >
          LowerCase
        </button>
        <button
          type="button"
          className="btn btn-warning me-1"
          onClick={removeExtraSpaces}
        >
          Remove ExtraSpaces
        </button>
        <button
          type="button"
          className="btn btn-info me-1"
          onClick={cleartxt}
        >
          Clear Text
        </button>
      </div>
    </div>
    <div className='container'>
    <h4>Your Text Summary</h4>
    <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} Minutes Read</p>
    </div>
  </div>

  )
}
