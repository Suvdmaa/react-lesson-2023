export default function Login(){
    return (
        <div>
            <h1>It is Login Page</h1>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email"/>
                <br></br>
                <label for="password">Password:</label>
                <input type="password" name="password"/>
                <br></br>
                <button>
                    Sign in 
                </button>
            </form>
        </div>
    )
}