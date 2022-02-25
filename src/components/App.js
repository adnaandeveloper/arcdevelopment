import Header from './ui/Header'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './ui/Theme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Services from './screens/Services'
import Revolution from './screens/Revolution'
import AboutUs from './screens/AboutUs'
import ContactUs from './screens/ContactUs'
import CustomSoftware from './screens/CustomSoftware'
import MobileApps from './screens/MobileApps'
import Websites from './screens/Websites'
import Estimate from './screens/Estimate'

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
          <Route path='/mobileapps' element={<MobileApps />} />
          <Route path='/customsoftware' element={<CustomSoftware />} />
          <Route path='/websites' element={<Websites />} />
          <Route path='/estimate' element={<Estimate />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
