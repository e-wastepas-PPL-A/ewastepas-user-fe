import api from './api';

// Fungsi untuk registrasi pengguna
export const Register = async (name, email, password, confirmPassword) => {
  try {
    const response = await api.post('/auth/register', {
      name,
      email,
      password,
      confirmPassword, // Tetap menyertakan confirmPassword
    });
    return response.data; // Mengembalikan data dari API
  } catch (error) {
    console.error('Error during registration:', error);
    throw error; // Melempar error untuk ditangani di tempat lain
  }
};

// Fungsi untuk verifikasi OTP
export const verifyOtp = async (email, otp_code) => {
  try {
    const response = await api.post('/auth/verify-otp', {
      email,
      otp_code,
    });
    return response.data; // Mengembalikan data dari API
  } catch (error) {
    console.error('Error during OTP verification:', error);
    throw error; // Melempar error untuk ditangani di tempat lain
  }
};

// Fungsi untuk login pengguna
export const Login = async (email, password, rememberMe) => {
  try {
    const response = await api.post('/auth/login', {
      email,
      password,
      rememberMe,
    });
    return response.data; // Mengembalikan data dari API
  } catch (error) {
    console.error('Error during login:', error);
    throw error; // Melempar error untuk ditangani di tempat lain
  }
};

// Fungsi untuk mengirim permintaan lupa password
export const forgotPassword = async (email) => {
  try {
    const response = await api.post('/auth/forgot-password', {
      email,
    });
    return response.data; // Mengembalikan data dari API
  } catch (error) {
    console.error('Error during forgot password request:', error);
    throw error; // Melempar error untuk ditangani di tempat lain
  }
};

// Fungsi untuk mereset password
export const resetPassword = async (email, newPassword) => {
  try {
    const response = await api.post(`/auth/reset-password/${email}`, {
      newPassword,
    });
    return response.data; // Mengembalikan data dari API
  } catch (error) {
    console.error('Error during password reset:', error);
    throw error; // Melempar error untuk ditangani di tempat lain
  }
};