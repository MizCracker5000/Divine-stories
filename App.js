import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import FeedScreen from './screens/FeedScreen';
import CreateStoryScreen from './screens/CreateStoryScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Tab.Navigator>
     <Tab.Screen name="Home" component={FeedScreen} />
      <Tab.Screen name="Crear Historia" component={CreateStoryScreen} />
     </Tab.Navigator>
   </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
