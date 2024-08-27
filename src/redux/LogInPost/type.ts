export interface postDataUser {
  email: string;
  password: string;
  clientURI: string;
}

export interface UserData {
  isAuthSuccessful: boolean;
  errorMessage: string;
  token: null;
  is2StepVerificationRequired: boolean;
  provider: null;
}

export interface AppState {
  userData: UserData;
  token: string | null;
  isOpenAuthModal: boolean;
  isLoginAuthModalMode: boolean;
  adsCategories: string[];
  modalPhoto: string | null;
}
// export enum Status {
//   IDLE = 'idle',
//   LOADING = 'loading',
//   SUCCESS = 'completed',
//   ERROR = 'error',
// }
