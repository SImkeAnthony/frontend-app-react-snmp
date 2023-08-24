/**
 * Before running this test, ensure you ran API Rest before and a single SNMP agent freestanding if you want to receive information in body request
 * this third parties are available here : API Rest : https://github.com/SImkeAnthony/backend-app-springboot-snmp.git
 *                                         SNMP agent : https://github.com/SImkeAnthony/agent-snmp.git
 */

describe("App E2E Test",()=> {

    afterEach(() => {
        cy.reload();
    });

    it("should be perform call API and pages build well", () => {
        cy.request('GET', 'http://localhost:8080').then(response => {
            expect(response.status).to.equal(200);

            cy.fixture('response-expected.json').then((data)=>{
                expect(response.body).to.deep.equal(data);
            })

            //check each page
            cy.visit("http://localhost:3000/");

            cy.contains("Network Statistics");
            cy.contains("Traffic Statistics");
            cy.contains("Machines Statistics");
            cy.contains("generic.hostname.local");

            cy.visit("http://localhost:3000/network");

            cy.get('table tr:first-child td:nth-child(3)').should("contain","56-65-03-a3-c6-d6");
            cy.get('table tr:nth-child(2) td:nth-child(2)').should("contain","intel R NIC ethernet 10GB");

            cy.contains("Interfaces Statistics");

            cy.visit("http://localhost:3000/deviceInfo");

            cy.get('[testId="IdentityCard:1"]').should("exist");
            cy.get('[testId="IdentityCard:1"]').should("contain","Hostname: generic.hostname.local");
            cy.get('[testId="IdentityCard:1"]').should("contain","Operating System: generic os by generic society");
            cy.get('[testId="IdentityCard:1"]').should("contain","SNMP: true");

            cy.visit("http://localhost:3000/service");

            cy.contains("Services List");
            cy.contains("Services Statistics");

            cy.get('[testId="ServiceCard:1"]').should("exist");
            cy.get('[testId="ServiceCard:1"]').should("contain","name: web-planing-access");
            cy.get('[testId="ServiceCard:1"]').should("contain","description: this is a site web to access on planing platform");
            cy.get('[testId="ServiceCard:1"]').should("contain","used port: 8088-3132");

            cy.get('[testId="ServiceCard:2"]').should("exist");
            cy.get('[testId="ServiceCard:2"]').should("contain","name: database-access");
            cy.get('[testId="ServiceCard:2"]').should("contain","description: this is a access to a database");
            cy.get('[testId="ServiceCard:2"]').should("contain","used port: 5432");

            cy.visit("http://localhost:3000/inventory");

            cy.contains("Processor Description");
            cy.contains("Processor Statistics");
            cy.contains("Persistent Storage Description");
            cy.contains("Persistent Storage Statistics");
            cy.contains("Volatile Storage Description");
            cy.contains("Volatile Storage Statistics");

            cy.get("table").eq(0).as("processorTable").should("exist");
            cy.get("table").eq(1).as("persistentStorageTable").should("exist");
            cy.get("table").eq(2).as("volatileStorageTable").should("exist");

            cy.get("@processorTable").find("tr").eq(1).find("td").eq(0).should("contain","intel core i9 12900k");
            cy.get("@processorTable").find("tr").eq(2).find("td").eq(2).should("contain",36);

            cy.get("@persistentStorageTable").find("tr").eq(1).find("td").eq(1).should("contain",180);
            cy.get("@persistentStorageTable").find("tr").eq(2).find("td").eq(0).should("contain","WD purple 2T0");

            cy.get("@volatileStorageTable").find("tr").eq(1).find("td").eq(2).should("contain",3200);
            cy.get("@volatileStorageTable").find("tr").eq(2).find("td").eq(0).should("contain","Crucial RAM 2");

            cy.visit("http://localhost:3000/alert");

            cy.contains("Alert Log");
            cy.contains("Alert Form");
            cy.contains("Alert Available");

            cy.get("table").eq(0).as("alertLogTable").should("exist").find("tr").should("have.length",1);
            cy.get("table").eq(1).as("alertAvailableTable").should("exist").find("tr").should("have.length",1);

            cy.visit("http://localhost:3000/404");

            cy.contains("Error 404 Not Found");

            cy.visit("http://localhost:3000/500");

            cy.contains("Error 500 Server down");
        });
    });
});