import Home from "./component/Home";
import NextPageForm from "./routes/NextPage";
import { Routes, Route } from "react-router-dom";
import NoMatch from "./routes/NoMatch";
import { ReactNode, useEffect, useState } from "react";
import {
  AnswersProvider,
  EntryFormProvider,
  PurposeProvider,
  ShopInfoProvider,
  UserInfoProvider,
} from "./context/Context";
import SignUp from "./component/SignUp";
import Mypage from "./component/Mypage";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>{children}</div>
  );
};
export const auth = getAuth();
function App() {
   //ログイン情報
   const [nowUser, setNowUser] = useState<User | null>();
 
   useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setNowUser(currentUser);

      // console.log(user);


      
    });
  });
  return (
    <div>
      <ShopInfoProvider>
        <PurposeProvider>
          <EntryFormProvider>
            <AnswersProvider>
              <UserInfoProvider>
                <Routes>
                  <Route
                    index
                    element={
                      <Layout>
                        <SignUp nowUser={nowUser} setNowUser={setNowUser} />
                      </Layout>
                    }
                  />
                  <Route
                    path="/myPage"
                    element={
                      <Layout>
                        <Mypage nowUser={nowUser} setNowUser={setNowUser}  />
                      </Layout>
                    }
                  />
                  <Route
                    path="/home"
                    element={
                      <Layout>
                        <Home />
                      </Layout>
                    }
                  />
                  <Route
                    path="/employespage"
                    element={
                      <Layout>
                        <NextPageForm />
                      </Layout>
                    }
                  />
                  <Route
                    path="*"
                    element={
                      <Layout>
                        <NoMatch />
                      </Layout>
                    }
                  />
                </Routes>
              </UserInfoProvider>
            </AnswersProvider>
          </EntryFormProvider>
        </PurposeProvider>
      </ShopInfoProvider>
    </div>
  );
}

export default App;
