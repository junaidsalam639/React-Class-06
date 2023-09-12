import React, { useState } from 'react'

const Es6_Practice = () => {
    const [num, setNum] = useState(0);
    const [num1, setNum1] = useState(0);
    // Es6 Promises
    function num_submit() {
        let promise = new Promise((resolve, reject) => {
            if (num < num1) {
                let fech = fetch('https://dummyjson.com/products')
                    .then((data) => {
                        return data.json()
                    })
                    .then((res) => {
                        console.log(res);
                        resolve(res)
                    })
            } else {
                reject('reject')
            }
        })
        promise.then((right) => {
            console.log('Promise', right.products);
            right.products.map((data) => {
                console.log(data);
            })
            alert('Promise resolve')
        }).catch((e) => {
            console.log('Promise', e);
            alert('Promise ' + e)
        })
    }

    //Es6 CallBack
    function abc(e, call) {
        console.log(e)
        call(20)
    }
    abc(10, function (data) {
        console.log('I am callback function', data);
    })

    //Es6 Promises Async/Await
    let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise resolved')
        }, 4000);
    })

    async function ayncFun() {
        let prom = await promise1;
        console.log(prom);
        console.log('Hello!');
    }
    ayncFun()

    return (
        <div>
            <input type="number" value={num} onChange={(e) => setNum(e.target.value)} /> <br /><br />
            <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} /> <br /><br />
            <button onClick={num_submit}>submit</button>

            <div className="container mx-auto mt-4">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card1" style={{width : '18rem'}}>
                            <img src="https://i.imgur.com/ZTkt4I5.jpg" className="card-img-top" alt="..." width={250} />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn1 mr-2"><i className="fas fa-link"></i> Visit Site</a>
                                <a href="#" className="btn1 "><i className="fab fa-github"></i> Github</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Es6_Practice
