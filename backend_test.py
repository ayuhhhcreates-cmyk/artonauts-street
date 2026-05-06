import requests
import sys
from datetime import datetime
import json

class ArtonautsAPITester:
    def __init__(self, base_url="https://fabrication-luxury.preview.emergentagent.com/api"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"Response: {json.dumps(response_data, indent=2)}")
                except:
                    print(f"Response: {response.text}")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"Response: {response.text}")

            self.test_results.append({
                "name": name,
                "method": method,
                "endpoint": endpoint,
                "expected_status": expected_status,
                "actual_status": response.status_code,
                "success": success,
                "response": response.text[:500] if response.text else ""
            })

            return success, response.json() if success and response.text else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.test_results.append({
                "name": name,
                "method": method,
                "endpoint": endpoint,
                "expected_status": expected_status,
                "actual_status": "ERROR",
                "success": False,
                "error": str(e)
            })
            return False, {}

    def test_root_endpoint(self):
        """Test root API endpoint"""
        success, response = self.run_test(
            "Root API Endpoint",
            "GET",
            "",
            200
        )
        return success

    def test_create_lead(self):
        """Test lead creation"""
        test_lead = {
            "name": f"Test User {datetime.now().strftime('%H%M%S')}",
            "phone": "+91 9876543210",
            "project_type": "Custom Sculpture",
            "city": "Mumbai",
            "budget_range": "5 - 15 Lakhs",
            "message": "Test lead for API testing"
        }
        
        success, response = self.run_test(
            "Create Lead",
            "POST",
            "leads",
            200,
            data=test_lead
        )
        return response.get('id') if success else None

    def test_get_leads(self):
        """Test getting all leads"""
        success, response = self.run_test(
            "Get All Leads",
            "GET",
            "leads",
            200
        )
        return success, response

def main():
    print("🚀 Starting Artonauts Street API Tests")
    print("=" * 50)
    
    # Setup
    tester = ArtonautsAPITester()

    # Test root endpoint
    print("\n📋 Testing Root Endpoint...")
    tester.test_root_endpoint()

    # Test lead creation
    print("\n📋 Testing Lead Creation...")
    lead_id = tester.test_create_lead()
    
    # Test getting leads
    print("\n📋 Testing Get Leads...")
    success, leads_data = tester.test_get_leads()
    if success and isinstance(leads_data, list):
        print(f"Found {len(leads_data)} leads in database")

    # Print final results
    print("\n" + "=" * 50)
    print(f"📊 Final Results: {tester.tests_passed}/{tester.tests_run} tests passed")
    
    if tester.tests_passed == tester.tests_run:
        print("🎉 All tests passed!")
        return 0
    else:
        print("❌ Some tests failed")
        print("\nFailed tests:")
        for result in tester.test_results:
            if not result['success']:
                error_msg = result.get('error', f'Status {result["actual_status"]}')
                print(f"- {result['name']}: {error_msg}")
        return 1

if __name__ == "__main__":
    sys.exit(main())