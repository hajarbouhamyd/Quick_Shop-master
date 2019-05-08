// const mapStatetoProps = function mapStatetoProps(profile) {
//
//     return {profile};
// };

const mapStatetoProps = state => {
    return {
        profile: state.profile
    }
 }
export default mapStatetoProps;