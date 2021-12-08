export default function Login(props) {
    return (
        <>
        <form onSubmit={props.loginUser}>
            <label htmlFor="email">email:</label>
            <input type="text" id="email" name="email"></input>
            <label htmlFor="name">name:</label>
            <input type="text" id="username" name="username"></input>
            <label htmlFor="password">password:</label>
            <input type="password" id="password" name="password"></input>
            <input type="submit" value="login"></input>
        </form>
        </>
    )
}
