import {useDispatch, useSelector} from "react-redux";
import {SetAlerts} from "./redux/action/AlertAction";
import {AlertMapper} from "./AlertMapper";
export const AlertRequestStore = () =>{
    const alerts = useSelector(state => state.alertReducer.alerts);
    const dispatch = useDispatch();

    const getAlerts = () =>{
        return AlertMapper.mapAlertJsonToEntities(alerts);
    }

    const addAlerts = (alert) =>{
        let alertEntities = AlertMapper.mapAlertJsonToEntities(alerts);
        alertEntities.push(alert);
        dispatch(SetAlerts(JSON.stringify(alertEntities)));
    }

    const setAlerts = (json) =>{
        dispatch(SetAlerts(json));
        return true;
    }
    return{
        getAlerts,
        addAlerts,
        setAlerts
    }
}