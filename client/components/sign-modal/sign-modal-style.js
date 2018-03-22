export default {
    container: {
        backroundColor: 'Red',
        width: '500px'
    },
    button: {
        padding: '8px',
        margin: '5px',
        borderRadius: '4px'
    },
    /* The Modal (background) */
    body: {
        display: 'block', /* Hidden by default */
        position: 'fixed', /* Stay in place */
        zIndex: 1, /* Sit on top */
        left: 0,
        top: 0,
        width: '100%', /* Full width */
        height: '100%', /* Full height */
        overflow: 'auto', /* Enable scroll if needed */
        backgroundColor: 'rgb(0,0,0)', /* Fallback color */
        backgroundColor: 'rgba(0,0,0,0.4)' /* Black w/ opacity */
    },
    /* Modal Content/Box */
    content: {
        backgroundColor: '#fefefe',
        margin: '15% auto', /* 15% from the top and centered */
        padding: '20px',
        border: '1px solid #888',
        width: '80%' /* Could be more or less, depending on screen size */
    },
    header: {
        fontSize: '44px',
        marginBottom: '8px'
    },
    text: {
        fontSize: '18px'
    },
    /* The Close Button */
    close: {
        color: '#aaa',
        float: 'right',
        fontSize: '28px',
        fontWeight: 'bold',
        cursor: 'pointer',
        ':focus': {
            color: 'black',
            textDecoration: 'none',
        },
        ':hover': {
            color: 'black',
            textDecoration: 'none',
        }
    }, 
    info: {
        backgroundColor: '#BDE5F8',
        color: '#00529B',
    },
    success: {
        backgroundColor: '#DFF2BF',
        color: '#4F8A10',
    },
    warning: {
        backgroundColor: '#FEEFB3',
        color: '#9F6000',
    },
    error: {
        backgroundColor: '#FFBABA',
        color: '#D8000C',
    },
    icon: {    
        fontSize: '1.3em',
        padding: '0 7px'
    }  
}