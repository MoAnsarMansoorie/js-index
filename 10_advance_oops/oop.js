const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);


// new
// step-1: whenever you use new keyword, then an empty object eill be created. jisko instance bola jata hai
// step-2: new keyword ke karan constructor function call hota hai jo sare argument ko pack karts hai aur humko de deta hai
// step:3: jo bhi argument lihhe hote hai wo this keyword se bane variable me store ho jate hai
// step-4: sare argument mil jate hai function ke andar

// read - instanceOf