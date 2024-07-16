import React,{useState} from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    const [category, setCategory] = useState([]);
    const [setshowCatogory, setSetshowCatogory] = useState(false);

  return (
    <nav>
        <div>
            <Link to="/">
            <img src="" alt="" /></Link>
        </div>
    </nav>
  )
}

export default Header