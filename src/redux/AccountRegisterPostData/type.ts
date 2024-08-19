// Define the structure for the form data being submitted
export interface AccountRegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  clientURI: string;
}

// Extend AccountRegistrationData to include status and optional properties for userData and token
export interface AccountRegistrationState extends AccountRegistrationData {
  status: Status;
}

// Define the parameters expected by the createAsyncThunk function
export interface PostAccountUserDataParams {
  url: string;
  formData: AccountRegistrationData;
}

// Enhance the response status interface to be more flexible
export interface AppStateResStatus<T = unknown> {
  status: number; // More general to handle different status codes
  data?: T; // Optional property for successful data
  error?: string; // Optional property for error messages
}

// Define the possible states of an asynchronous request
export enum Status {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success', // Changed from 'completed' to 'success' for clarity
  ERROR = 'error',
}
