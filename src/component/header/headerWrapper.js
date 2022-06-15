import HeaderContent from "./headerContent";
import { connect } from "react-redux";
import { User } from "../../redux/constants";
import { useMutation } from "react-apollo";
import { Mutation } from "../../apollo/mutations";
import { message } from "antd";
import { errorHandler } from "../../utils/errorHandler";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../redux/actions";

const HeaderWrapper = (props) => {
  const { user, isLoggedIn } = props;
  const dispatch = useDispatch();

  const [logoutMutation, { loading }] = useMutation(Mutation.LOGOUT_USER);

  const handleLogout = async () => {
    try {
      await logoutMutation({
        variables: {
          deviceId: user.deviceId,
        },
      });
      dispatch(logoutAction());
    } catch (err) {
      message.error(errorHandler(err));
      dispatch(logoutAction());
    }
  };

  return (
    <HeaderContent
      user={user}
      isLoggedIn={isLoggedIn}
      handleLogout={handleLogout}
      logoutLoading={loading}
    />
  );
};

const mapState = (state) => ({
  isLoggedIn: state.user.isLoggedIn,
  user: state.user.data,
});

export default connect(mapState)(HeaderWrapper);
