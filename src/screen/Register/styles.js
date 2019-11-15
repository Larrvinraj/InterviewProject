//Import Components
import Color from '../../components/common/Color'

export const styles = {
    container: {
        flex: 1,
        backgroundColor: Color.beige
    },
    topContainer: {
        alignItems: 'center',
        flex: 1,
        marginTop: 20
    },
    bottomContainer: {
        flex: 2,
        alignItems: 'center',
        paddingHorizontal: 20
    },
    registrationText: {
        fontFamily: 'Helvetica Neue',
        fontSize: 40,
        fontWeight: 'bold'
    },
    textInputStyle: {
        backgroundColor: Color.white,
        borderRadius: 15,
        marginBottom: 20,
        width: '80%',
        fontSize: 20,
        paddingHorizontal: 20
    },
    registerButtonStyle: {
        backgroundColor: Color.orange,
        borderRadius: 15,
        padding: 10,
        width: '30%',
        alignItems: 'center'
    },
    registerButtonTextStyle: {
        fontSize: 20,
        color: Color.white
    }
}