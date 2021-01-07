import React, {Component} from 'react';
import ReactDOM from "react-dom"
import AntForm from "./ant-form";
import 'antd/dist/antd.css';

class Comp extends Component {
  render() {
    console.log("what??");
    return <div>
      <AntForm/>
    </div>
  }
}

let existCondition = setInterval(function () {
  if (document.getElementById('react')) {
    ReactDOM.render(<Comp/>, document.getElementById('react'));
    clearInterval(existCondition);
  }
}, 100);


