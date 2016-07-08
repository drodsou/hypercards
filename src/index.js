import appCtrl from 'appCtrl';
import appView from 'appView';
import appModel from 'appModel';

//import es7 from '_other/es7'

appCtrl.subscribe(appView.render)
appCtrl.setState(appModel.initialState)



