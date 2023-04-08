import Names from "../PegeObject/Name";

describe("Test API", () => {
  const names = new Names();

  let accessToken =
    "fc429ea469eab87eaa9bc3744e1eb1f265b9a81362112eef76ec0c730e1b8ac7";

  let randomText = "";
  let testEmail = "";
  let bodyId = "";
  let putEmail = "";
  let name = names.generateNames(1);

  it("create user test", () => {
    var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 5; i++)
      randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
    testEmail = randomText + "@gmail.com";
    putEmail = randomText + "@gmail.com";

    cy.fixture("createuser").then((payload) => {
      //1. create user (POST)
      cy.request({
        method: "POST",
        url: "https://gorest.co.in/public/v2/users",
        headers: {
          Authorization: "Bearer " + accessToken,
        },

        body: {
          name: payload.name,
          gender: payload.gender,
          email: `${testEmail}`,
          status: payload.status,
        },
      }).then((response) => {
          expect(response.status).to.eq(201);
          expect(response.body).to.have.property("name", payload.name);
          expect(response.body).to.have.property("gender", payload.gender);
          expect(response.body).to.have.property("email", `${testEmail}`);
          expect(response.body).to.have.property("status", payload.status);
        }).then((res) => {
          bodyId = res.body.id;

          cy.log("user id is:" + bodyId);

          //2. get user (GET)
          cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users/" + bodyId,
            headers: {
              Authorization: "Bearer " + accessToken,
            },
          });
        }).then((res2) => {
          //const userId = res2.body.id
          cy.log("user id is:" + bodyId);

          expect(res2.status).to.eq(200);
          expect(res2.body).to.have.property("id", bodyId);
          expect(res2.body).to.have.property("name", payload.name);
          expect(res2.body).to.have.property("status", payload.status);
          expect(res2.body).to.have.property("email", testEmail);
        }).then((res3) => {
          cy.log("user id is:" + bodyId);

          //3. update user (PUT)
          cy.request({
            method: "PUT",
            url: "https://gorest.co.in/public/v1/users/" + bodyId,
            headers: {
              Authorization: "Bearer " + accessToken,
            },
            body: {
              name: name,
              gender: "male",
              email: putEmail,
              status: "inactive",
            },
          }).then((res) => {
            cy.log("user id is:" + putEmail);
            expect(res.status).to.eq(200);
            expect(res.body.data).has.property("email", putEmail);
            expect(res.body.data).has.property("name", name);
            expect(res.body.data).has.property("status", "inactive");
            expect(res.body.data).has.property("gender", "male");
          });
        });
    });
  });
});
