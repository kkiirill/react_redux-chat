import firebase from "firebase";
import "firebase/firebase-auth";
import "firebase/firebase-firestore";
import { firebaseConfig } from "../firebase";

const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const googlePopup = async () => {
  const response = await app.auth().signInWithPopup(provider);

  if (response) {
    await db.collection("users").doc(response.user?.uid).set({
      name: response.user?.displayName,
      image: response.user?.photoURL,
      email: response.user?.email,
    });
  }
  return response;
};

export const getAllContacts = async () => {
  return await db.collection("users").get();
};

export const addNewChat = async (user: any, secondUser: any) => {
  if (user.id && secondUser.id) {
    const newChat = await db.collection("chats").add({
      messages: [],
      users: [user.id, secondUser.id],
    });

    db.collection("users")
      .doc(user.id)
      .update({
        chats: firebase.firestore.FieldValue.arrayUnion({
          chatId: newChat.id,
          title: secondUser.name,
          image: secondUser.image,
          with: secondUser.id,
        }),
      });

    db.collection("users")
      .doc(secondUser.id)
      .update({
        chats: firebase.firestore.FieldValue.arrayUnion({
          chatId: newChat.id,
          title: user.name,
          image: user.image,
          with: user.id,
        }),
      });
  }
};

export const sendMessage = async (
  data: any,
  userId: string,
  type: any,
  text: any,
  users: any
) => {
  const dateNow = new Date();
  db.collection("chats")
    .doc(data?.chatId)
    .update({
      messages: firebase.firestore.FieldValue.arrayUnion({
        type,
        author: userId,
        text,
        date: dateNow,
      }),
    });
  if (users) {
    console.log(users)
    for (const char in users) {
      let u = await db.collection("users").doc(users[char]).get();
      const userData = u.data();

      if (userData?.chats) {
        const chats = [...userData.chats];

        for (let j in chats) {
          if (chats[j].chatId === data.chatId) {
            chats[j].lastMessage = text;
            chats[j].lastMessageDate = dateNow;
          }
        }
        await db.collection("users").doc(users[char]).update({
          chats: {},
        });
      }
    }
  }
};
