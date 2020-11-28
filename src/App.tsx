import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import GroupMainView from 'views/GroupMainView';//集团看板
import SimpleEchartView from 'views/SimpleEchartView';//简单的看板
const App: React.FC<any> = () => {
  return (<HashRouter>
    <Switch>
      <Route path="/sim" component={SimpleEchartView} />
      <Route path="/" component={GroupMainView} />
    </Switch>
  </HashRouter>
  );
}

export default App;
