import Alert from "./entity/Alert";
export class AlertMapper{
    static mapAlertJsonToEntities(json){
        let alerts = [];
        for(let i=0;i<json.length;i++){
            alerts.push(new Alert(json[i].id,json[i].name,json[i].description,json[i].important));
        }
        return alerts;
    }
}