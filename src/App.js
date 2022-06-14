import { Routes, Route } from "react-router-dom"

import 'assets/styles/output.css'
import Main from "views/Main";
import AmendPolicyDetails from "views/AmendPolicyDetails";
import LoadingContainer from 'components/LoadingContainer';


function App() {
  return (
    <LoadingContainer>
      <Routes>
        <Route path='/amend-policy-details' element={<AmendPolicyDetails />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </LoadingContainer>
  );
}

export default App;
