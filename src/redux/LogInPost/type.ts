// Interface for the data sent to the API
export interface postDataUser {
  email: string;
  password: string;
  clientURI: string;
}

// Interface for the user data state
export interface UserDataState {
  userData: postDataUser | null;
  isAuthSuccessful: boolean;
  errorMessage: string;
  token: string | null;
  is2StepVerificationRequired: boolean;
  provider: string | null;
}
