import { MainRoute } from './routes'
import { GlobalStyles } from './styles/globalStyles'
import { ResetStyles } from './styles/reset'

function App() {
  return (
    <>
      <ResetStyles/>
      <GlobalStyles/>
      <MainRoute/>
    </>
  )
}

export default App
