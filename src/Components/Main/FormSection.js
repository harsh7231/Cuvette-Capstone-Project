import React, { useState } from 'react';
import './FormSection.css' 
import { useNavigate } from 'react-router-dom';// Create this CSS file to style the form section

const FormSection = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [saveDetails, setSaveDetails] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    username: '',
    email: '',
    mobile: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!username) {
      newErrors.username = 'Username is required';
      isValid = false;
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    if (!mobile || isNaN(mobile) || mobile.length !== 10) {
      newErrors.mobile = 'Invalid mobile number';
      isValid = false;
    }
    if(!saveDetails){
      newErrors.checked = 'Please check the checkbox';
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSave = () => {
    if (validateForm()) {
      const userDetails = {
        name,
        username,
        email,
        mobile,
      };

      localStorage.setItem('userDetails', JSON.stringify(userDetails));
      navigate('/categories')
    }
  };

  return (
    <div className="body">
    <p className="super">Super app</p>
    <p>Create your new account</p>
      <form>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
          {errors.name && <span  className="error">{errors.name}</span>}
          <input type="text" placeholder="UserName" value={username} onChange={(e) => setUsername(e.target.value)} />
          {errors.username && <span className="error">{errors.username}</span>}
          <input  type="email" placeholder="Email"  value={email}  onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <span className="error">{errors.email}</span>}
          <input type="tel" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
          {errors.mobile && <span className="error">{errors.mobile}</span>}
          <label><input type="checkbox" checked={saveDetails} onChange={() => setSaveDetails(!saveDetails)}/>Share my registration data with Superapp</label>
          {errors.checked && <span className="Cerror">{errors.checked}</span>}<br></br>
          <button type="button" onClick={handleSave}>SIGN UP</button>
        </form>
        <footer className="footer">
          <p>By clicking on Sign up. you agree to Superapp<span style={{color:"green"}}> Terms and Conditions of Use</span></p>
          <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp<span style={{color:"green"}}> Privacy Policy</span></p>
        </footer>
    </div>
  );
}

export default FormSection;
