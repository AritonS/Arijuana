class Login extends React.Component {
    constructor(props) {
        super(props)
        thiis.state = {
            username: '',
            password: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
        {<Redirect to={`/user/${currentUser.id}`}/>}
    }

    render() {
        return(
            <div className='session-form'>
                <h2>Log In</h2>
                <form>
                    <label>
                        <input 
                        type="text"
                        placeholder='Username'
                        onChange={this.handleInput('username')} 
                        />
                    </label>
                    <label>
                        <input 
                        type="password"
                        placeholder='Password'
                        onChange={this.handleInput('password')} 
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Log In</button>
                </form>
            </div>
        )
    }

}