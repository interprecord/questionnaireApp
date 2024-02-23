import Home from "./component/Home";
import NextPageForm from "./routes/NextPage";
import { Routes, Route } from "react-router-dom";
import NoMatch from "./routes/NoMatch";
import { ReactNode, useEffect } from "react";
import {
  AnswersProvider,
  EntryFormProvider,
  PurposeProvider,
  ShopInfoProvider,
  UserInfoProvider,
} from "./context/Context";
import classes from "/Users/kokoro/dev/portfolio/questionnaire-app/src/CssModules.module.scss";



type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>{children}</div>
  );
};

function App() {
  // useEffect(() => {
  //   // AppComponentがマウントされた時にFirebase関数を呼び出す
  //   Firebase();
  // }, [userInfo]);

  return (
    <div >
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
