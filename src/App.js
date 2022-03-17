import React from 'react'

import './App.css'

import StickyDiscount from './components/header/StickyDiscount'
import Header from './components/header/Header'
import SuccessStoriesLayout from './layouts/SuccessStories/SuccessStories'
import YogaLayout from './layouts/Yoga/Yoga'
import Accordion from './components/accordion/Accordion'
import HeadContent from './components/header/HeadContent'
import FooterContent from './components/footer/FooterContent'

function App() {
  return (
    <div className="App">
      <StickyDiscount text="50% discount only valid for 00:15:49" />
      <Header />
      <HeadContent />
      <SuccessStoriesLayout />
      <YogaLayout />
      <Accordion />
      <FooterContent />
    </div>
  )
}

export default App
