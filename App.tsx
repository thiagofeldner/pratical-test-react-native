import { View, StatusBar } from 'react-native';
import { useFonts, Lato_400Regular, Lato_700Bold, Lato_900Black } from '@expo-google-fonts/lato';

import { Loading } from './src/components/Loading';
import { Home } from './src/screens/Home';
import { Routes } from './src/routes';
//import { Routes } from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Lato_400Regular, 
    Lato_700Bold, 
    Lato_900Black
  });

  return (
    <View>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
      />
        
      {fontsLoaded ? <Routes /> : <Loading />}

      {/* {fontsLoaded ? <Routes /> : <Loading />} */}
    </View>
  );
}


    
    
    
    
   
