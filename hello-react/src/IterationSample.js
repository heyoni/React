import React, { Component } from 'react';


class IterationSample extends Component {
    state = {
        names :['봄', '여름', '가을', '겨울'],
        name:''
    };

    handleChange = (e) => {
        this.setState({
            name: e.target.value,
        });
    }

    handleInsert = () => {
        this.setState({
            // push를 사용하면 안되는 이유
            // state는 무조건 setstate로 변경해야하며 만약 배열을 변경한다고 해도,
            // 변경된 값들이 자동으로 리렌더링 되지 않기 떄문임
            names:this.state.names.concat(this.state.name),
            name:''
        });
    }

    handleRemove = (index) => {
        // const {names} = this.state;

        // this.setState({
        //     // 새 배열을 만들어서 클릭된 state값 앞뒤로 배열을 합친다
        //     names:[
        //         ...names.slice(0, index),
        //         ...names.slice(index + 1, names.length)
        //     ]
        // });

        //더 쉬운 방법
        const { names } = this.state;
        this.setState({
            //filter를 이용하여 index를 제외한 새 배열 만들기
            names: names.filter((item, i) => i !== index)
        });
    }

    render () {
        // const nameList = this.state.names.map(
        //     (name, index) => (<li key={index}>{name}</li>)
        // );

        const nameList = this.state.names.map(
            (name, index) => (
                <li
                  key={index}
                  onDoubleClick={() => this.handleRemove(index)}
                >
                  {name}
                </li>
            )
        )
        return (
            <div>
                <input
                    onChange={this.handleChange}
                    value={this.state.name}/>
                <button onClick={this.handleInsert}>추가</button>
                <ul>
                    {nameList}
                </ul>
            </div>
        );
    }
}
export default IterationSample;