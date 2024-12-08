import { BrowserRouter, Routes, Route } from "react-router"
import { ThemeProvider } from "styled-components"
import Home from "./pages/Home"
import theme from "./theme"

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
