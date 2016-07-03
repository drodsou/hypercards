import appCtrl from './appCtrl';
import appView from './appView';
import appModel from './appModel';

appCtrl.subscribe(appView.render)
appCtrl.setState(appModel.initialState)

