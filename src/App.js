import { Switch, Route, Redirect } from 'react-router-dom'
import Layout from './components/layout/Layout'
import AllQuotes from './pages/AllQuotes'
import NewQuote from './pages/NewQuote'
import NotFound from './pages/NotFound'
import QuoteDetail from './pages/QuoteDetail'

const App = () => {
  return (
    <Layout>
      <div>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/quotes' />
          </Route>

          <Route path='/quotes' exact>
            <AllQuotes />
          </Route>
          <Route path='/quotes/:id'>
            <QuoteDetail />
          </Route>
          <Route path='/new-quotes'>
            <NewQuote />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Layout>
  )
}

export default App
