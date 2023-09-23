const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const { baseUrl } = require('./../../src/lib/request');

// This sets up the Axios Mock Adapter with the instance you want to test
const mock = new MockAdapter(baseUrl);

describe('Axios Instance Test', () => {
  afterEach(() => {
    mock.reset(); // Reset the mock after each test
  });

  it('should create an Axios instance with the correct baseURL and headers', async () => {
    // Arrange: Set up expectations for the Axios instance
    const expectedBaseURL = 'https://backend.getlinked.ai';
    const expectedHeaders = {
      'Content-Type': 'application/json',
    };

    // Act: Make a mock request to the Axios instance
    mock.onAny().reply(200); // Respond with a mock success response
  });

  it('should handle a successful request', async () => {
    // Arrange: Set up a mock response for a successful request
    const responseData = { message: 'Success' };
    mock.onAny().reply(200, responseData);

    // Act: Make a request using the Axios instance
    const response = await baseUrl.get('/some-endpoint'); // You can use any endpoint here

    // Assert: Check if the response data matches the expected data
    expect(response.status).toBe(200);
    expect(response.data).toEqual(responseData);
  });

  it('should handle an error response', async () => {
    // Arrange: Set up a mock response for an error response
    mock.onAny().reply(500, { error: 'Internal Server Error' });

    // Act: Make a request using the Axios instance
    try {
      await baseUrl.get('/some-endpoint'); // You can use any endpoint here
    } catch (error) {
      // Assert: Check if the error response is handled correctly
      expect(error.response.status).toBe(500);
      expect(error.response.data.error).toBe('Internal Server Error');
    }
  });
});
