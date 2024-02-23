
import { createContext, useState, useContext } from "react";


//UserInfoのtype
type UserInfo = {
  userName: string;
  tellNumber: string;
};

type UserInfoStateType = {
  userInfo: UserInfo;
  setUserInfo: React.Dispatch<React.SetStateAction<UserInfo>>;
};

// const UserInfoContext = createContext<UserInfoStateType | null>(null);
const UserInfoContext = createContext<UserInfoStateType>({
  userInfo: {
    userName: "",
    tellNumber: "",
  },
  setUserInfo: () => {},
});

export function useUserInfoContext() {
  return useContext(UserInfoContext);
}

type Props = {
  children: React.ReactNode;
};
export function UserInfoProvider({ children }: Props) {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    userName: "",
    tellNumber: "",
  });

  const value = {
    userInfo,
    setUserInfo,
  };

  return (
    <UserInfoContext.Provider value={value}>
      {children}
    </UserInfoContext.Provider>
  );
}

//QuestionForm


type Answer = {
  [key: string]: string;
};

type Answers = Answer[];

type AnswerStateType = {
  answers:Answers,
  setAnswers:React.Dispatch<React.SetStateAction<Answers>>
};

const AnswersContext 
= createContext<AnswerStateType>(({
  answers:[],
  setAnswers: () => {},
}))

export function useAnswerContext() {
  return useContext(AnswersContext);
}

export function AnswersProvider({ children }: Props) {
  const [answers, setAnswers] = useState<Answers>([]);

  const value = {
    answers,
    setAnswers,
  };

  return (
    <AnswersContext.Provider value={value}>{children}</AnswersContext.Provider>
  );
}



//EntryFormContext
type EntryStateType = {
  review:string,
  setReview:React.Dispatch<React.SetStateAction<string>>
};

const EntryFormContext 
= createContext<EntryStateType>(({
  review:"",
  setReview: () => {},
}))

export function useEntryContext() {
  return useContext(EntryFormContext);
}



export function EntryFormProvider({ children }: Props) {
  const [review, setReview] = useState<string>("");

  const value = {
    review,
    setReview,
  };

  return (
    <EntryFormContext.Provider value={value}>{children}</EntryFormContext.Provider>
  );
}


//Purpose
type PurposeStateType = {
  purpose:string,
  setPurpose:React.Dispatch<React.SetStateAction<string>>
};

const PurposeContext 
= createContext<PurposeStateType>(({
  purpose:"",
  setPurpose: () => {},
}))

export function usePurposeContext() {
  return useContext(PurposeContext);
}



export function PurposeProvider({ children }: Props) {
  const [purpose, setPurpose] = useState<string>("");

  const value = {
    purpose,
    setPurpose,
  };

  return (
    <PurposeContext.Provider value={value}>{children}</PurposeContext.Provider>
  );
}


//NextPage
type infoType = {
  shopCode: string;
  shopName: string;
  accountManeger: string;
};

type infoStateType = {
  shopInfo:infoType,
  setShopInfo:React.Dispatch<React.SetStateAction<infoType>>
};

const ShopInfoContext 
= createContext<infoStateType>({
  shopInfo:{
    shopCode: "",
    shopName: "",
    accountManeger: "",
  },
  setShopInfo: () => {}})

export function useShopInfoContext() {
  return useContext(ShopInfoContext);
}



export function ShopInfoProvider({ children }: Props) {
  const [shopInfo, setShopInfo] = useState<infoType>({
    shopCode: "",
    shopName: "",
    accountManeger: "",
  });

  const value = {
    shopInfo,
    setShopInfo,
  };

  return (
    <ShopInfoContext.Provider value={value}>{children}</ShopInfoContext.Provider>
  );
}

