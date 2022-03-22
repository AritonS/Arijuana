import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Logout from "./logout";

const mDTP = dispatch => ({
    logout: formUser => dispatch(logout())
})

export default connect(null, mDTP)(Logout)