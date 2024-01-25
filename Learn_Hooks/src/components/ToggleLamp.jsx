import React, { useState } from "react";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa";

/**
 * @todo
 * ubahlah implementasi stateful component dari class ke function
 * dengan memanfaatkan useState().
 */

// function ToggleLamp() {
//   const [lamp, setLamp] = useState("off");

//   const ChangeToOn = () => {
//     setLamp("on");
//   };

//   const ChangeToOff = () => {
//     setLamp("off");
//   };

//   return (
//     <div className="lamp">
//       {lamp === "on" ? (
//         <div className="on">
//           <button onClick={ChangeToOff}>
//             <FaLightbulb />
//           </button>
//           <h3>Hooks keren!</h3>
//         </div>
//       ) : (
//         <div className="off">
//           <button onClick={ChangeToOn}>
//             <FaRegLightbulb />
//           </button>
//           <h3>Hooks keren!</h3>
//         </div>
//       )}
//     </div>
//   );
// }

function ToggleLampFunc() {
  const [lamp, setLamp] = React.useState("off");

  const toggleLamp = () => {
    setLamp((prevLamp) => {
      return prevLamp === "off" ? "on" : "off";
    });
  };

  return (
    <div className={lamp}>
      <button onClick={toggleLamp}>
        {lamp === "on" ? <FaLightbulb /> : <FaRegLightbulb />}
      </button>
      <h3>hooks keren!</h3>
    </div>
  );
}

// class ToggleLamp extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       lamp: "off",
//     };

//     this.toggleLamp = this.toggleLamp.bind(this);
//   }

//   toggleLamp() {
//     this.setState((prevState) => {
//       return {
//         lamp: prevState.lamp === "off" ? "on" : "off",
//       };
//     });
//   }

//   render() {
//     return (
//       <div className={this.state.lamp}>
//         <button onClick={this.toggleLamp}>
//           {this.state.lamp === "on" ? <FaLightbulb /> : <FaRegLightbulb />}
//         </button>
//         <h3>Hooks keren!</h3>
//       </div>
//     );
//   }
// }

export default ToggleLampFunc;
