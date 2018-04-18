import React from 'react';
import Radium from 'radium';
import styles from './textBox_width-style';
import stylesLabel from './textBox_label-style.js';
//import haha from './textBox_width.css';

import Sign from '../../sign/Sign.jsx';
import SignModal from '../../sign-modal/SignModal.jsx';

class TextBox_Floating_input extends React.Component {
    state = {
        isFocused: false,
      };


      handleFocus = () => this.setState({ isFocused: true });
      handleBlur = () => this.setState({ isFocused: false });

    render() {
        const { label, ...props } = this.props;
        const { isFocused } = this.state;
        //Alt1
        const labelStyle = {
            position: 'absolute',
            left: 0,
            top: !isFocused ? 2 : -15,
            fontSize: !isFocused ? 20 : 14,
            color: !isFocused ? '#aaa' : '#5599ddbb',
            transition: !isFocused ? '40': '0',
          };
        const textBox = {
            height: '26px',
            fontsize: '20px',
            color: '#000',
            borderStyle: 'none none solid none',
            borderBottomWidth: '1',
            backgroundColor: '#ECF4FB',
            borderBottomColor: !isFocused ? '#555' :'#5599ddbb',
            transition: !isFocused ? '40': '0',
            outline : 'none',
        };

          //Alt2 //FUNKAR INTE!!!!
        //   const alexTest = stylesLabel.label
        //   top: !isFocused ? 2: -15;
        //   fontSize: !isFocused ? 20 : 14;
        //   color: !isFocused ? '#aaa' : '#000';
        //   ;

        return (
            <div style={stylesLabel.container} /*onMouseOut={this.handleBlur}*/>
            <label style={labelStyle}>Email</label>
            <input type="text" style={textBox} onFocus={this.handleFocus}
            onBlur={this.handleBlur} /*onMouseOver={this.handleFocus}*/ > 
            </input>
            </div>

        );
    }
}

class TextBox_width extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var delayTimer;

        var txtBox = document.getElementById("txt_box");
        var span = document.getElementById("hide_span");
        var txtBoxWidth = txtBox.getBoundingClientRect().width;

        function changeWidth(el, hideEl, maxWidth,
            fontSizeFromtxtBox, horizontalpaddingFromtxBox, borderSizeFromtxtBox) {

            //ALT2.
            hideEl.textContent = el.value;
            hideEl.style.fontSize = fontSizeFromtxtBox + "em";
            hideEl.style.border = borderSizeFromtxtBox + "px";
            var spanWidth = hideEl.getBoundingClientRect().width;
            spanWidth += horizontalpaddingFromtxBox * 2;
            //hideEl.style.padding = horizontalpaddingFromtxBox + "px"; //FUNKAR INTE MED PADDING..

            console.log("spanWidth:" + spanWidth);
            console.log("txtBoxWidth" + txtBoxWidth)

            if (spanWidth > txtBoxWidth && spanWidth < maxWidth) {
                el.style.width = spanWidth + "px";
            }
            else if (spanWidth < txtBoxWidth) {
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

        // clearTimeout(delayTimer);
        // delayTimer = setTimeout(test,200);

        //From DOM lever 2
        //You need to use keyup or else it will not "read" the letters correct.
        if (txtBox.addEventListener) {
            txtBox.addEventListener("keyup", function (e) { changeWidth(txtBox, span, 650, 1.2, 30, 1) }, false);
        } else {
            // For IE 5- 8
            txtBox.attachEvent("keyup", function (e) { changeWidth(txtBox, span, 650, 1.2, 30, 1) });
        }
    }

    render() {
        return (
            <div style={styles.container} id="outerDiv">
                <Sign type="info" text="This will soon be finished" />
                <Sign type="success" text="It's looking really good!" />
                <Sign type="warning" text="Under Construction" />
                <Sign type="error" text="Too much commented code!" />

                <SignModal type="error" header="Hi!" text="This is dangerous, try clicking on the X." />

                <span id="hide_span"></span>
                <input type="text" id="txt_box" style={styles.textBox} placeholder="Try me out!" />

                <TextBox_Floating_input/>


            </div>
        );
    }
}

export default Radium(TextBox_width);