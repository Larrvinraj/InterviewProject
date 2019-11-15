//Import Components
import Color from '../../components/common/Color'

export const styles = {
    container: {
        flex: 1,
        backgroundColor: Color.beige
    },
    topContainer: {
        paddingHorizontal: 20,
        marginTop: 20
    },
    topInnerContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bottomContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 20
    },
    bottomInnerContainer: {
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 15,
        height: '100%',
        width: '100%'
    },
    textInputStyle: {
        paddingHorizontal: 10,
        backgroundColor: Color.white,
        borderRadius: 25,
        width: '70%',
        fontSize: 20,
        marginRight: 10
    },
    searchButton: {
        backgroundColor: Color.orange,
        padding: 10,
        borderRadius: 25
    },
    searchButtonText: {
        color: Color.white,
        fontSize: 20,
    },
    flatlistSection: {
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#D3D3D3'
    }
}