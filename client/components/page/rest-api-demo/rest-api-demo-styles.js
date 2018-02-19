export default {
    container: {
        width: '100%'
    },
    button: {
        userSelect: 'none',
        width: '100%',
        fontSize: '1.2em',
        padding: '30px',
        backgroundColor: '#5599ddbb',
        color: '#eee',
        border: '1px solid #eee',
        ':hover': {
            backgroundColor: '#5599dd99',
        },
        ':active': {
            backgroundColor: '#5599dddd',
        }
    },
    displayText: {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#5599dddd',
        color: '#eee',
    },
    noData: {
        display: 'none'
    }
}