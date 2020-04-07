import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// check permissions
// import { checkPermission } from '@/utils';
import { appRoutes } from '@/routes';

import { Wrapper, Header } from './App.styles';
import * as actions from '../core.actions';
import * as selectors from '../core.selectors';
import { PATHS } from '@/constants';


const App: React.FC = () => {
  const dispatch = useDispatch();
 
  const isAuth = useSelector(selectors.getIsAuthed);
  const isAuthLoading = useSelector(selectors.getIsAuthLoading);
 
  useEffect(() => {
    dispatch(actions.checkAuth.request())
  }, [dispatch]);
 
  if(isAuthLoading) {
    return (
      <p>
        Loading...
      </p>
    )
  }
  
  

  return (
    <BrowserRouter>
      <React.Suspense fallback={<p>Loading...</p>}>
      <Wrapper>
        <Header>
          <Switch>
            {appRoutes.map((route, index) => {
             
              const { component: Component , ...rest }  = route;
          
              return (
                
                <Route
                  key={index}
                  {...rest}
                  render={props =>
                    isAuth || !route.isPrivate ? (
                      // @ts-ignore
                      <Component {...props} />
                    ) : ( 
                        <Redirect
                          to={{
                            pathname: PATHS.AUTH
                          }}
                        />
                      )
                  }
                />);
            })}
            <Redirect from={PATHS.ROOT} to={PATHS.AUTH} />
           
          
          </Switch>
          
          
        </Header>
      </Wrapper>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
