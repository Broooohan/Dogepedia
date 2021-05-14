import React from 'react'
import puppy from '../images/puppy.jpg'

function Section() {

    const [css , setCss] = React.useState(true)
    const [name , setname] = React.useState("Dark Mode")

    function all() {
        callName();
        callCss();
    }

    function callCss() {
        if (css === false) {
            setCss(true);
        }else if (css === true) {
            setCss(false);
        }
    }
    function callName() {
        if (name === "Dark Mode") {
            setname("Light Mode");
        }else if (name === "Light Mode") {
            setname("Dark Mode");
        }
    }

    return (
        <>
            <div className="section" style={{backgroundColor: css?"black":null,color:css?"white":null}}>
            <div className="left">
                <h1>Dogepedia</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur id deleniti soluta tempora minima, perferendis sint illum sunt ut dolorum maxime adipisci. Laboriosam accusamus deserunt harum. Assumenda repellendus voluptate laudantium voluptates recusandae nihil laborum aperiam ea fuga, et ipsa alias soluta est quaerat laboriosam fugiat sit reiciendis possimus commodi suscipit, at vero? Ipsam animi cum, facilis ratione minima asperiores laudantium.</p>
                <button type="button" class={css?"btn btn-outline-info":"btn btn-outline-dark"} onClick={all}>{name}</button>
            </div>
            <div className="right"><img src={puppy} alt="Image" className="sectionimg"/></div>
            </div>
        </>
    )
}

export default Section

