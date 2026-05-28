import React from 'react'
import Card from './components/card'
import Logo from './components/logo'
const App = () => {
  return (

    <div>
      <Logo />
      <div className='Company-Card'>
        <div>
          <Card className='s' name='Google' work='Senior UI/UX Designer'image='https://th.bing.com/th/id/OIP.fdZ1QXChVTeaa5YbnGoaZgHaHa?w=183&h=183&c=7&r=0&o=7&dpr=1.2&pid=1.7&rm=3' />
        </div>
        <div>
          <Card name='Netflix' work='Graphic Designer'image='https://th.bing.com/th/id/OIP.XNoGLQtdRIif5uDdIhHtBwHaHa?w=164&h=180&c=7&r=0&o=7&dpr=1.2&pid=1.7&rm=3' />
        </div>
        <div>
          <Card name='Apple' work='Senior Motion Designer'image='https://static.vecteezy.com/system/resources/previews/022/424/614/original/apple-logo-black-isolated-on-white-background-free-vector.jpg'/>
        </div>
        <div>
          <Card name='Amazon' work='Backend Developer'image='https://m.media-amazon.com/images/G/32/highvelocityevents/og_image/logo._CB641320861_.png'/>
        </div>
      </div>


    </div>
  )
}

export default App
