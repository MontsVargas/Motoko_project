import List from './components/List'
import Singer from './components/Singer'
import Footer from './components/Footer'
import { AddProvider } from './context/AddProvider'

function App() {

  return (
    <>
      <div className='flex'>
        <AddProvider>
          <Singer/>
          <List/>
        </AddProvider>
      </div>
      <Footer/>
    </>
  );
}

export default App;
