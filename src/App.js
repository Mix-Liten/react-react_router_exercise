import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Post from './pages/Post'
import NotFound from './pages/NotFound'

function App() {
  return (
    // <BrowserRouter> 使用 history API
    // basename prop 設定 route 群組，EX: basename="/blog"，/about => /blog/about
    // forceRefresh prop 換頁時強制更新全頁面，而非只更新 DOM
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
      <div className="page-content">
        {/* <Switch> 渲染第一個符合 path 條件的 <Route> 或 <Redirect> */}
        {/* <Switch> 可視為群組，一個頁面不同區塊，每個區塊依照網址更換顯示元件 */}
        <Switch>
          {/* exact prop 網址完全符合才會匹配 */}
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          {/* 傳遞 URL Params 給元件 */}
          <Route path="/post/:id" component={Post} />
          {/* 同原生 switch 語法，配置 default 處理 */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
