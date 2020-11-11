// Import stylesheets
import "./style.css";

// Import javascript files
import "./js/add-element.js";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
var firebaseConfig = {
  apiKey: "AIzaSyARP-lL8vkohnM7GJzNlKrg_KdzTold7AM",
  authDomain: "grocerylist-b4a3e.firebaseapp.com",
  databaseURL: "https://grocerylist-b4a3e.firebaseio.com",
  projectId: "grocerylist-b4a3e",
  storageBucket: "grocerylist-b4a3e.appspot.com",
  messagingSenderId: "382821734231",
  appId: "1:382821734231:web:b08579dca0031c465f9012"
};

firebase.initializeApp(firebaseConfig);

//save the list to databse
$("#save").click(function() {
  //document.querySelectorAll('li') ==> nodelist
  //for the loop to go through each nodelist
  // and then get the text content

  $("li").each(function() {
    var value = $(this).text();
    console.log(value);

    firebase
      .firestore()
      .collection("mylist")
      .add({
        item: value
      });
  });
});

// Save the list to database
