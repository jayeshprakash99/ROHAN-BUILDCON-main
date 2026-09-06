import os
import re
import uuid
import requests

BASE_URL = os.environ.get("NEXT_PUBLIC_BASE_URL", "https://buildcon-luxury-site.preview.emergentagent.com").rstrip("/")
API_URL = f"{BASE_URL}/api"


def main():
    results = []
    session = requests.Session()
    try:
        r = session.get(API_URL, timeout=20)
        assert r.status_code == 200 and r.json() == {"ok": True, "service": "rohan-buildcon-api"}
        results.append("PASS health GET /api")

        payload = {
            "name": "Aarav Mehta", "phone": "+91 98765 43210",
            "email": "aarav.mehta@example.com", "projectType": "Luxury Villa",
            "location": "Pune, Maharashtra", "message": "Please share an estimate for a 4-bedroom villa."
        }
        r = session.post(API_URL, json=payload, timeout=20)
        data = r.json()
        assert r.status_code == 201 and data == {"ok": True, "message": "Your enquiry has been received."}
        results.append("PASS valid POST /api returns 201 success")

        r = session.post(API_URL, json={"name": payload["name"], "email": payload["email"], "projectType": payload["projectType"]}, timeout=20)
        assert r.status_code == 400
        results.append("PASS missing required field returns 400")

        r = session.post(API_URL, data='{"name":', headers={"Content-Type": "application/json"}, timeout=20)
        assert r.status_code == 500
        results.append("PASS malformed JSON returns controlled 500")
    except Exception as exc:
        results.append(f"FAIL {type(exc).__name__}: {exc}")
    for result in results:
        print(result)
    return 0 if all(x.startswith("PASS") for x in results) else 1


if __name__ == "__main__":
    raise SystemExit(main())
