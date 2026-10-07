/// <reference types="vite/client" />

/**
 * API Configuration & Helper Functions for PHP Backend integration
 */

const BASE_URL = (import.meta as unknown as { env: Record<string, string> }).env?.VITE_API_URL || '/api';

export const API_ENDPOINTS = {
  appointment: `${BASE_URL}/appointment.php`,
  contact: `${BASE_URL}/contact.php`,
};

export interface AppointmentPayload {
  parent_name: string;
  child_name: string;
  email?: string;
  phone_no: string;
  date: string;
  time: string;
  message?: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  phone_no?: string;
  message: string;
}

/**
 * Submit Appointment Request to PHP API
 */
export const submitAppointmentForm = async (payload: AppointmentPayload) => {
  try {
    const response = await fetch(API_ENDPOINTS.appointment, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorResult = await response.json().catch(() => null);
      return {
        success: false,
        error: errorResult?.error || `Server responded with status ${response.status}`,
      };
    }

    return await response.json();
  } catch (err: any) {
    console.warn('Relative fetch failed, trying direct PHP localhost endpoint...', err);
    
    const fallbackUrls = [
      'http://127.0.0.1:8000/api/appointment.php',
      'http://localhost/childrensclinic/api/appointment.php',
      'http://localhost/api/appointment.php'
    ];

    for (const url of fallbackUrls) {
      try {
        const fallbackRes = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
        if (fallbackRes.ok) {
          return await fallbackRes.json();
        }
      } catch (e) {
        // try next fallback URL
      }
    }

    return {
      success: false,
      error: 'Network error: Unable to connect to PHP backend server. Ensure PHP backend server is running.',
    };
  }
};

/**
 * Submit Contact Inquiry to PHP API
 */
export const submitContactForm = async (payload: ContactPayload) => {
  try {
    const response = await fetch(API_ENDPOINTS.contact, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorResult = await response.json().catch(() => null);
      return {
        success: false,
        error: errorResult?.error || `Server responded with status ${response.status}`,
      };
    }

    return await response.json();
  } catch (err: any) {
    console.warn('Relative fetch failed, trying direct PHP localhost endpoint...', err);

    const fallbackUrls = [
      'http://127.0.0.1:8000/api/contact.php',
      'http://localhost/childrensclinic/api/contact.php',
      'http://localhost/api/contact.php'
    ];

    for (const url of fallbackUrls) {
      try {
        const fallbackRes = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
        if (fallbackRes.ok) {
          return await fallbackRes.json();
        }
      } catch (e) {
        // try next fallback URL
      }
    }

    return {
      success: false,
      error: 'Network error: Unable to connect to PHP backend server. Ensure PHP backend server is running.',
    };
  }
};
