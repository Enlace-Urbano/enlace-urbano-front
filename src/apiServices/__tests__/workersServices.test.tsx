import axios from "axios";

describe("Testing axios.get", () => {
  it("should fetch workers from the Backend", async () => {
    const response = await axios.get('http://localhost:3000/api/v1/workers/');
    expect(response.status).toEqual(200);
  });
});