import React, { useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../hooks/firebaseConfig";

const PhoneSMS = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState(null);

  // Initialize Recaptcha
  const setUpRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "normal", // or 'normal' for a visible captcha
          callback: (response) => {
            console.log("Recaptcha verified!");
          },
          "expired-callback": () => {
            console.log("Recaptcha expired. Please retry.");
          },
        },
        auth
      );
    }
  };

  // Disable app verification for testing (only for development)
  if (process.env.NODE_ENV === "development") {
    auth.settings.appVerificationDisabledForTesting = true;
  }

  // Send OTP
  const sendOtp = async () => {
    try {
      setUpRecaptcha();
      const appVerifier = window.recaptchaVerifier;
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        appVerifier
      );
      setVerificationId(confirmationResult.verificationId);
      alert("OTP sent to your phone!");
    } catch (error) {
      console.error("Error sending OTP:", error.message);
      alert(error.message);
    }
  };

  // Verify OTP
  const verifyOtp = async () => {
    if (!verificationId) return alert("No OTP sent yet!");

    try {
      const credential = auth.PhoneAuthProvider.credential(verificationId, otp);
      const user = await auth.signInWithCredential(credential);
      alert(`Phone authentication successful! Welcome, ${user.phoneNumber}`);
    } catch (error) {
      console.error("Error verifying OTP:", error.message);
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Phone Authentication</h2>
      <div id="recaptcha-container"></div>

      {!verificationId ? (
        <div>
          <input
            type="text"
            placeholder="Enter phone number (+1234567890)"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button onClick={sendOtp}>Send OTP</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </div>
      )}
    </div>
  );
};

export default PhoneSMS;
