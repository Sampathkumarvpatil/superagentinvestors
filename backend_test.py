import requests
import unittest
import os
import json

class BackendAPITest(unittest.TestCase):
    def setUp(self):
        # Get the backend URL from the frontend .env file
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    self.base_url = line.strip().split('=')[1]
                    break
        
        print(f"Using backend URL: {self.base_url}")
        
        # Add /api prefix for all endpoints
        self.api_url = f"{self.base_url}/api"
    
    def test_root_endpoint(self):
        """Test the root API endpoint"""
        response = requests.get(f"{self.api_url}/")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data["message"], "Hello World")
        print("✅ Root endpoint test passed")
    
    def test_status_endpoint_post(self):
        """Test posting to the status endpoint"""
        payload = {"client_name": "test_client"}
        response = requests.post(f"{self.api_url}/status", json=payload)
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data["client_name"], "test_client")
        self.assertIn("id", data)
        self.assertIn("timestamp", data)
        print("✅ Status POST endpoint test passed")
    
    def test_status_endpoint_get(self):
        """Test getting from the status endpoint"""
        response = requests.get(f"{self.api_url}/status")
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertIsInstance(data, list)
        if len(data) > 0:
            self.assertIn("client_name", data[0])
            self.assertIn("id", data[0])
            self.assertIn("timestamp", data[0])
        print("✅ Status GET endpoint test passed")

if __name__ == "__main__":
    unittest.main(verbosity=2)