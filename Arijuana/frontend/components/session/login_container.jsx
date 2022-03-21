import { connect } from "react-redux"

const mDTP = dispatch => ({
    login: formUser => dispatch(login(formUser))
})

export default connect(null, mDTP)(Login)