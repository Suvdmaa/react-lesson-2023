export default function Register(){
    return (
        <div>
            <h1>It is Register Page</h1>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email"/>
                <br></br>
                <label htmlFor="fname">Firstname:</label>
                <input type="text" name="text"/>
                <br></br>
                <label for="lname">Lastname:</label>
                <input type="password" name="password"/>
                <br></br>
                <label for="password">Password:</label>
                <input type="password" name="password"/>
                <br></br>
                <label for="conpassword">Confirm Password:</label>
                <input type="password" name="password"/>
                <br></br>
                <button>
                    Register
                </button>
            </form>
        </div>
    )
}