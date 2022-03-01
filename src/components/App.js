import React, { useState } from 'react'
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
import Footer from './ui/Footer'

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [newValue, setNewValue] = useState(0)
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          newValue={newValue}
          setNewValue={setNewValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Routes>
          <Route
            path='/'
            element={<Home newValue={newValue} setNewValue={setNewValue} />}
          />
          <Route
            path='/services'
            element={<Services newValue={newValue} setNewValue={setNewValue} />}
          />
          <Route path='/revolution' element={<Revolution />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/mobileapps' element={<MobileApps />} />
          <Route path='/customsoftware' element={<CustomSoftware />} />
          <Route path='/websites' element={<Websites />} />
          <Route path='/estimate' element={<Estimate />} />
        </Routes>
        <Footer
          newValue={newValue}
          setNewValue={setNewValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
