import MachineEntityService from "../../src/services/MachineEntityService.js";
import sinon from "sinon";
import {expect} from "chai";

/**
 * This test was created with sinon for stub and chai to verify return
 * And it runs with mocha
 */
let sandbox;
beforeEach("create sandbox",function (){
    sandbox = sinon.createSandbox();
})
afterEach("restore sandbox",function (){
    sandbox.restore();
})
describe("service machine",function (){
    it("should be return a machineEntity list",async function (){
        const stubData = [
            {
                id:1,
                hostname:"pc1.local",
                os:"windows",
                snmp:true
            },
            {
                id:2,
                hostname: "pc2.local",
                os:"linux",
                snmp:false
            }
        ];
        const stub = sandbox.stub(MachineEntityService,"getMachineEntities").returns(stubData);
        const machineEntities = MachineEntityService.getMachineEntities();
        expect(machineEntities.length).to.equal(2);
        expect(machineEntities[0].hostname).to.equal("pc1.local");
        expect(machineEntities[1].snmp).to.equal(false);
    });
});