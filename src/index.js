import appCtrl from 'ctrl/appCtrl';
import appView from 'view/appView';
import appModel from 'db/appModel';

//import es7 from '_other/es7b'

appCtrl.subscribe(appView.render)
appCtrl.setState(appModel.initialState)



