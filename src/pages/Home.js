import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { increment,decrement,incrementByAmount } from '../redux/slice/counterSlice';
import { Button, createTheme, ThemeProvider, Typography } from '@mui/material';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import "../styles/Home.css"
function Home() {
  const dispatch = useDispatch();
  const number = useSelector((state)=> state.counter.value)
  const theme = createTheme({
    typography:{
      h2: {
        color: 'red',
        fontSize: '200px'
      }
    }
  })
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi! my name is Ray Chak</h2>
        <div className='prompt'>
          <p>A software developer for learning and creating.</p>
          <LinkedIn/>
          <Email/>
          <GitHub/>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-end</h2>
            <span> React.js, Redux, HTML, CSS, Next.js</span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span> Node.js, Java Spring, SpringBoot, MSSQL</span>
          </li>
          <li className='item'>
            <h2>Language</h2>
            <span> JavaScript, Java, Python, C++, TypeScript</span>
          </li>
        </ol>
      </div>
     

    </div>
  )
}

export default Home