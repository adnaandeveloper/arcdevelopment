import Header from './ui/Header'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './ui/Theme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Services from './screens/Services'
import Revolution from './screens/Revolution'
import AboutUs from './screens/AboutUs'
import ContactUs from './screens/ContactUs'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/revolution' element={<Revolution />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
