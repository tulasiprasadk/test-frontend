import React from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE } from "../config/api";
import GoogleSignInButton from "../components/GoogleSignInButton";

// Google OAuth handler
function handleGoogleSignIn() {
  // IMPORTANT: API_BASE already includes /api
  window.location.href = `${API_BASE}/suppliers/auth/google`;
}

export default function SupplierLogin() {
  const navigate = useNavigate();

  return (
    <main style={{ padding: 24, maxWidth: 500, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 24 }}>Supplier Sign In</h1>
      <div style={{ marginBottom: 12, padding: 10, background: "#fff9c4", borderRadius: 4 }}>
        Supplier login is currently available via Google only.
      </div>

      <div style={{ maxWidth: 420 }}>
        <GoogleSignInButton
          onClick={handleGoogleSignIn}
          label="Continue with Google"
        />
      </div>

      <div style={{ marginTop: 24, color: "#666" }}>
        <span>
          Don't have an account?{" "}
          <a
            href="/supplier/register"
            style={{
              color: "#1976d2",
              textDecoration: "underline"
            }}
          >
            Register Here
          </a>
        </span>
        <br />
        <span>
          <button
            onClick={() => navigate("/supplier/register")}
            style={{ color: "#1976d2", background: "transparent", border: "none", textDecoration: "underline", cursor: "pointer", padding: 0 }}
          >
            Register Here
          </button>
        </span>
      </div>
    </main>
  );
}



