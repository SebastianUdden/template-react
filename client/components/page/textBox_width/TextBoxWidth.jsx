import React from 'react';
import Radium from 'radium';
import styles from './textBox_width-style';
//import haha from './textBox_width.css';

import Sign from '../../sign/Sign.jsx';

class TextBox_width extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        var txtBox = document.getElementById("txt_box");
        var span = document.getElementById("hide_span");
        var txtBoxWidth = txtBox.getBoundingClientRect().width;

        function changeWidth(el, hideEl, maxWidth,
        fontSizeFromtxtBox,horizontalpaddingFromtxBox, borderSizeFromtxtBox) {

            //TODO måste lägga in setTimeout()!

            //ALT2.
            hideEl.textContent = el.value;
            hideEl.style.fontSize = fontSizeFromtxtBox + "em";
            hideEl.style.border = borderSizeFromtxtBox + "px";
            var spanWidth = hideEl.getBoundingClientRect().width;
            spanWidth += horizontalpaddingFromtxBox*2;
            //hideEl.style.padding = horizontalpaddingFromtxBox + "px"; //FUNKAR INTE MED PADDING..

            console.log("spanWidth:" + spanWidth);
            console.log("txtBoxWidth" + txtBoxWidth)

            if(spanWidth > txtBoxWidth && spanWidth < maxWidth)
            {
                el.style.width = spanWidth + "px";
            }
            else if (spanWidth < txtBoxWidth)
            {
                el.style.width = txtBoxWidth + "px";
            }

            //ALT1.            
            // console.log("txtBoxWidth: " + txtBoxWidth);
            // hideEl.textContent = el.value;
            // var spanWidth = hideEl.getBoundingClientRect().width;
            // spanWidth += 60;
            //     console.log("spanWidth: " + spanWidth);
            //     if (maxWidth < spanWidth) {
            //         el.style.width = maxWidth + "px";
            //     }
            //     else if(txtBoxWidth < spanWidth) {
            //         el.style.width = (spanWidth) + "px";
            //         if (maxWidth < (spanWidth)) {
            //             el.style.width = maxWidth + "px";
            //         }
            //     } else {
            //         console.log("else!");
            //         el.style.width = txtBoxWidth;
            //         console.log("txtBoxWidth: " + txtBoxWidth);
            //     }
        }

        //From DOM lever 2
        //You need to use keyup or else it will not "read" the letters correct.
        if (txtBox.addEventListener) {
            txtBox.addEventListener("keyup", function (e) { changeWidth(txtBox, span, 650, 1.2,30,1) }, false);
        } else {
            // For IE 5- 8
            txtBox.attachEvent("keyup", function (e) { changeWidth(txtBox, span, 650, 1.2,30,1) });
        }
    }

    render() {
        return (
            <div style={styles.container} id="outerDiv">
                <Sign type="info" text="This will soon be finished"/>
                <Sign type="success" text="It's looking really good!"/>
                <Sign type="warning" text="Under Construction"/>
                <Sign type="error" text="Too much commented code!"/>
                <span id="hide_span"></span>
                <input type="text" id="txt_box" style={styles.textBox} placeholder="Try me out!" />
                <input type="text" styles={styles.testInput} placeholder="Try me out!" />
            </div>
        );
    }
}

export default Radium(TextBox_width);