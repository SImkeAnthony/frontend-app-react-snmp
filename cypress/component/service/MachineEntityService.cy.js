import MachineEntityService from "../../../src/services/MachineEntityService.js";

describe('MachineEntityService testing and mocking API', () => {
  afterEach(()=>{
      cy.reload();
  })
  const stubData = {
    status:200,
    data:[
      {
        id:1,
        hostname:"pc1.local",
        os:"windows",
        snmp:true
      },
      {
        id:2,
        hostname: "pc2.local",
        os:"linux ubuntu",
        snmp:false
      }
    ]
  }
  it('should be return a body json from api call', () => {
    cy.stub(MachineEntityService,"getMachineEntities").returns(stubData);
    let machineEntities = MachineEntityService.getMachineEntities();

    expect(machineEntities.status).equal(200);
    expect(machineEntities.data.length).equal(2);
    expect(machineEntities.data.at(0).hostname).equal("pc1.local");
    expect(machineEntities.data.at(1).os).equal("linux ubuntu");

  });

  it("should be return empty body json from api call",()=>{
    cy.stub(MachineEntityService,"getMachineEntities").returns({status:505,data:[]});
    let machineEntities = MachineEntityService.getMachineEntities();

    expect(machineEntities.status).equal(505);
    expect(machineEntities.data.length).equal(0);
  });
})