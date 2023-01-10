import { FieldValue } from "firebase/firestore";

export type MessageData = {
  text: string;
  id: string;
  createdAt: FieldValue;
  uid: string;
  displayName: string;
  photoURL: string;
};

export type UserData = {
  uid: string;
  displayName: string;
  photoURL: string;
};
