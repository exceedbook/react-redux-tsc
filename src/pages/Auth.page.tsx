import React from 'react';
import SignIn from '@/modules/auth';

const SignInPage = () => (
  <React.Suspense fallback={<p>Prelaoder</p>}>
    <SignIn />
  </React.Suspense>
);

export default SignInPage;