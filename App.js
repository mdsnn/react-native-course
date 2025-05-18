import { View, Text } from 'react-native'
import React from 'react'
import Greet from './Greet'
import AgeComponent from './components/AgeComponent'
import NameComponent from './components/NameComponent'
import FavSubject from './components/FavSubject'


const App = () => {
  return (
    <View>
      <Greet />
      <AgeComponent/>
      <FavSubject/>
      <NameComponent/>
      
    </View>
    

      
    
  )
}

export default App