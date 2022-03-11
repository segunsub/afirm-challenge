import React from 'react';
import EmptyStar from './assets/empty-star.svg';
import './styles.css';
import FilledStar from './assets/filled-star.svg';

const RatingSystem = () => {
  const [star,setStar] = useState({
    current: 0,
    prev: 0
  })
  const [count,setCount] = useState(0)
  const [starChange,setStarChange] = useState({
    1:EmptyStar,
    2:EmptyStar,
    3:EmptyStar,
    4:EmptyStar,
    5:EmptyStar,
    submit: false
  })
  const reset = () => {
    setStarChange({
      1:EmptyStar,
      2:EmptyStar,
      3:EmptyStar,
      4:EmptyStar,
      5:EmptyStar,
      submit: false
    })
  }
  useEffect(() => {
    if(star.current !== 0) {
      const copy = {...starChange}
      for(let i=0; i <= star.current; i++) {
        copy[i] = FilledStar
      }
      console.log(star,'dup')
      if(star.current === star.prev) {
        console.log('twice')
        copy[star.current] = EmptyStar
      }
      setStarChange(copy)
    }else {
      if(starChange.submit === false) {
        reset()
      }
    }
  
  }, [star])
  
  const HandleStarClick = (e) => {
    const copy = {...star}
    setCount((prev) => prev + 1)
    if(count >= 2) {
      copy.prev = copy.current
    }else {
      setCount(0)
    }
    copy.current = e._targetInst.key
    setStar(copy)
  
    const sCopy = {...starChange}
    sCopy.submit = true;
    setStarChange(sCopy)
  }
  const HandleMouseOver = (e) => {
    e.persist()
    reset()
    const copy = {...star}
    copy.prev = copy.current
    copy.current = e._targetInst.key
    setStar(copy)
  }
  const HandleMouseOut = () => {
    const copy = {...star}
    // copy.prev = copy.current
    copy.current = 0
    setStar(copy)
  }
  return (
    <div>
      <h1>5 star rating system</h1>
      <h2>Select a rating:</h2>
      <img src={starChange[1]} alt="empty star" star={1} key={1} onClick={HandleStarClick} onMouseOver={HandleMouseOver} onMouseOut={HandleMouseOut}/>
      <img src={starChange[2]} alt="empty star"  key={2} onClick={HandleStarClick} onMouseOver={HandleMouseOver} onMouseOut={HandleMouseOut}/>
      <img src={starChange[3]} alt="empty star"  key={3} onClick={HandleStarClick} onMouseOver={HandleMouseOver} onMouseOut={HandleMouseOut}/>
      <img src={starChange[4]} alt="empty star"  key={4} onClick={HandleStarClick} onMouseOver={HandleMouseOver} onMouseOut={HandleMouseOut}/>
      <img src={starChange[5]} alt="empty star"  key={5} onClick={HandleStarClick} onMouseOver={HandleMouseOver} onMouseOut={HandleMouseOut}/>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <RatingSystem />
    </div>
  )
};
