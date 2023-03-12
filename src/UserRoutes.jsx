import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute/PublicRoute';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Welcome = lazy(() => import('components/Welcome/Welcome'));
const SignIn = lazy(() => import('components/SignIn/SignIn'));
const SignUp = lazy(() => import('components/SignUp/SignUp'));
const PhoneBook = lazy(() => import('components/Phonebook/Phonebook'));

export const UserRoutes = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Welcome />} />
        {/* <Route index element={<Welcome />} /> */}
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<PhoneBook />} />
        </Route>
        {/* </Route> */}
        {/* <Route path="*" element={<Welcome />} /> */}
      </Routes>
    </Suspense>
  );
};
