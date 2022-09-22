import { View, StatusBar } from 'react-native';
import { useFonts, Lato_400Regular, Lato_700Bold, Lato_900Black } from '@expo-google-fonts/lato';

import { Home } from './src/screens/Home';
import { Loading } from './src/components/Loading';

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
        
      {fontsLoaded ? <Home /> : <Loading />}
    </View>
  );
}


    
    
    
    
   
