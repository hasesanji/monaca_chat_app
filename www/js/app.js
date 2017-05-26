// This is a JavaScript file

//ログイン済みかを確認する
function checkCurrentUser(){
    console.log("checkCurrentUser");
    
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
            navi.pushPage("home.html");
      } else {
        // No user is signed in.
      }
    });

    var user = firebase.auth().currentUser;
    
    if (user) {
      // User is signed in.
    } else {
      // No user is signed in.
    }


};

//会員登録・ログインを行う
function userLogin(isSignedUp){
    //入力フォームからユーザー名とパスワードを取得
    console.log("userLogin");

    var mailaddress = document.getElementById("mailaddress").value;
    var password = document.getElementById("password").value;
    console.log("mailaddress:" + mailaddress);
    console.log("password:" + password);

    if (isSignedUp === true){
        //新規登録処理
        console.log("addNewUser");
 
        firebase.auth().createUserWithEmailAndPassword(mailaddress, password).then(function(){
            console.log("createUserWithEmailAndPassword");
            navi.pushPage("home.html");
            
        }, function(error) {
            //エラーコードの表示
            document.getElementById("login_error_msg").innerHTML = "errorCode:" + error.code + ", errorMessage:" + error.message;

        });

    } else {
        //ログイン処理
         console.log("login");

        firebase.auth().signInWithEmailAndPassword(mailaddress, password).then(function(){
            console.log("signInWithEmailAndPassword");
            navi.pushPage("home.html");
        
        
        }, function(error) {
            //エラーコードの表示
            document.getElementById("login_error_msg").innerHTML = "errorCode:" + error.code + ", errorMessage:" + error.message;

        });

    }

};

//ログアウトを実行し、ホーム画面に遷移させる
function logout(){
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
       navi.resetToPage("login.html");

    }, function(error) {
      // An error happened.
      var errorCode = error.code;
      var errorMessage = error.message;
      
       navi.resetToPage("login.html");

    });
}


function sendMessage(){
    
    var regMessage = document.getElementById("jsi-msg").value;

    
}
