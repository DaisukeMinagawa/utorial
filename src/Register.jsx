import React, { useState } from 'react'

const Register = () => {
    const [input, setInput] = useState('')
    const [items, setItems] = useState([])
    const [filtering, setFilter] = useState(0)
    const onClickRegister = () => {
        if (input == '') { return }
        setItems([input, ...items]);
        console.log(input);
        console.log('Registered!');
    };
    const onChangeInput = (event) => {
        setInput(event.target.value);
        console.log('input!');
    };

    const onChangeFilter = (event) => {
        const num = Number(event.target.value);
        setFilter(num);
    };

    /*この削除機能でTodoを削除できるのですが、削除した後に新たなTodoを登録すると以前に入力した
    * Todoが入力されてしまいます。どこの配列かオブジェクトに以前の入力内容がそれが残っているのかがわか* りません。
    */
    const onDeleteClick = (id) => {
        console.log('id: ' + id);
        console.log('item: ' + items[id]);
        console.log(items.index);
        const newItems = items.filter((item, index) => index !== id);
        setItems(newItems);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col align-self-center">
                    <h1>ToDo list</h1>
                    <input type='text' id='inputItem' onChange={onChangeInput} className="form-control" placeholder="やること" />
                    <button type='button' className='btn btn-primary' onClick={onClickRegister}>登録</button>
                    <br />
                    <select onChange={onChangeFilter}>
                        <option value='0'>全て</option>
                        <option value='3'>over 3</option>
                        <option value='6'>over 6</option>
                        <option value='9'>over 9</option>
                    </select>
                    <ul>
                        {items.filter(item => item.length > filtering).length <= 0 && <h2>No Contents</h2>}
                        {items.filter(item => item.length > filtering).map((item, index) => <li id={index} key={index}>{item}<button className='btn btn-danger' onClick={() => onDeleteClick(index, item)}>削除</button></li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Register