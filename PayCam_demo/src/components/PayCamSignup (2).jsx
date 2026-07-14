import React from "react";
import "./PayCamSignup.css";
import paycamImg from "../assets/paycamimg.jpg";

export default function PayCamSignup() {
  return (
    <div className="payCam_page">
    <div className="payamCard">
    
    <div className="leftPanel">
    
    <div className="circle decorativeCircle_top" />
    <div className="circle decorativeCircle_mid" />
    <div className="circle decorativeCircle_bottom" />
    
    
    <div className="left-content">
    <p className="heading">Welcome to payCam</p>
    
    <h1 className="getStarted">Get started</h1>
    
    <div className="paycam-feature">
    <p className="payCamFeature-title">payCam is the best</p>
    <p className="payCamFeature-sub">payCam is the best</p>
    </div>
    
    <div className="paycam-feature">
    <p className="payCamFeature-title">payCam is the best</p>
    <p className="payCamFeature-sub">payCam is the best</p>
    </div>
    </div>
    
    
    
    
    
    <div className="img_container">
   
     <img src={paycamImg} alt="" />
    
    </div>
   
   
    </div>
    
    
    <div className="rightPanel">    <div className="rightInnerPanel">      <div className="signin_row">        <a href="#" className="signin-link">          Sign in        </a>
    </div>
    <h2 className="title">Create your free account</h2>
    <button type="button" className="google-btn">
    <GoogleIcon />
    Sign up with Google
    </button>
    <div className="Pagedivider">
    </div>
    <Field label="First name" />
    <Field label="Last name" />
    <Field label="Email" placeholder="email here" light />
    <Field label="Confirm password" type="password" />
    
    <button type="submit" className="paycam-signup-btn">
    Signup
    </button>
    </div>
    </div>
    </div>
    </div>
  );
}

function Field({ label, type = "text", placeholder = "", light = false }) {
  return (
    <div className="paycam-field">
    <label className="field-label">{label}</label>
    <input
    type={type}
    placeholder={placeholder}
    className={`paycam-field-input${light ? " paycam-field-input--light" : ""}`}
    />
    </div>
  );
}



function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48">
    <path
    fill="#FFC107"
    d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.5 29.5 4.5 24 4.5 12.9 4.5 4 13.4 4 24.5s8.9 20 20 20c11.5 0 19.6-8.1 19.6-19.5 0-1.3-.1-2.5-.3-3.5z"
    />
    <path
    fill="#FF3D00"
    d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.5 29.5 4.5 24 4.5c-7.6 0-14.2 4.3-17.7 10.2z"
    />
    <path
    fill="#4CAF50"
    d="M24 44.5c5.4 0 10.3-1.8 14.1-5l-6.5-5.4c-2 1.4-4.6 2.3-7.6 2.3-5.3 0-9.7-3.4-11.3-8.1l-6.6 5.1C9.7 40 16.3 44.5 24 44.5z"
    />
    <path
    fill="#1976D2"
    d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.2-4.1 5.6l6.5 5.4C39.8 37.4 44 31.4 44 24.5c0-1.3-.1-2.5-.4-4z"
    />
    </svg>
  );
}
