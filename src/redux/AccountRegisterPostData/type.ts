// Define the form data interface
export interface RegistrationFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  clientURI: string;
}

// Define the state for registration
export interface RegistrationState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

// Initial state
