import {MACHINE_CALL_START} from "../../../src/services/MachineEntityService.js";
describe("App testing redux store",()=> {

    afterEach(()=>{
        cy.reload();
    });

    const stubData = [
        {
            id: 1,
            hostname: "pc1.local",
            os: "windows",
            snmp: true
        },
        {
            id: 2,
            hostname: "pc2.local",
            os: "linux ubuntu",
            snmp: false
        }
    ];
    it("should be init store", () => {

        cy.intercept("GET", MACHINE_CALL_START, {
            fixture: "data.json",
        }).as("getMachineEntities");

        cy.visit("http://localhost:3000");

        cy.wait('@getMachineEntities');

        cy.window().its('store').invoke('getState').its("machineEntityReducer").its("machineEntities").should('deep.equal', {
            machineEntities: stubData
        });
    });
});